/**
 * Gabungkan dokumen pengurus → anggota (peran: inti)
 * dan set peran: bidang pada anggota lama.
 */
import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID || process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.REACT_APP_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Butuh SANITY_PROJECT_ID dan SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function main() {
  const pengurus = await client.fetch(`*[_type == "pengurus"]`);
  const anggota = await client.fetch(`*[_type == "anggota"]`);

  console.log(`pengurus: ${pengurus.length}, anggota: ${anggota.length}`);

  for (const doc of anggota) {
    if (doc.peran) continue;
    await client
      .patch(doc._id)
      .set({ peran: "bidang" })
      .unset(["jabatan"])
      .commit();
    console.log("patched bidang", doc.nama);
  }

  for (const doc of pengurus) {
    const newId = doc._id.startsWith("pengurus-")
      ? doc._id.replace("pengurus-", "anggota-")
      : `anggota-${doc._id}`;

    await client.createOrReplace({
      _id: newId,
      _type: "anggota",
      nama: doc.nama,
      peran: "inti",
      jabatan: doc.jabatan,
      foto: doc.foto,
      urutan: doc.urutan ?? 0,
    });
    console.log("migrated inti", doc.nama, "→", newId);

    if (doc._id !== newId) {
      await client.delete(doc._id);
      console.log("deleted old", doc._id);
    }
  }

  // hapus sisa tipe pengurus jika id sama
  const leftover = await client.fetch(`*[_type == "pengurus"]._id`);
  for (const id of leftover) {
    await client.delete(id);
    console.log("deleted leftover", id);
  }

  console.log("Migrasi selesai.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * Seed konten BARDES ke Sanity.
 * Butuh: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN (Editor/write)
 *
 * Jalankan dari root:
 *   node scripts/seed-sanity.mjs
 */
import { createClient } from "@sanity/client";
import { createReadStream, existsSync } from "node:fs";
import { basename, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const img = (...parts) => join(root, "src", "assets", "image", ...parts);

const projectId = process.env.SANITY_PROJECT_ID || process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.REACT_APP_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || projectId === "yourProjectId") {
  console.error("Set SANITY_PROJECT_ID dulu.");
  process.exit(1);
}
if (!token) {
  console.error("Set SANITY_API_TOKEN (token dengan permission Editor) dulu.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function uploadImage(filePath) {
  if (!existsSync(filePath)) {
    console.warn("File tidak ada:", filePath);
    return undefined;
  }
  const asset = await client.assets.upload("image", createReadStream(filePath), {
    filename: basename(filePath),
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function upsert(doc) {
  await client.createOrReplace(doc);
  console.log("OK", doc._type, doc._id || doc.nama || doc.judul);
}

const pengurusInti = [
  { id: "anggota-ketua", nama: "Muhammad Zumbri", jabatan: "Ketua", file: "umbi.jpg", urutan: 1 },
  { id: "anggota-wakil", nama: "Akhmad Dzikra Riyadi", jabatan: "Wakil Ketua", file: "ijik.jpg", urutan: 2 },
  { id: "anggota-sekretaris", nama: "Mustafa Kamal", jabatan: "Sekretaris", file: "tafa.jpg", urutan: 3 },
  { id: "anggota-bendahara", nama: "Abu Bakar", jabatan: "Bendahara", file: "abu.jpg", urutan: 4 },
];

const anggotaBidang = [
  { id: "anggota-fazril", nama: "Muhammad Fazril", bidang: "Humas", file: "fazril.jpg", urutan: 1 },
  { id: "anggota-rizal", nama: "Muhammad Rizal", bidang: "Humas", file: "jawaw.jpg", urutan: 2 },
  { id: "anggota-aldi-syah", nama: "Muhammad Aldi Syahputra", bidang: "Humas", file: "idan.jpg", urutan: 3 },
  { id: "anggota-rahman", nama: "Rahman", bidang: "Kordinator Lapangan", file: "abdur.png", urutan: 1 },
  { id: "anggota-alpian", nama: "Muhammad Alpian Nor", bidang: "Kordinator Lapangan", file: "anduh.png", urutan: 2 },
  { id: "anggota-amal", nama: "Amaluddin Siagian", bidang: "Kesehatan", file: "default.jpg", urutan: 1 },
  { id: "anggota-ansyari", nama: "Muhammad Ansyari", bidang: "Kesehatan", file: "amang.jpg", urutan: 2 },
  { id: "anggota-donny", nama: "Muhammad Donny Septian", bidang: "Kesehatan", file: "donny.jpg", urutan: 3 },
  { id: "anggota-rifai", nama: "Ahmad Rifai", bidang: "Pemeliharaan", file: "fai.jpg", urutan: 1 },
  { id: "anggota-khafi", nama: "Muhammad Khafi", bidang: "Pemeliharaan", file: "hapi.png", urutan: 2 },
  { id: "anggota-riswan", nama: "Muhammad Riswan", bidang: "Pemeliharaan", file: "iwan.png", urutan: 3 },
  { id: "anggota-wahyu", nama: "Muhammad Wahyuni", bidang: "Dokumentasi", file: "wahyu.jpg", urutan: 1 },
  { id: "anggota-daud", nama: "Muhammad Daud", bidang: "Dokumentasi", file: "daud.jpg", urutan: 2 },
  { id: "anggota-aldi", nama: "Muhammad Aldi", bidang: "Dokumentasi", file: "aldi.jpg", urutan: 3 },
];

const dokumentasi = [
  {
    id: "dokumentasi-hss-cup-2024",
    judul: "HSS CUP 2024",
    subtitle: "Lomba Ketangkasan Pemadam Kebakaran se-HSS",
    deskripsi:
      "Dalam rangka meningkatkan keterampilan dan semangat juang para pemadam kebakaran, Bupati Hulu Sungai Selatan HSS dengan bangga mempersembahkan HSS CUP 2024, ajang lomba ketangkasan pemadam kebakaran se-HSS.",
    file: "bardes1.jpg",
    tanggal: "2024-01-01",
    urutan: 1,
  },
  {
    id: "dokumentasi-jaga-jalur-2025",
    judul: "Jaga Jalur Haul Abah Guru Sekumpul 2025",
    subtitle: "Menjaga Kelancaran Jamaah Haul",
    deskripsi:
      "Pada tanggal 5 Januari 2025, tim pemadam kebakaran bersama relawan lainnya turut serta dalam kegiatan Jaga Jalur Haul Abah Guru Sekumpul. Kegiatan ini bertujuan untuk memastikan kelancaran lalu lintas serta keselamatan jamaah yang hadir dalam peringatan haul. Dengan koordinasi yang baik dan kesiapsiagaan penuh, kami berkomitmen untuk memberikan pengamanan terbaik demi kelancaran acara yang penuh berkah ini.",
    file: "bardes2.jpg",
    tanggal: "2025-01-05",
    urutan: 2,
  },
];

async function main() {
  console.log("Seeding ke project", projectId, dataset);

  const heroImage = await uploadImage(img("bardesfr.jpg"));

  await upsert({
    _id: "siteSettings",
    _type: "siteSettings",
    heroBrand: "BARDES",
    heroTitle: "Siaga melindungi desa",
    heroLead:
      "Barisan Relawan Desa siap bertindak cepat menghadapi ancaman kebakaran.",
    heroImage,
    aboutLabel: "Tentang kami",
    aboutTitle: "Barisan Relawan Desa",
    aboutLead:
      "BARDES lahir dari kesadaran masyarakat untuk menjaga desa dari ancaman kebakaran — dibentuk oleh pemuda dengan semangat gotong royong.",
    aboutBody:
      "Relawan dari berbagai kalangan bersatu menjadi tim yang siap siaga menghadapi situasi darurat. Keberadaan BARDES memberi rasa aman bagi warga: ada orang yang siap bertindak cepat bila api mengancam rumah dan lahan.",
    footerTagline:
      "Barisan Relawan Desa — siaga melindungi desa dari ancaman kebakaran.",
    alamatBaris1: "Jl. Negara Kandangan, Banjar Baru",
    alamatBaris2: "Kalimantan Selatan",
    telepon: "0821 5492 3388",
    email: "bardes.firefighter@gmail.com",
    whatsappUrl: "https://wa.me/6282154923388",
    instagramUrl: "https://instagram.com",
  });

  for (const p of pengurusInti) {
    const foto = await uploadImage(img(p.file));
    await upsert({
      _id: p.id,
      _type: "anggota",
      nama: p.nama,
      peran: "inti",
      jabatan: p.jabatan,
      urutan: p.urutan,
      foto,
    });
  }

  for (const a of anggotaBidang) {
    const foto = await uploadImage(img(a.file));
    await upsert({
      _id: a.id,
      _type: "anggota",
      nama: a.nama,
      peran: "bidang",
      bidang: a.bidang,
      urutan: a.urutan,
      foto,
    });
  }

  for (const d of dokumentasi) {
    const foto = await uploadImage(img(d.file));
    await upsert({
      _id: d.id,
      _type: "dokumentasi",
      judul: d.judul,
      subtitle: d.subtitle,
      deskripsi: d.deskripsi,
      tanggal: d.tanggal,
      urutan: d.urutan,
      foto,
    });
  }

  console.log("Seed selesai.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

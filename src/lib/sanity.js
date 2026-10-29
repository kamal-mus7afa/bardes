import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET || "production";

export const isSanityConfigured = Boolean(projectId && projectId !== "yourProjectId");

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!builder || !source) return "";
  return builder.image(source).auto("format").url();
}

export const queries = {
  dokumentasi: `*[_type == "dokumentasi"] | order(urutan asc, tanggal desc) {
    _id,
    judul,
    subtitle,
    deskripsi,
    tanggal,
    urutan,
    foto
  }`,
  pengurus: `*[_type == "anggota" && peran == "inti"] | order(urutan asc) {
    _id,
    nama,
    jabatan,
    urutan,
    foto
  }`,
  anggota: `*[_type == "anggota" && peran == "bidang"] | order(urutan asc) {
    _id,
    nama,
    bidang,
    urutan,
    foto
  }`,
  siteSettings: `*[_type == "siteSettings" && _id == "siteSettings"][0] {
    heroBrand,
    heroTitle,
    heroLead,
    heroImage,
    aboutLabel,
    aboutTitle,
    aboutLead,
    aboutBody,
    footerTagline,
    alamatBaris1,
    alamatBaris2,
    telepon,
    email,
    whatsappUrl,
    instagramUrl
  }`,
  kegiatanPreview: `*[_type == "dokumentasi"] | order(urutan asc, tanggal desc) [0...2] {
    _id,
    judul,
    foto
  }`,
};

import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Pengaturan Situs",
  type: "document",
  fields: [
    defineField({
      name: "heroBrand",
      title: "Brand Hero",
      type: "string",
      initialValue: "BARDES",
    }),
    defineField({
      name: "heroTitle",
      title: "Judul Hero",
      type: "string",
      initialValue: "Siaga melindungi desa",
    }),
    defineField({
      name: "heroLead",
      title: "Kalimat Hero",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroImage",
      title: "Foto Hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutLabel",
      title: "Label Tentang",
      type: "string",
      initialValue: "Tentang kami",
    }),
    defineField({
      name: "aboutTitle",
      title: "Judul Tentang",
      type: "string",
      initialValue: "Barisan Relawan Desa",
    }),
    defineField({
      name: "aboutLead",
      title: "Lead Tentang",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutBody",
      title: "Isi Tentang",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "footerTagline",
      title: "Tagline Footer",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "alamatBaris1",
      title: "Alamat baris 1",
      type: "string",
    }),
    defineField({
      name: "alamatBaris2",
      title: "Alamat baris 2",
      type: "string",
    }),
    defineField({
      name: "telepon",
      title: "Telepon",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "whatsappUrl",
      title: "Link WhatsApp",
      type: "url",
    }),
    defineField({
      name: "instagramUrl",
      title: "Link Instagram",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Pengaturan Situs" };
    },
  },
});

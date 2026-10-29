import { defineField, defineType } from "sanity";

const JABATAN_INTI = [
  { title: "Ketua", value: "Ketua" },
  { title: "Wakil Ketua", value: "Wakil Ketua" },
  { title: "Sekretaris", value: "Sekretaris" },
  { title: "Bendahara", value: "Bendahara" },
];

const BIDANG = [
  { title: "Humas", value: "Humas" },
  { title: "Koordinator Lapangan", value: "Kordinator Lapangan" },
  { title: "Kesehatan", value: "Kesehatan" },
  { title: "Pemeliharaan", value: "Pemeliharaan" },
  { title: "Dokumentasi", value: "Dokumentasi" },
];

export default defineType({
  name: "anggota",
  title: "Anggota",
  type: "document",
  fields: [
    defineField({
      name: "nama",
      title: "Nama",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "peran",
      title: "Peran",
      type: "string",
      description:
        "Ubah ini untuk menaikkan/menurunkan jabatan (Pengurus Inti ↔ Anggota Bidang).",
      options: {
        list: [
          { title: "Pengurus Inti", value: "inti" },
          { title: "Anggota Bidang", value: "bidang" },
        ],
        layout: "radio",
      },
      initialValue: "bidang",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jabatan",
      title: "Jabatan Inti",
      type: "string",
      options: { list: JABATAN_INTI, layout: "radio" },
      hidden: ({ parent }) => parent?.peran !== "inti",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.peran === "inti" && !value) {
            return "Pilih jabatan pengurus inti";
          }
          return true;
        }),
    }),
    defineField({
      name: "bidang",
      title: "Bidang",
      type: "string",
      options: { list: BIDANG },
      hidden: ({ parent }) => parent?.peran !== "bidang",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.peran === "bidang" && !value) {
            return "Pilih bidang anggota";
          }
          return true;
        }),
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "urutan",
      title: "Urutan",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Urutan",
      name: "urutanAsc",
      by: [{ field: "urutan", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "nama",
      peran: "peran",
      jabatan: "jabatan",
      bidang: "bidang",
      media: "foto",
    },
    prepare({ title, peran, jabatan, bidang, media }) {
      const subtitle =
        peran === "inti" ? `Inti · ${jabatan || "-"}` : `Bidang · ${bidang || "-"}`;
      return { title, subtitle, media };
    },
  },
});

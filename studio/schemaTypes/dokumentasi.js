import { defineField, defineType } from "sanity";

export default defineType({
  name: "dokumentasi",
  title: "Dokumentasi",
  type: "document",
  fields: [
    defineField({
      name: "judul",
      title: "Judul",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "deskripsi",
      title: "Deskripsi",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tanggal",
      title: "Tanggal",
      type: "date",
    }),
    defineField({
      name: "urutan",
      title: "Urutan",
      type: "number",
      description: "Angka lebih kecil tampil lebih dulu",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Urutan",
      name: "urutanAsc",
      by: [{ field: "urutan", direction: "asc" }],
    },
    {
      title: "Tanggal terbaru",
      name: "tanggalDesc",
      by: [{ field: "tanggal", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "judul",
      subtitle: "subtitle",
      media: "foto",
    },
  },
});

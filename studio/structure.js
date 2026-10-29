export const structure = (S) =>
  S.list()
    .title("Konten BARDES")
    .items([
      S.listItem()
        .title("Pengaturan Situs")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Pengaturan Situs")
        ),
      S.divider(),
      S.listItem()
        .title("Pengurus Inti")
        .child(
          S.documentList()
            .title("Pengurus Inti")
            .filter('_type == "anggota" && peran == "inti"')
            .defaultOrdering([{ field: "urutan", direction: "asc" }])
            .initialValueTemplates([
              S.initialValueTemplateItem("anggota-inti"),
            ])
        ),
      S.listItem()
        .title("Anggota Bidang")
        .child(
          S.documentList()
            .title("Anggota Bidang")
            .filter('_type == "anggota" && peran == "bidang"')
            .defaultOrdering([{ field: "urutan", direction: "asc" }])
            .initialValueTemplates([
              S.initialValueTemplateItem("anggota-bidang"),
            ])
        ),
      S.documentTypeListItem("dokumentasi").title("Dokumentasi"),
    ]);

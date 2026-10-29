import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "m8ra1cf3";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "bardes",
  title: "BARDES CMS",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev.filter((template) => template.id !== "anggota"),
      {
        id: "anggota-inti",
        title: "Pengurus Inti",
        schemaType: "anggota",
        value: { peran: "inti" },
      },
      {
        id: "anggota-bidang",
        title: "Anggota Bidang",
        schemaType: "anggota",
        value: { peran: "bidang" },
      },
    ],
  },
});

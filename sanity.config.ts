import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "sanity-studio-portfolio",
  title: "Sanity Next.js Site",
  projectId: "2yg84u70",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

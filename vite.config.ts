import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import type { PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [tailwindcss(), mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [
        remarkFrontmatter,
        // exposes frontmatter as an exported `frontmatter` object
        [remarkMdxFrontmatter, { name: "frontmatter" }],
      ],
    }),reactRouter(), tsconfigPaths()] as PluginOption[],
});

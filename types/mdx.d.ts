declare module "*.mdx" {
  import type { FunctionComponent } from "react";
  const MDXComponent: FunctionComponent<any>;
  export default MDXComponent;

  export const frontmatter: Record<string, unknown>;
}

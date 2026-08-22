import type { Element, ElementContent } from "hast";

const nodeText = (node: ElementContent): string => {
  if (node.type === "text") return node.value;
  if (node.type === "element") return plainText(node);
  return "";
};

export const plainText = (node: Readonly<Element>): string =>
  node.children.map(nodeText).join("");

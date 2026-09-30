import expressiveCode from "satteri-expressive-code";
import { ecRenderer } from "./config";
import { inlineExpressiveCode } from "./inline";

/** Plugin hast: blocos ``` com moldura, título, copiar, marcações. */
export const blockExpressiveCode = expressiveCode({
  customCreateRenderer: () => ecRenderer,
});

export { inlineExpressiveCode };

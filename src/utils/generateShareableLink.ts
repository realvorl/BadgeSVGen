// src/utils/generateShareableLink.ts
import { encodeToBase64 } from "./base64Utils";

export const generateShareableLink = (inputs: any) => {
  const base64String = encodeToBase64(inputs);
  return `${window.location.origin}${window.location.pathname}?data=${base64String}`;
};

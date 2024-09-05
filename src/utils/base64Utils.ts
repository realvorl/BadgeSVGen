// src/utils/base64Utils.ts
export const encodeToBase64 = (json: object) => {
  return btoa(JSON.stringify(json));
};

export const decodeFromBase64 = (base64: string) => {
  const jsonString = atob(base64);
  return JSON.parse(jsonString);
};

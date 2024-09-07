// base64Utils.ts
export function encodeToBase64(input: string) {
  const utf8Encoder = new TextEncoder();
  const byteArray = utf8Encoder.encode(input);
  let binaryString = '';
  byteArray.forEach(byte => {
    binaryString += String.fromCharCode(byte);
  });
  return btoa(binaryString);
}

export function decodeFromBase64(encoded: string) {
  const binaryString = atob(encoded);
  const byteArray = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    byteArray[i] = binaryString.charCodeAt(i);
  }
  const utf8Decoder = new TextDecoder();
  return utf8Decoder.decode(byteArray);
}

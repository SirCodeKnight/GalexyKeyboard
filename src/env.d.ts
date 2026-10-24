/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '@anthro-ai/krutidev-unicode' {
  const convert: (text: string) => string;
  export default convert;
}

declare module 'bijoy-unicode-converter' {
  export function ConvertToUnicode(source: string, text: string): string;
  export function ConvertToASCII(source: string, text: string): string;
}

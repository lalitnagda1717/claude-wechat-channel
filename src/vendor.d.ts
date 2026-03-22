declare module "qrcode-terminal" {
  const qrcode: {
    generate(text: string, opts?: { small?: boolean }, cb?: (output: string) => void): void;
  };
  export default qrcode;
}

declare module "silk-wasm" {
  export function decode(
    silk: Buffer,
    sampleRate: number,
  ): Promise<{ data: Uint8Array; duration: number }>;
}

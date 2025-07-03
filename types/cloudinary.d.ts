declare module "@cloudinary/url-gen" {
  export class Cloudinary {
    constructor(config: { cloud: { cloudName: string } });
    image(publicId: string): any;
    // Tambahkan metode atau properti lain yang Anda gunakan dari Cloudinary
  }
}

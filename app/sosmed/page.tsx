import React from "react";
import { Instagram, Youtube, Music, Facebook } from "lucide-react";

export default function SosmedPage() {
  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-2 text-center text-teal-800 tracking-tight">
        Media Sosial PAC IPNU IPPNU Bulu
      </h1>
      <p className="mb-8 text-center text-teal-600 font-medium max-w-2xl mx-auto">
        Ikuti kami di media sosial untuk update terbaru, kegiatan, dan informasi
        penting lainnya dari PAC IPNU IPPNU Bulu!
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            Terhubung dengan Kami
          </h2>
          <div className="space-y-6 text-teal-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-pink-500 pl-3 bg-pink-50 p-4 rounded-r-lg hover:bg-pink-100 transition-colors duration-300">
                <a
                  href="https://www.instagram.com/pacipnuippnubulu?igsh=cHV0YXJobnIwNmFs&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-pink-700 hover:text-pink-500 transition-colors duration-200"
                >
                  <Instagram className="mr-2" size={24} />
                  <span className="font-semibold">Instagram</span>
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Ikuti kami di Instagram untuk foto, video, dan cerita kegiatan
                  terbaru.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-3 bg-red-50 p-4 rounded-r-lg hover:bg-red-100 transition-colors duration-300">
                <a
                  href="https://youtube.com/@pelajarnubulu3738?si=u_IpwDXn9mqjpBwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-red-700 hover:text-red-500 transition-colors duration-200"
                >
                  <Youtube className="mr-2" size={24} />
                  <span className="font-semibold">YouTube</span>
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Subscribe channel YouTube kami untuk video kegiatan dan konten
                  inspiratif.
                </p>
              </div>
              <div className="border-l-4 border-black pl-3 bg-gray-50 p-4 rounded-r-lg hover:bg-gray-100 transition-colors duration-300">
                <a
                  href="https://www.tiktok.com/@pelajar.nu.bulu?_t=ZS-8xd5XQZmnnr&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-black hover:text-gray-700 transition-colors duration-200"
                >
                  <Music className="mr-2" size={24} />
                  <span className="font-semibold">TikTok</span>
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Lihat konten kreatif kami di TikTok untuk hiburan dan
                  informasi singkat.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-3 bg-blue-50 p-4 rounded-r-lg hover:bg-blue-100 transition-colors duration-300">
                <a
                  href="https://www.facebook.com/share/1Evuj8Pg4F/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-blue-700 hover:text-blue-500 transition-colors duration-200"
                >
                  <Facebook className="mr-2" size={24} />
                  <span className="font-semibold">Facebook</span>
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Like halaman Facebook kami untuk update dan diskusi komunitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

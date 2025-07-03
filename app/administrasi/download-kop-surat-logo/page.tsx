import React from "react";

export default function DownloadKopSuratLogoPage() {
  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-2 text-center text-teal-800 tracking-tight">
        Download KOP Surat dan Logo
      </h1>
      <p className="mb-8 text-center text-teal-600 font-medium max-w-2xl mx-auto">
        Berikut adalah dokumen KOP surat dan logo untuk IPNU IPPNU. Anda dapat
        mengunduh file-file ini untuk keperluan administrasi.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            Dokumen dan Logo
          </h2>
          <div className="space-y-4 text-teal-900">
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                File Tersedia untuk Diunduh:
              </strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/Format KOP Surat Bersama IPNU IPPNU.docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    Format KOP Surat Bersama IPNU IPPNU.docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Format KOP surat resmi bersama IPNU IPPNU.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/Format KOP Surat IPNU.docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    Format KOP Surat IPNU.docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Format KOP surat resmi IPNU.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/Format KOP Surat IPPNU.docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    Format KOP Surat IPPNU.docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Format KOP surat resmi IPPNU.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/KOP Amplop Muharroman.docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    KOP Amplop Muharroman.docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Format KOP untuk amplop Muharroman.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/LOGO EMAIL KOP.png"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    LOGO EMAIL KOP.png
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Logo untuk email KOP.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/LOGO IPNU.png"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    LOGO IPNU.png
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Logo resmi IPNU.</p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/LOGO IPPNU.png"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    LOGO IPPNU.png
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Logo resmi IPPNU.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/LOGO TLP KOP.png"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    LOGO TLP KOP.png
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Logo untuk TLP KOP.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/kopsurat_logo/LOGO WEBSITE KOP.png"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    LOGO WEBSITE KOP.png
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Logo untuk website KOP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

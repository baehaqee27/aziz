import React from "react";

export default function ContohPengajuanSpPage() {
  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-2 text-center text-teal-800 tracking-tight">
        Contoh Pengajuan SP Pimpinan Ranting
      </h1>
      <p className="mb-8 text-center text-teal-600 font-medium max-w-2xl mx-auto">
        Berikut adalah contoh dokumen pengajuan SP untuk Pimpinan Ranting IPNU
        IPPNU. Anda dapat mengunduh file-file ini sebagai referensi.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            Dokumen Pengajuan
          </h2>
          <div className="space-y-4 text-teal-900">
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                File Tersedia untuk Diunduh:
              </strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/pengajuan/Berita_Acara_Pemilihan_Ketua_Ranting.docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    Berita Acara Pemilihan Ketua Ranting.docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Dokumen berita acara untuk pemilihan ketua ranting.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/pengajuan/Berita_Acara_Rapat_Tim_Formatur.docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    Berita Acara Rapat Tim Formatur.docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Dokumen berita acara rapat tim formatur.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/pengajuan/Contoh_Surat_Permohonan_Rekomendasi_PAC_IPNU.docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    Contoh Surat Permohonan Rekomendasi PAC IPNU.docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Contoh surat permohonan rekomendasi dari PAC IPNU.
                  </p>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <a
                    href="/files/pengajuan/Surat_Rekomendasi_Pengesahan(Dibuat Oleh PAC).docx"
                    download
                    className="block text-base text-teal-700 hover:text-teal-500 transition-colors duration-200"
                  >
                    Surat Rekomendasi Pengesahan (Dibuat Oleh PAC).docx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Dokumen surat rekomendasi pengesahan yang dibuat oleh PAC.
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

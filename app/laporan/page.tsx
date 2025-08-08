"use client";

import React, { useState } from "react";
import { daftarLaporan, Laporan } from "@/data/laporanData";

export default function LaporanPage() {
  const [laporanTerpilih, setLaporanTerpilih] = useState<Laporan | null>(null);

  if (!daftarLaporan || daftarLaporan.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Laporan Pelajar NU Bulu</h1>
        <p className="text-gray-600">
          Saat ini belum ada laporan yang tersedia.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
          Arsip Laporan PAC IPNU IPPNU Bulu
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Kolom Kiri: Daftar Laporan */}
          <div className="lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Daftar Arsip
            </h2>
            <div className="space-y-3">
              {/* TypeScript sekarang tahu bahwa 'laporan' di sini memiliki tipe 'Laporan' */}
              {daftarLaporan.map((laporan, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    laporanTerpilih?.file === laporan.file
                      ? "bg-teal-100 border-teal-400 shadow"
                      : "bg-white border-gray-200 hover:border-teal-300 hover:shadow-sm"
                  }`}
                >
                  <h3 className="font-bold text-teal-800">{laporan.judul}</h3>
                  <p className="text-sm text-gray-600 mt-1 mb-3">
                    {laporan.deskripsi}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setLaporanTerpilih(laporan)}
                      className="px-3 py-1 text-sm font-semibold bg-teal-500 text-white rounded hover:bg-teal-600"
                    >
                      Lihat
                    </button>
                    <a
                      href={`/files/laporan/${laporan.file}`}
                      download={laporan.file}
                      className="px-3 py-1 text-sm font-semibold bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      Unduh
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Kolom Kanan: Tampilan PDF */}
          <div className="lg:col-span-8">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Pratinjau Dokumen
              </h2>
              <div className="border-4 border-gray-200 rounded-lg shadow-lg overflow-hidden h-[75vh]">
                {laporanTerpilih ? (
                  <iframe
                    // PERBAIKAN PENTING: Menambahkan 'key' akan memaksa iframe untuk me-render ulang
                    // saat Anda memilih file baru, ini memastikan pratinjau selalu update.
                    key={laporanTerpilih.file}
                    // PERUBAHAN: Path untuk pratinjau disesuaikan
                    src={`/files/laporan/${laporanTerpilih.file}`}
                    title={`Laporan Viewer - ${laporanTerpilih.judul}`}
                    width="100%"
                    height="100%"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <p className="text-gray-500 font-medium">
                      Pilih laporan untuk melihat pratinjau.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

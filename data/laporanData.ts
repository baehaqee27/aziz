// src/data/laporanData.js

// 1. Definisikan "bentuk" atau tipe untuk sebuah objek laporan.
// Tanda tanya (?) berarti properti 'deskripsi' bersifat opsional.
export interface Laporan {
  file: string;
  judul: string;
  deskripsi?: string;
}

// 2. Beri tahu TypeScript bahwa 'daftarLaporan' adalah sebuah array
//    yang berisi objek dengan tipe 'Laporan'.
export const daftarLaporan: Laporan[] = [
  {
    // Nama file persis seperti yang ada di folder public/laporan
    file: "LPJ Lomba Samroh Anak & IPNU IPPNU.pdf",
    // Judul yang akan ditampilkan di halaman web
    judul: "LPJ Lomba Samroh Anak & IPNU IPPNU",
    // Deskripsi singkat (opsional)
    deskripsi:
      "Laporan pertanggungjawaban kegiatan Lomba Samroh Anak & IPNU IPPNU.",
  },
  {
    file: "LPJ Pelajar nu idol.pdf",
    judul: "LPJ Pelajar NU Idol",
    deskripsi: "Laporan pertanggungjawaban kegiatan Pelajar NU Idol.",
  },
  // --- TAMBAHKAN LAPORAN BARU DI SINI ---
  // Contoh:
  // {
  //   file: "nama_file_baru.pdf",
  //   judul: "Judul Laporan Baru Anda",
  //   deskripsi: "Deskripsi singkat laporan baru.",
  // },
];

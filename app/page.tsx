import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 p-6 overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto mt-16 mb-20">
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-teal-300 rounded-full opacity-30 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-teal-300 rounded-full opacity-30 blur-xl animate-pulse delay-1000"></div>
        <h1 className="text-5xl font-extrabold text-teal-800 mb-4 tracking-tight animate-fade-in-down">
          Media Aswaja untuk Generasi Berdaya
        </h1>
        <p className="text-lg text-justify text-teal-600 font-medium mb-8 max-w-2xl mx-auto animate-fade-in-up">
          <span className="font-bold text-teal-700">PELAJAR NU BULU</span>{" "}
          adalah portal informasi resmi yang dikelola oleh Pelajar NU Kecamatan
          Bulu, Kabupaten Rembang. Website ini hadir sebagai media digital yang
          menyajikan berita terkini, kegiatan pelajar, ke-NU-an, dan
          perkembangan masyarakat se-Kecamatan Bulu secara aktual, inspiratif,
          dan terpercaya.
        </p>
        <Link
          href="/news"
          className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300"
        >
          Lihat Berita
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-10 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
          Apa yang Kami Tawarkan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-.243.972A6 6 0 0112 6.051v2.284M8 9.569v5.66M4 16h16"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Berita Terkini
            </h3>
            <p className="text-teal-600">
              Dapatkan informasi terbaru seputar kegiatan Pelajar NU dan
              masyarakat Kecamatan Bulu.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Kegiatan Pelajar
            </h3>
            <p className="text-teal-600">
              Ikuti update kegiatan, pelatihan, dan acara yang diadakan oleh
              Pelajar NU Bulu.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Ke-NU-an
            </h3>
            <p className="text-teal-600">
              Pelajari nilai-nilai ke-NU-an dan informasi penting terkait
              organisasi Nahdlatul Ulama.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16 mb-16 rounded-3xl max-w-5xl mx-auto text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-xl"></div>
        <h2 className="text-3xl font-bold mb-4">Bergabung dengan Kami</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Jadilah bagian dari Pelajar NU Bulu untuk berkontribusi dalam
          membangun generasi berdaya!
        </p>
        <Link
          href="/sosmed"
          className="inline-block px-8 py-3 bg-white text-teal-600 font-semibold rounded-full shadow-lg hover:bg-teal-50 hover:scale-105 transition-all duration-300"
        >
          Hubungi Kami
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-10 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
          Sorotan Kegiatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-100">
            <div className="w-full h-48 bg-teal-200 flex items-center justify-center relative">
              <span className="text-white font-bold text-xl">Kegiatan 1</span>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-700 to-transparent opacity-30"></div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                Pelatihan Kader
              </h3>
              <p className="text-teal-600 text-sm">
                Pelatihan untuk membentuk generasi muda NU yang tangguh dan
                berwawasan luas.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-100">
            <div className="w-full h-48 bg-teal-300 flex items-center justify-center relative">
              <span className="text-white font-bold text-xl">Kegiatan 2</span>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-700 to-transparent opacity-30"></div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                Bakti Sosial
              </h3>
              <p className="text-teal-600 text-sm">
                Kegiatan sosial untuk membantu masyarakat sekitar Kecamatan
                Bulu.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-100 md:col-span-2 lg:col-span-1">
            <div className="w-full h-48 bg-teal-400 flex items-center justify-center relative">
              <span className="text-white font-bold text-xl">Kegiatan 3</span>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-700 to-transparent opacity-30"></div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                Diskusi Ke-NU-an
              </h3>
              <p className="text-teal-600 text-sm">
                Forum diskusi untuk memperdalam pemahaman tentang nilai-nilai
                NU.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

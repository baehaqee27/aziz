import React from "react";

export default function PrPondokrejoPage() {
  // Komponen halaman untuk PR. IPNU IPPNU Ds. Pondokrejo
  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-2 text-center text-teal-800 tracking-tight">
        PR. IPNU IPPNU Ds. Pondokrejo
      </h1>
      <p className="mb-8 text-center text-teal-600 font-medium max-w-2xl mx-auto">
        Susunan Pengurus Pimpinan Ranting IPNU IPPNU Desa Pondokrejo, Kecamatan
        Bulu, Kabupaten Rembang untuk Masa Khidmat 2025 – 2027.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* IPNU Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            IPNU (Ikatan Pelajar Nahdlatul Ulama)
          </h2>
          <div className="space-y-5 text-teal-900">
            {/* Pelindung & Pembimbing (Asumsi) */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Pelindung:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Kepala Desa Pondokrejo
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  NU Ranting Desa Pondokrejo
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Pembimbing:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Pengurus Fatayat NU
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Pengurus Muslimat NU
                </li>
              </ul>
            </div>

            {/* Pengurus Harian */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  M. Rifqi
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Wakil Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  M. Dimas Saputra
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Sekretaris:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  M. Rifqi Iqbal Luhur
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Bendahara:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Jeri Duwi Saputra
                </li>
              </ul>
            </div>

            {/* Departemen */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Departemen – Departemen:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Organisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Dwi Nur Afan
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Erik Bagus Erlangga
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kaderisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Rizki Pratama
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Ahmad Yamadi
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Minat Bakat:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Rifki Zainal Abidin
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Angga Dwi Ardika
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kominfo:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Zainal Abid
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Nur Hadi
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Mahendra Edi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IPPNU Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            IPPNU (Ikatan Pelajar Putri Nahdlatul Ulama)
          </h2>
          <div className="space-y-5 text-teal-900">
            {/* Pelindung & Pembimbing (Asumsi) */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Pelindung:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Kepala Desa Pondokrejo
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  NU Ranting Desa Pondokrejo
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Pembimbing:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Pengurus Fatayat NU
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Pengurus Muslimat NU
                </li>
              </ul>
            </div>

            {/* Pengurus Harian */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Alfiqoh Raihani Fadhila Ningrum
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Wakil Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Galuh Safira Maharani
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Sekretaris:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Feti Artika Dewi
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Bendahara:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Masrusoh Dwi Fitria
                </li>
              </ul>
            </div>

            {/* Departemen */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Departemen – Departemen:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Organisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Refi Dwi Saputri
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Hur Hidayat
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kaderisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Rizki Pratama
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Ahmad Yamadi
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Minat Bakat:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Rifki Zainal Abidin
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Angga Dwi Ardika
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kominfo:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Zainal Abid
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Nur Hadi
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Mahendra Edi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

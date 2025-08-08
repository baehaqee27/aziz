import React from "react";

export default function PacIpnuIppnuBuluPage() {
  // Komponen halaman untuk PAC IPNU IPPNU Bulu
  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-2 text-center text-teal-800 tracking-tight">
        PAC IPNU IPPNU Bulu
      </h1>
      <p className="mb-8 text-center text-teal-600 font-medium max-w-2xl mx-auto">
        Berikut adalah struktur organisasi Pimpinan Anak Cabang IPNU IPPNU
        Kecamatan Bulu, Kabupaten Rembang, Masa Khidmat 2023 - 2025.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* IPNU Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            IPNU (Ikatan Pelajar Nahdlatul Ulama)
          </h2>
          <div className="space-y-5 text-teal-900">
            {/* BPH IPNU */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Muhammad Azka Aziz
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Wakil Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Muahmmad Fachrizal Misbahuddin
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Sekretaris:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Muhammad Nashuikhul Ibadllah
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Bendahara:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Muhammad Alwi Rozikin
                </li>
              </ul>
            </div>

            {/* Departemen IPNU */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Departemen – Departemen:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Organisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Muhammad Nur Rojabiana Munfiqon (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Muhammad Dimas Saputra
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Ahmad Miftah Nasirudin
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kaderisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Chasan Isa A (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Muhammad Dzikrullohi Akbar
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Rendi Ahmad Fawzi
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Ahmad Heru Hariyanto
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    Dpt. Jaringan Pesantren, Sekolah & PT:
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Abdul Mufid (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Muhammad Dwi Ardiyansah
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Mohammad Akbar Abada
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    Dpt. Komunikasi & Informasi:
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Yoga Ananda Siswanto (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Habib Taufiq Alula
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M. Falikhul Isbah
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    Dpt. Minat, Bakat & Olahraga:
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Muhammad Rifki Iqballuhur (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Izzat Hilmi
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      M Habib Taufiq Alula
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lembaga IPNU */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Lembaga:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    CBP (Corp Brigade Pembangunan):
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Komandan: Ahmad Yugafaniarga
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Wakil Komandan: Hendri Rudianto
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
          <div className="space-y-5 text-gray-900">
            {/* BPH IPPNU */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Sonia Mufliha Bilqis
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Wakil Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Nur Kholishotun N (Wakil Ketua I)
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Hilda Rahmawati F (Wakil Ketua II)
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Alfiqoh Raihani F.N (Wakil Ketua III)
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Nia Ayu Fatmaningsih (Wakil Ketua IV)
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Titin Khusnul Anggraini (Wakil Ketua V)
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Sekretaris:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Sri Indah Utami
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Eva Nur Rohmah (Wakil Sekretaris)
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Bendahara:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Zulia Dwi Anggreini
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  Lailatul Afiah (Wakil Bendahara)
                </li>
              </ul>
            </div>

            {/* Departemen IPPNU */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Departemen – Departemen:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Organisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Musfi Rotul J. (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Nurul Hidayah
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Nur Laela Alea K.S.
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Choiriyah
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kaderisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Rosa Fadhilatu I. (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Tia Eka Rahmawati
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Yulia Citra Puspitasari
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Latifatun Nisa
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    Dpt. Jaringan Pesantren, Sekolah & PT:
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Ummi Qona'ah (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Wahyu Maghfiroh
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Dani Novita Sari
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Naylatun Ni'mah
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    Dpt. Komunikasi & Informasi:
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Laeli Mufarikhah (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Neza Khoirin Ni'mah
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Sayyidatunnisak
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Salma Dian Rifani
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    Dpt. Minat, Bakat & Olahraga:
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siyah Ayu Puji Lestari (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Shafira Nur Maulana N.
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Ummi Choirina A. N.
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Muntafiah
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lembaga IPPNU */}
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Lembaga:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    KPP (Korps Pelajar Putri):
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Komandan: Sekar Dwi Ningrum
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Wakil Komandan: Choirina Anggraini
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">
                    Lembaga Perekonomian:
                  </strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Fitrah Yuliani (Koord.)
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Nur Khoirunisa
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Siti Salma Agustina
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      Sayang Septiani Putri
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

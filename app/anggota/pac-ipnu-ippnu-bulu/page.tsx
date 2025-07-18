import React from "react";

export default function PacIpnuIppnuBuluPage() {
  // Komponen halaman untuk PAC IPNU IPPNU Bulu
  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-2 text-center text-teal-800 tracking-tight">
        PAC IPNU IPPNU Bulu
      </h1>
      <p className="mb-8 text-center text-teal-600 font-medium max-w-2xl mx-auto">
        Berikut adalah struktur organisasi PAC IPNU IPPNU Bulu yang terbagi
        menjadi dua bagian, yaitu IPNU dan IPPNU.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* IPNU Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            IPNU (Ikatan Pelajar Nahdlatul Ulama)
          </h2>
          <div className="space-y-5 text-teal-900">
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Ketua]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Wakil Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Wakil Ketua]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Sekretaris:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Sekretaris 1]
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Sekretaris 2]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Bendahara:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Bendahara 1]
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Bendahara 2]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Departemen – Departemen:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Organisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kaderisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kominfo:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Minat Bakat:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. JSP:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
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
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Ketua]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Wakil Ketua:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Wakil Ketua]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Sekretaris:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Sekretaris 1]
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Sekretaris 2]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors duration-200">
                Bendahara:
              </strong>
              <ul className="list-disc list-inside ml-3 text-base">
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Bendahara 1]
                </li>
                <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                  [Nama Bendahara 2]
                </li>
              </ul>
            </div>
            <div className="group">
              <strong className="block text-lg font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                Departemen – Departemen:
              </strong>
              <div className="mt-2 space-y-4 text-base">
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Organisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kaderisasi:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Kominfo:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. Minat Bakat:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-400 pl-3">
                  <strong className="text-teal-700">Dpt. JSP:</strong>
                  <ul className="list-disc list-inside ml-3">
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 1]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 2]
                    </li>
                    <li className="py-1 hover:bg-teal-50 px-2 rounded transition-colors duration-200">
                      [Nama Anggota 3]
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

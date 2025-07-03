"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  HomeIcon,
  Users,
  FileText,
  Newspaper,
  FileBarChart,
  Share2,
} from "lucide-react";

const Sidebar = () => {
  const [isAnggotaOpen, setIsAnggotaOpen] = useState(false);
  const [isAdministrasiOpen, setIsAdministrasiOpen] = useState(false);

  const toggleAnggota = () => setIsAnggotaOpen(!isAnggotaOpen);
  const toggleAdministrasi = () => setIsAdministrasiOpen(!isAdministrasiOpen);

  return (
    <div className="bg-teal-800 text-white w-64 h-full shadow-md overflow-y-auto">
      <div className="mx-6 w-48 h-24 rounded-md flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <nav className="mt-4">
        <Link
          href="/"
          className="flex items-center px-4 py-3 hover:bg-teal-700 transition-colors"
        >
          <HomeIcon className="mr-2" size={20} />
          <span>Home</span>
        </Link>

        <div>
          <button
            onClick={toggleAnggota}
            className="flex items-center px-4 py-3 hover:bg-teal-700 transition-colors w-full text-left"
          >
            <Users className="mr-2" size={20} />
            <span>Anggota</span>
            {isAnggotaOpen ? (
              <ChevronDown className="ml-auto" size={16} />
            ) : (
              <ChevronRight className="ml-auto" size={16} />
            )}
          </button>
          {isAnggotaOpen && (
            <div className="ml-6 border-l-2 border-teal-700">
              <Link
                href="/anggota/pac-ipnu-ippnu-bulu"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PAC IPNU IPPNU Bulu
              </Link>
              <Link
                href="/anggota/pr-cabean-kidul"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Cabean Kidul
              </Link>
              <Link
                href="/anggota/pr-warugunung"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Warugunung
              </Link>
              <Link
                href="/anggota/pr-lambangan-kulon"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Lambangan Kulon
              </Link>
              <Link
                href="/anggota/pr-lambangan-wetan"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Lambangan Wetan
              </Link>
              <Link
                href="/anggota/pr-karangasem"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Karangasem
              </Link>
              <Link
                href="/anggota/pr-pondokrejo"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Pondokrejo
              </Link>
              <Link
                href="/anggota/pr-sendangmulyo"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Sendangmulyo
              </Link>
              <Link
                href="/anggota/pr-sumbermolyo"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Sumbermolyo
              </Link>
              <Link
                href="/anggota/pr-pasedan"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Pasedan
              </Link>
              <Link
                href="/anggota/pr-kadiwono"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Kadiwono
              </Link>
              <Link
                href="/anggota/pr-jukung"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Jukung
              </Link>
              <Link
                href="/anggota/pr-mlatirejo"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Mlatirejo
              </Link>
              <Link
                href="/anggota/pr-ngulan"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Ngulan
              </Link>
              <Link
                href="/anggota/pr-bulu"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Bulu
              </Link>
              <Link
                href="/anggota/pr-matingan"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                PR. IPNU IPPNU Ds. Matingan
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={toggleAdministrasi}
            className="flex items-center px-4 py-3 hover:bg-teal-700 transition-colors w-full text-left"
          >
            <FileText className="mr-2" size={20} />
            <span>Administrasi</span>
            {isAdministrasiOpen ? (
              <ChevronDown className="ml-auto" size={16} />
            ) : (
              <ChevronRight className="ml-auto" size={16} />
            )}
          </button>
          {isAdministrasiOpen && (
            <div className="ml-6 border-l-2 border-teal-700">
              <Link
                href="/administrasi/contoh-pengajuan-sp"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                Contoh Pengajuan SP Pimpinan Ranting
              </Link>
              <Link
                href="/administrasi/download-kop-surat-logo"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                Download KOP Surat dan Logo
              </Link>
              <Link
                href="/administrasi/download-mars"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                Download Mars
              </Link>
              <Link
                href="/administrasi/download-materi"
                className="block px-4 py-2 hover:bg-teal-700 transition-colors text-sm"
              >
                Download Materi
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/news"
          className="flex items-center px-4 py-3 hover:bg-teal-700 transition-colors"
        >
          <Newspaper className="mr-2" size={20} />
          <span>News</span>
        </Link>

        <Link
          href="/laporan"
          className="flex items-center px-4 py-3 hover:bg-teal-700 transition-colors"
        >
          <FileBarChart className="mr-2" size={20} />
          <span>Laporan</span>
        </Link>

        <Link
          href="/sosmed"
          className="flex items-center px-4 py-3 hover:bg-teal-700 transition-colors"
        >
          <Share2 className="mr-2" size={20} />
          <span>Sosmed</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

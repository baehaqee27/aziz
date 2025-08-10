"use client";

import React, { useState, useEffect } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter, useParams } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Copy, Check, Share2 } from "lucide-react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  location: string;
}

export default function NewsDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State untuk URL halaman saat ini dan status penyalinan
  const [currentUrl, setCurrentUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Pastikan kode ini hanya berjalan di sisi klien
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }

    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() } as NewsArticle);
        } else {
          setError("Artikel tidak ditemukan.");
        }
      } catch (err) {
        setError("Gagal memuat artikel. Silakan coba lagi nanti.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  const handleBack = () => {
    router.back();
  };

  // Fungsi untuk menyalin URL ke clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setIsCopied(true);
      // Reset status setelah 2 detik
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  if (loading) {
    return (
      <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen flex items-center justify-center">
        <p className="text-teal-700 text-lg font-medium">Memuat artikel...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-600 text-lg font-medium mb-4">{error}</p>
        <button
          onClick={handleBack}
          className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
        >
          <ArrowLeft className="mr-2" size={18} />
          Kembali ke Daftar Berita
        </button>
      </div>
    );
  }

  const contentWithBreaks = article.content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-teal-200">
        <button
          onClick={handleBack}
          className="flex items-center text-teal-700 mb-6 hover:text-teal-900 transition-colors"
        >
          <ArrowLeft className="mr-2" size={18} />
          Kembali ke Daftar Berita
        </button>

        {article.imageUrl && (
          <div className="mb-6">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-news.jpg";
                e.currentTarget.alt = "Gambar tidak tersedia";
              }}
            />
          </div>
        )}

        <h1 className="text-3xl font-extrabold mb-2 text-teal-800">
          {article.title}
        </h1>

        <div className="mb-4">
          <span className="text-teal-500 font-semibold">
            {article.location || "Lokasi Tidak Diketahui"}
          </span>
        </div>

        <div className="text-gray-700 text-base text-justify mb-6 whitespace-pre-line">
          {contentWithBreaks}
        </div>

        {/* --- Bagian Tombol Share dan Copy Link --- */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Share2 className="text-gray-600" size={20} />
              <span className="text-gray-700 font-semibold">Bagikan:</span>
              <TwitterShareButton url={currentUrl} title={article.title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <FacebookShareButton url={currentUrl} hashtag={"#BeritaTerkini"}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <WhatsappShareButton url={currentUrl} title={article.title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={currentUrl}
                title={article.title}
                summary={article.content.substring(0, 100)}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>

            <button
              onClick={handleCopyLink}
              className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isCopied
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="mr-2" size={16} />
                  Tersalin!
                </>
              ) : (
                <>
                  <Copy className="mr-2" size={16} />
                  Salin Tautan
                </>
              )}
            </button>
          </div>
        </div>

        {/* --- Bagian Info Penulis dan Tanggal --- */}
        <div className="flex items-center text-gray-500 text-sm border-t border-gray-200 mt-4 pt-4">
          <Calendar className="mr-1" size={16} />
          <span className="mr-4">{article.date}</span>
          <Clock className="mr-1" size={16} />
          <span>{article.author}</span>
        </div>
      </div>
    </div>
  );
}

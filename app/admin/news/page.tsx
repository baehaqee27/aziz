"use client";

import React, { useState, useEffect } from "react";
import { auth, db } from "../../../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Trash2, Edit, Plus, LogOut } from "lucide-react";
import CloudinaryUpload from "../../../components/CloudinaryUpload";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  location: string;
}

export default function AdminNewsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [articlesError, setArticlesError] = useState<string | null>(null);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
      if (!currentUser) {
        router.push("/admin/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (user) {
      fetchArticles();
      // Set author name from user's displayName or email
      if (user.displayName) {
        setNewAuthor(user.displayName);
      } else if (user.email) {
        setNewAuthor(user.email.split("@")[0]); // Use part before @ if no displayName
      } else {
        setNewAuthor("Admin");
      }
    }
  }, [user]);

  const fetchArticles = async () => {
    setLoadingArticles(true);
    setArticlesError(null);
    try {
      const articlesQuery = query(
        collection(db, "news"),
        orderBy("date", "desc")
      );
      const querySnapshot = await getDocs(articlesQuery);
      const fetchedArticles: NewsArticle[] = [];
      querySnapshot.forEach((doc) => {
        fetchedArticles.push({ id: doc.id, ...doc.data() } as NewsArticle);
      });
      setArticles(fetchedArticles);
    } catch (err) {
      setArticlesError("Gagal memuat artikel. Silakan coba lagi nanti.");
      console.error(err);
    } finally {
      setLoadingArticles(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const handleAddArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent || !newDate || !newLocation) {
      alert("Harap isi semua kolom yang diperlukan.");
      return;
    }
    const authorToUse =
      newAuthor ||
      user?.displayName ||
      (user?.email ? user.email.split("@")[0] : "Admin");

    try {
      await addDoc(collection(db, "news"), {
        title: newTitle,
        content: newContent,
        imageUrl: newImageUrl || "/placeholder-news.jpg",
        date: newDate,
        author: authorToUse,
        location: newLocation,
      });
      resetForm();
      fetchArticles();
    } catch (err) {
      alert("Gagal menambahkan artikel.");
      console.error(err);
    }
  };

  const handleEditArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !editingArticle ||
      !newTitle ||
      !newContent ||
      !newDate ||
      !newLocation
    ) {
      alert("Harap isi semua kolom yang diperlukan.");
      return;
    }
    const authorToUse =
      newAuthor ||
      user?.displayName ||
      (user?.email ? user.email.split("@")[0] : "Admin");

    try {
      const articleRef = doc(db, "news", editingArticle.id);
      await updateDoc(articleRef, {
        title: newTitle,
        content: newContent,
        imageUrl: newImageUrl || "/placeholder-news.jpg",
        date: newDate,
        author: authorToUse,
        location: newLocation,
      });
      resetForm();
      fetchArticles();
    } catch (err) {
      alert("Gagal memperbarui artikel.");
      console.error(err);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      try {
        await deleteDoc(doc(db, "news", id));
        fetchArticles();
      } catch (err) {
        alert("Gagal menghapus artikel.");
        console.error(err);
      }
    }
  };

  const startEditing = (article: NewsArticle) => {
    setEditingArticle(article);
    setNewTitle(article.title);
    setNewContent(article.content);
    setNewImageUrl(article.imageUrl);
    setNewDate(article.date);
    setNewAuthor(article.author);
    setNewLocation(article.location || "");
  };

  const resetForm = () => {
    setEditingArticle(null);
    setNewTitle("");
    setNewContent("");
    setNewImageUrl("");
    setNewDate("");
    // Keep newAuthor as is, since it's based on the logged-in user
    setNewLocation("");
  };

  const handleImageUpload = (url: string) => {
    setNewImageUrl(url);
  };

  if (loadingAuth) {
    return (
      <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen flex items-center justify-center">
        <p className="text-teal-700 text-lg font-medium">Memuat...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Redirect is handled in useEffect
  }

  return (
    <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <div className="flex justify-between items-center mb-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-teal-800 tracking-tight">
          Admin - Kelola Berita PAC IPNU IPPNU Bulu
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          <LogOut className="mr-2" size={18} />
          Keluar
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-700">
            {editingArticle ? "Edit Berita" : "Tambah Berita Baru"}
          </h2>
          <form
            onSubmit={editingArticle ? handleEditArticle : handleAddArticle}
            className="space-y-4 text-teal-800"
          >
            <div>
              <label className="block text-teal-700 mb-1 font-medium">
                Judul
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Masukkan judul berita"
                required
              />
            </div>
            <div>
              <label className="block text-teal-700 mb-1 font-medium">
                Konten
              </label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[200px]"
                placeholder="Masukkan konten berita"
                required
              />
            </div>
            <div>
              <label className="block text-teal-700 mb-1 font-medium">
                Gambar Utama (URL)
              </label>
              <input
                type="url"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Masukkan URL gambar utama (opsional)"
              />
            </div>
            <CloudinaryUpload onUploadSuccess={handleImageUpload} />
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-teal-700 mb-1 font-medium">
                  Tanggal
                </label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-teal-700 mb-1 font-medium">
                  Penulis (Opsional)
                </label>
                <input
                  type="text"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Masukkan nama penulis (kosongkan untuk menggunakan nama Anda)"
                />
              </div>
            </div>
            <div>
              <label className="block text-teal-700 mb-1 font-medium">
                Lokasi/Tempat
              </label>
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="w-full p-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Masukkan lokasi atau tempat"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
              >
                {editingArticle ? (
                  <>
                    <Edit className="inline mr-2" size={18} />
                    Perbarui Berita
                  </>
                ) : (
                  <>
                    <Plus className="inline mr-2" size={18} />
                    Tambah Berita
                  </>
                )}
              </button>
              {editingArticle && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Batal
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-200">
          <h2 className="text-2xl font-bold mb-5 text-center text-teal-700 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-teal-500 after:mx-auto after:mt-2">
            Daftar Berita
          </h2>
          {loadingArticles && (
            <div className="text-center text-teal-700 mb-6">
              <p className="text-lg font-medium">Memuat berita...</p>
            </div>
          )}

          {articlesError && (
            <div className="text-center text-red-600 mb-6">
              <p className="text-lg font-medium">{articlesError}</p>
            </div>
          )}

          {!loadingArticles && !articlesError && articles.length === 0 && (
            <p className="text-center text-gray-600">
              Belum ada berita yang tersedia saat ini.
            </p>
          )}

          {!loadingArticles && !articlesError && articles.length > 0 && (
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-teal-800">
                      {article.title}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditing(article)}
                        className="text-teal-600 hover:text-teal-800"
                        title="Edit"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        onClick={() => handleDeleteArticle(article.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Hapus"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {article.content.slice(0, 200)}...
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="mr-1" size={16} />
                    <span className="mr-4">{article.date}</span>
                    <Clock className="mr-1" size={16} />
                    <span>{article.author}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

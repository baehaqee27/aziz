"use client";

import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import LayoutWithHeaderSidebar from "../../components/LayoutWithHeaderSidebar";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  location: string;
}

export default function NewsPage() {
  const router = useRouter();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
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
        setError("Gagal memuat berita. Silakan coba lagi nanti.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleArticleClick = (id: string) => {
    router.push(`/news/${id}`);
  };

  if (loading) {
    return (
      <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen flex items-center justify-center">
        <p className="text-teal-700 text-lg font-medium">Memuat berita...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-teal-800 tracking-tight">
          Berita PAC IPNU IPPNU Bulu
        </h1>

        {articles.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-lg">Belum ada berita yang tersedia saat ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-md border border-teal-200 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleArticleClick(article.id)}
              >
                {article.imageUrl ? (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-news.jpg";
                      e.currentTarget.alt = "Gambar tidak tersedia";
                    }}
                  />
                ) : (
                  <img
                    src="/placeholder-news.jpg"
                    alt="Placeholder"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2 text-teal-800 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {article.content}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="mr-1" size={16} />
                    <span className="mr-4">{article.date}</span>
                    <Clock className="mr-1" size={16} />
                    <span>{article.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

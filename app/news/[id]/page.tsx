import type { Metadata } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import NewsDetailClient from "./NewsDetailClient";

export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    id: string;
  };
};

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  location: string;
}

export async function generateStaticParams() {
  return [];
}

async function getArticleData(id: string): Promise<NewsArticle | null> {
  try {
    const docRef = doc(db, "news", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as NewsArticle;
    }
    return null;
  } catch (error) {
    console.error("Gagal mengambil artikel:", error);
    return null;
  }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  // PERBAIKAN FINAL: Langsung gunakan props.params.id di dalam fungsi
  const article = await getArticleData(props.params.id);

  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  const description =
    article.content.substring(0, 155).replace(/\n/g, " ") + "...";

  return {
    title: article.title,
    description: description,
    openGraph: {
      title: article.title,
      description: description,
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      url: `https://www.pelajarnubulu.site/news/${article.id}`,
      siteName: "PAC IPNU IPPNU Bulu",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description,
      images: [article.imageUrl],
    },
  };
}

export default async function NewsDetailPage(props: PageProps) {
  // PERBAIKAN FINAL: Langsung gunakan props.params.id di dalam fungsi
  const article = await getArticleData(props.params.id);

  return <NewsDetailClient article={article} />;
}

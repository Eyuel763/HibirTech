import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getNewsArticleBySlug, getRelatedArticles } from "@/lib/api/news";
import NewsCard from "@/components/news/NewsCard";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | HibirTech",
    };
  }

  return {
    title: article.meta_title || `${article.title} | HibirTech News`,
    description: article.meta_description || article.excerpt,
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      images: article.featured_image ? [{ url: article.featured_image }] : [],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const [article, relatedArticles] = await Promise.all([
    getNewsArticleBySlug(slug),
    getRelatedArticles(slug),
  ]);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.published_at || Date.now()).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Article Header */}
      <header className="text-center">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600">
            {article.category?.name || "General"}
          </span>
          <span>•</span>
          <time>{formattedDate}</time>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">{article.title}</h1>
        {article.author && (
          <p className="mt-4 text-sm font-medium text-gray-600">By {article.author.full_name}</p>
        )}
      </header>

      {/* Cover Image */}
      {article.featured_image && (
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={article.featured_image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Body */}
      <div
        className="prose prose-blue prose-lg mt-10 max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedArticles.map((relArticle) => (
              <NewsCard key={relArticle.id} article={relArticle} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
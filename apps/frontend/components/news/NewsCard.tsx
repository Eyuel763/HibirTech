import Link from "next/link";
import Image from "next/image";
import { NewsArticleListItem } from "@/types/news";

interface NewsCardProps {
  article: NewsArticleListItem;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const formattedDate = new Date(article.published_at || Date.now()).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (featured) {
    return (
      <div className="group relative grid grid-cols-1 gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md lg:grid-cols-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 lg:col-span-7">
          <Image
            src={article.featured_image || "/images/news-placeholder.jpg"}
            alt={article.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-600">
              {article.category?.name || "General"}
            </span>
            <span>•</span>
            <time>{formattedDate}</time>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-blue-600">
            <Link href={`/news/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h2>
          <p className="mt-3 line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
            Read Full Article &rarr;
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <Image
          src={article.featured_image || "/images/news-placeholder.jpg"}
          alt={article.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="font-semibold text-blue-600">{article.category?.name || "General"}</span>
          <span>•</span>
          <time>{formattedDate}</time>
        </div>
        <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-blue-600">
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-xs text-gray-600">{article.excerpt}</p>
      </div>
    </article>
  );
}
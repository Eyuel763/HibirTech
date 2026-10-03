import { getNewsArticles, getNewsCategories } from "@/lib/api/news";
import NewsCard from "@/components/news/NewsCard";
import Link from "next/link";

export const metadata = {
  title: "News & Insights | HibirTech",
  description: "Stay updated with the latest technological developments, announcements, and insights from HibirTech.",
};

interface NewsPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    search?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const selectedCategory = resolvedParams.category || "all";
  const searchQuery = resolvedParams.search || "";

  const [categories, articlesData] = await Promise.all([
    getNewsCategories(),
    getNewsArticles({
      page: currentPage,
      category: selectedCategory,
      search: searchQuery,
    }),
  ]);

  const featuredArticle = articlesData.results.find((art) => art.featured) || articlesData.results[0];
  const gridArticles = articlesData.results.filter((art) => art.id !== featuredArticle?.id);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">News & Insights</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Discover original stories, tech tutorials, product releases, and tech community highlights.
        </p>
      </section>

      {/* Search & Category Filter Controls */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-b border-gray-200 pb-6 md:flex-row">
        <nav className="flex flex-wrap gap-2">
          <Link
            href="/news"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All News
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/news?category=${cat.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === cat.slug ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Featured Hero Article */}
      {featuredArticle && currentPage === 1 && !searchQuery && (
        <section className="mt-8">
          <NewsCard article={featuredArticle} featured />
        </section>
      )}

      {/* Article Grid */}
      <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {gridArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </section>

      {/* Empty State */}
      {articlesData.results.length === 0 && (
        <div className="my-16 text-center text-gray-500">
          <p className="text-lg">No news articles found matching your criteria.</p>
        </div>
      )}
    </main>
  );
}
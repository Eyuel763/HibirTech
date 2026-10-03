import { 
  NewsCategory, 
  NewsArticleListItem, 
  NewsArticleDetail, 
  PaginatedResponse, 
  NewsQueryParams 
} from "@/types/news";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

/**
 * Fetch all active news categories.
 */
export async function getNewsCategories(): Promise<NewsCategory[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/news/categories/`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.statusText}`);
    }

    const data = await res.json();
    return Array.isArray(data) ? data : data.results || [];
  } catch (error) {
    console.error("Error fetching news categories:", error);
    return [];
  }
}

/**
 * Fetch list of published news articles with optional category filtering, search, and pagination.
 */
export async function getNewsArticles(params?: NewsQueryParams): Promise<PaginatedResponse<NewsArticleListItem>> {
  try {
    const query = new URLSearchParams();

    if (params?.page) query.append("page", params.page.toString());
    if (params?.category && params.category !== "all") query.append("category__slug", params.category);
    if (params?.search) query.append("search", params.search);
    if (params?.featured !== undefined) query.append("featured", params.featured.toString());

    const queryString = query.toString();
    const url = `${API_BASE_URL}/news/articles/${queryString ? `?${queryString}` : ""}`;

    const res = await fetch(url, {
      next: { revalidate: 60 }, // Cache revalidation every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch articles: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return { count: 0, next: null, previous: null, results: [] };
  }
}

/**
 * Fetch single article detail by slug.
 */
export async function getNewsArticleBySlug(slug: string): Promise<NewsArticleDetail | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/news/articles/${slug}/`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch article detail: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching article [${slug}]:`, error);
    return null;
  }
}

/**
 * Fetch up to 3 related articles for a given article slug.
 */
export async function getRelatedArticles(slug: string): Promise<NewsArticleListItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/news/articles/${slug}/related/`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching related articles for [${slug}]:`, error);
    return [];
  }
}
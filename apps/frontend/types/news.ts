export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  article_count?: number;
}

export interface Author {
  id: number;
  username: string;
  full_name: string;
}

export interface NewsArticleListItem {
  id: string;
  title: string;
  slug: string;
  category: NewsCategory;
  author: Author | null;
  excerpt: string;
  featured_image: string;
  featured: boolean;
  published_at: string;
}

export interface NewsArticleDetail extends NewsArticleListItem {
  content: string;
  meta_title?: string;
  meta_description?: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface NewsQueryParams {
  page?: number;
  category?: string;
  search?: string;
  featured?: boolean;
}
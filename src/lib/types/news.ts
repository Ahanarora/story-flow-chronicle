
export interface NewsEvent {
  id: string;
  date: string;
  title: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  detailLevel: number;
  imageUrl?: string;
}

export interface NewsTheme {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  imageUrl?: string;
  updatedAt: string;
  events: NewsEvent[];
}

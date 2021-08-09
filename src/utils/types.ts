export const instanceOfArticles = (
  articlesArg: Article[] | Promise<void>
): articlesArg is Article[] => (articlesArg as Article[]).length !== undefined;

export interface Article {
  item_id: number;
  resolved_id: number;
  given_url: string;
  given_title: string;
  favorite: number;
  status: number;
  time_added: number;
  time_updated: number;
  time_read: number;
  time_favorited: number;
  sort_id: number;
  resolved_title: string;
  resolved_url: number;
  excerpt: string;
  is_article: number;
  is_index: number;
  has_video: number;
  has_image: number;
  word_count: number;
  lang: string;
  top_image_url: string;
  authors: {
    number: {
      item_id: number;
      author_id: number;
      name: string;
      url: string;
    };
  };
  domain_metadata: {
    name: string;
    logo: string;
    grayscale_logo: string;
  };
  listen_duration_estimate: number;
}

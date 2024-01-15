export interface FetchPostsResult {
  id: string;
  headline: string;
  description: string | null;
  content: string;
  image_path?: string;
  categories: string[];
  publishment_date: string;
  last_edited: string | null;
}

export interface FetchCommentsResult {
  id: string;
  writer_name: string;
  content: string;
  post_id: string;
  publishment_date: string;
}



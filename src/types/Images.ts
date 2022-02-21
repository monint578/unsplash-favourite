export interface UnsplashImageListResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

export interface UnsplashImage {
  alt_description: string;
  created_at: string;
  id: string;
  height: number;
  width: number;
  description: string;
  likes: number;
  urls: Urls;
  user: User;
}

export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface User {
  bio: string;
  first_name: string;
  id: string;
  last_name: string;
  location: string;
  name: string;
}

export interface UnsplashImageDetails {
  created_at: string;
  id: string;
  alt_description: string;
  height: number;
  width: number;
  downloads: number;
  views: number;
  likes: number;
  description: string;
  exif: Exif;
  user: User;
  urls: Urls;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  focal_length: string;
}

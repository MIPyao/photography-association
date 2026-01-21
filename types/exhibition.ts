// 展览相关类型定义
export interface Exhibition {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  uploadDate: string;
  featured: boolean;
  authorAvatar?: string;
  authorBio?: string;
  camera?: string;
  settings?: string;
  location?: string;
  dimensions?: {
    width: number;
    height: number;
  };
  likes?: number;
  views?: number;
}

export interface ExhibitionFilter {
  category?: string;
  tags?: string[];
  featured?: boolean;
  author?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}
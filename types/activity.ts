// 活动相关类型定义
export interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registrationRequired: boolean;
  maxParticipants?: number;
  currentParticipants?: number;
  registrationDeadline?: string;
  organizer: string;
  tags: string[];
}

export interface ActivityFilter {
  status?: Activity['status'];
  registrationRequired?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}
// 模拟活动数据
import { Activity } from "@/types/activity"

export const mockActivities: Activity[] = [
  {
    id: "1",
    title: "春季摄影采风活动",
    date: "2026-03-15",
    location: "东城区景山公园",
    description: "邀请专业摄影师带领会员进行春季采风，学习自然风光摄影技巧，捕捉春天美景。",
    coverImage: "/api/placeholder/400/300",
    status: "upcoming",
    registrationRequired: true,
    maxParticipants: 30,
    currentParticipants: 18,
    registrationDeadline: "2026-03-10",
    organizer: "张明远",
    tags: ["采风", "外拍", "自然风光"]
  },
  {
    id: "2", 
    title: "摄影后期处理工作坊",
    date: "2026-02-28",
    location: "东城区文化馆",
    description: "深入学习Lightroom和Photoshop后期处理技巧，提升作品表现力。",
    coverImage: "/api/placeholder/400/300",
    status: "ongoing",
    registrationRequired: true,
    maxParticipants: 20,
    currentParticipants: 20,
    registrationDeadline: "2026-02-20",
    organizer: "李晓华",
    tags: ["后期", "工作坊", "技术培训"]
  },
  {
    id: "3",
    title: "年度优秀摄影作品展",
    date: "2026-01-10",
    location: "东城区美术馆",
    description: "展示协会会员年度优秀作品，促进会员间交流学习。",
    coverImage: "/api/placeholder/400/300",
    status: "completed",
    registrationRequired: false,
    organizer: "王建国",
    tags: ["展览", "年度总结", "作品展示"]
  },
  {
    id: "4",
    title: "街头摄影技巧分享会",
    date: "2026-04-05",
    location: "东城区图书馆报告厅",
    description: "资深街头摄影师分享拍摄经验，探讨城市人文摄影的魅力。",
    coverImage: "/api/placeholder/400/300",
    status: "upcoming",
    registrationRequired: true,
    maxParticipants: 50,
    currentParticipants: 12,
    registrationDeadline: "2026-04-01",
    organizer: "陈思远",
    tags: ["街头摄影", "分享会", "人文摄影"]
  }
];


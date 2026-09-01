// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  role: 'user' | 'admin' | 'instructor';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  xp: number;
  streak: number;
  badges: Badge[];
  completedCourses: string[];
  bookmarkedArticles: string[];
  certifications: Certification[];
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  instructor: string;
  estimatedTime: number;
  lessons: Lesson[];
  rating: number;
  reviewCount: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  videoUrl?: string;
  content: string;
  duration: number;
  resources: Resource[];
  quiz?: Quiz;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'zip' | 'link';
  url: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

// Article Types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  published: boolean;
  publishedAt: Date;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

// AI Tools
export interface AITool {
  id: string;
  name: string;
  description: string;
  slug: string;
  category: string;
  image: string;
  features: string[];
  pricing: string;
  rating: number;
  beginnerScore: number;
  affiliateLink?: string;
  officialWebsite: string;
  pros: string[];
  cons: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Resource Library
export interface LibraryResource {
  id: string;
  title: string;
  description: string;
  type: 'template' | 'checklist' | 'guide' | 'cheatsheet' | 'planner' | 'worksheet';
  downloadUrl: string;
  thumbnail?: string;
  views: number;
  downloads: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

// Learning Roadmap
export interface LearningRoadmap {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  levels: RoadmapLevel[];
  estimatedDuration: string;
  certificateEarned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RoadmapLevel {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  courses: string[];
  estimatedTime: number;
  order: number;
}

// Gamification
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
}

export interface Certification {
  id: string;
  userId: string;
  courseId: string;
  title: string;
  issuedAt: Date;
  certificateUrl: string;
  verificationCode: string;
}

// Community
export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  views: number;
  replies: ForumReply[];
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ForumReply {
  id: string;
  postId: string;
  content: string;
  author: string;
  isAccepted: boolean;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

// Newsletter
export interface NewsletterSubscriber {
  id: string;
  email: string;
  name: string;
  subscribed: boolean;
  subscribedAt: Date;
}

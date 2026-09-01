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
  assignment?: Assignment;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'zip' | 'link';
  url: string;
}

// Quiz Types
export interface Quiz {
  id: string;
  lessonId: string;
  questions: Question[];
  passingScore: number;
  timeLimit?: number;
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

// Assignment Types
export interface Assignment {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  dueDate?: Date;
  rubric?: string;
}

// Article/Blog Types
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
  relatedArticles: string[];
  createdAt: Date;
  updatedAt: Date;
}

// AI Tools Directory
export interface AITool {
  id: string;
  name: string;
  description: string;
  slug: string;
  category: string;
  image: string;
  features: string[];
  pricing: string;
  pricingTiers?: PricingTier[];
  rating: number;
  beginnerScore: number;
  affiliateLink?: string;
  officialWebsite: string;
  pros: string[];
  cons: string[];
  alternatives: string[];
  tutorial?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  currency: string;
}

// Product Review Types
export interface ProductReview {
  id: string;
  title: string;
  slug: string;
  product: string;
  image: string;
  overview: string;
  pros: string[];
  cons: string[];
  rating: number;
  pricing: string;
  author: string;
  affiliateButton?: string;
  relatedProducts: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Resource Library Types
export interface Resource {
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

// Learning Roadmap Types
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

// Gamification Types
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
}

export interface Achievement {
  id: string;
  userId: string;
  type: string;
  title: string;
  description: string;
  earnedAt: Date;
}

export interface Certification {
  id: string;
  userId: string;
  courseId: string;
  title: string;
  issuedAt: Date;
  expiresAt?: Date;
  certificateUrl: string;
  verificationCode: string;
}

// Community Types
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

// Newsletter Types
export interface NewsletterSubscriber {
  id: string;
  email: string;
  name: string;
  subscribed: boolean;
  subscribedAt: Date;
  unsubscribedAt?: Date;
}

export interface NewsletterIssue {
  id: string;
  subject: string;
  content: string;
  sentAt: Date;
  recipientCount: number;
  openRate: number;
  clickRate: number;
}

// Affiliate Types
export interface AffiliateLink {
  id: string;
  productId: string;
  url: string;
  clicks: number;
  conversions: number;
  revenue: number;
  createdAt: Date;
}

// Analytics Types
export interface PageView {
  id: string;
  userId?: string;
  page: string;
  referrer?: string;
  timestamp: Date;
}

export interface UserProgress {
  id: string;
  userId: string;
  courseId: string;
  lessonsCompleted: number;
  totalLessons: number;
  quizScores: QuizScore[];
  assignments: AssignmentSubmission[];
  completedAt?: Date;
  progress: number;
}

export interface QuizScore {
  quizId: string;
  score: number;
  attemptDate: Date;
  timeSpent: number;
}

export interface AssignmentSubmission {
  assignmentId: string;
  submittedAt: Date;
  grade?: number;
  feedback?: string;
}

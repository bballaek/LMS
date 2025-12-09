export type CourseLevel = 'Junior' | 'Medium' | 'Advance';

export interface Course {
  id: string;
  title: string;
  category: string[]; // e.g., ["UX design", "UI design"]
  lessonsCount: number;
  level: CourseLevel;
  progress: number; // 0-100
  status: 'Not Started' | 'In Progress' | 'Completed';
  thumbnailColor: string; // Tailwind class for bg color
  iconType: 'folder' | 'input' | 'toggle' | 'button' | 'app-blue' | 'app-green' | 'app-orange' | 'app-pink' | 'app-purple';
}

export type ViewMode = 'grid' | 'list';

export interface NavItem {
  id: string;
  label: string;
  icon: any; // Lucide icon component
  badge?: number;
}
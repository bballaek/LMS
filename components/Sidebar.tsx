import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileQuestion, 
  ClipboardList, 
  Megaphone, 
  Users, 
  Award, 
  BarChart2, 
  Puzzle, 
  Settings, 
  Search,
  Plus,
  Command,
  Sparkles
} from 'lucide-react';
import { NavItem } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onAddCourse: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'quizzes', label: 'Quizzes', icon: FileQuestion },
  { id: 'assignments', label: 'Assignments', icon: ClipboardList },
  { id: 'announcement', label: 'Announcement', icon: Megaphone },
  { id: 'students', label: 'Students', icon: Users },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'reports', label: 'Reports', icon: BarChart2 },
  { id: 'add-ons', label: 'Add-ons', icon: Puzzle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onAddCourse }) => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-20">
      {/* Header / Logo */}
      <div className="p-6 pb-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
          <Sparkles size={18} />
        </div>
        <span className="text-xl font-bold tracking-tight">Oliya</span>
      </div>

      {/* Search & Action */}
      <div className="px-5 mb-6 space-y-3">
        <div className="relative group">
          <Search className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-gray-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Quick Search" 
            className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg pl-10 pr-8 py-2.5 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
          />
           <div className="absolute right-3 top-2.5 bg-white border border-gray-200 rounded px-1.5 py-0.5">
             <span className="text-[10px] text-gray-400 font-medium">/</span>
           </div>
        </div>

        <button 
          onClick={onAddCourse}
          className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-lg py-2.5 text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Add New Course
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-gray-100 text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              <Icon size={18} className={isActive ? 'text-gray-900' : 'text-gray-400'} strokeWidth={2} />
              {item.label}
              {isActive && item.id === 'courses' && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black"></div>
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Footer / User Profile (Implied but hidden in image, adding for completeness) */}
      <div className="p-4 border-t border-gray-100">
         <div className="flex items-center gap-3">
            <img src="https://picsum.photos/100/100" alt="User" className="w-8 h-8 rounded-full border border-gray-200" />
            <div className="flex-1 min-w-0">
               <p className="text-sm font-medium text-gray-900 truncate">Yeasin Design</p>
               <p className="text-xs text-gray-400 truncate">Admin</p>
            </div>
         </div>
      </div>
    </aside>
  );
};
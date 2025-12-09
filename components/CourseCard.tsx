import React from 'react';
import { Course } from '../types';
import { Play, X, ChevronRight, Layout, Grip, Menu } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

// Visual Components matching the design
const FolderVisual = () => (
  <div className="relative w-16 h-14">
    {/* Folder Back */}
    <div className="absolute top-0 left-0 w-full h-full bg-[#A08B6C] rounded-lg shadow-sm transform rotate-0"></div>
    {/* Folder Tab */}
    <div className="absolute -top-1 left-0 w-6 h-3 bg-[#A08B6C] rounded-t-md"></div>
    {/* Folder Front */}
    <div className="absolute top-2 left-0 w-full h-[calc(100%-8px)] bg-[#8B7657] rounded-b-lg rounded-tr-lg shadow-inner flex items-center justify-center">
       <div className="w-8 h-1 bg-[#6D5B41] opacity-20 rounded-full"></div>
    </div>
  </div>
);

const InputVisual = () => (
  <div className="bg-white border border-gray-200 rounded-full pl-4 pr-1 py-1.5 flex items-center justify-between shadow-sm w-32 max-w-full">
    <span className="text-xs text-gray-600 font-medium">Design</span>
    <div className="bg-gray-100 rounded-full p-0.5 ml-2 hover:bg-gray-200 cursor-pointer">
      <X size={12} className="text-gray-500" />
    </div>
  </div>
);

const ToggleVisual = () => (
  <div className="w-14 h-8 bg-gray-300 rounded-full relative shadow-inner flex items-center px-1">
    <div className="w-6 h-6 bg-white rounded-full shadow-md absolute left-1"></div>
    <div className="absolute right-2.5 top-2.5 w-3 h-1 bg-gray-400 rounded-full opacity-50"></div>
  </div>
);

const OnToggleVisual = () => (
  <div className="w-14 h-8 bg-[#4B5563] rounded-full relative shadow-inner flex items-center px-1">
    <div className="w-6 h-6 bg-white rounded-full shadow-md absolute right-1"></div>
    <div className="absolute left-2.5 top-2.5 w-3 h-1 bg-gray-500 rounded-full opacity-50"></div>
  </div>
);

const ButtonVisual = () => (
  <div className="bg-white/90 backdrop-blur-sm pl-4 pr-1 py-1.5 rounded-full flex items-center gap-2 shadow-sm cursor-pointer group hover:scale-105 transition-transform">
    <span className="text-[11px] font-bold text-gray-800">Get Started</span>
    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
      <ChevronRight size={14} className="text-white ml-0.5" />
    </div>
  </div>
);

const AppIconVisual = ({ color, type }: { color: string, type: 'blue' | 'green' | 'orange' | 'pink' | 'purple' }) => {
  let innerContent;
  switch (type) {
    case 'blue': innerContent = <div className="w-8 h-6 bg-white/30 rounded-md"></div>; break;
    case 'green': innerContent = <Layout className="text-white" size={24} />; break;
    case 'orange': innerContent = <div className="w-8 h-2 bg-white/40 rounded-full"></div>; break;
    case 'pink': innerContent = <div className="w-6 h-6 border-2 border-white/50 rounded-md"></div>; break;
    default: innerContent = <Grip className="text-white" size={24} />;
  }

  return (
    <div className={`w-14 h-14 ${color} rounded-[18px] shadow-lg shadow-gray-200/50 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300`}>
      {innerContent}
    </div>
  );
};

// Progress Circle matches the design: Ring + Percentage
const ProgressRing = ({ percentage }: { percentage: number }) => {
  const radius = 7;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  // Color based on percentage roughly
  const strokeColor = percentage < 30 ? "#fca5a5" : percentage < 70 ? "#86efac" : "#22c55e";

  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
        <svg className="transform -rotate-90 w-full h-full">
          <circle cx="10" cy="10" r={radius} stroke="#e5e7eb" strokeWidth="2.5" fill="transparent" />
          <circle
            cx="10" cy="10" r={radius}
            stroke={strokeColor}
            strokeWidth="2.5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
    </div>
  );
};

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const renderVisual = () => {
    switch (course.iconType) {
      case 'folder': return <FolderVisual />;
      case 'input': return <InputVisual />;
      case 'toggle': return <OnToggleVisual />;
      case 'button': return <ButtonVisual />;
      case 'app-blue': return <AppIconVisual color="bg-[#60A5FA]" type="blue" />;
      case 'app-green': return <AppIconVisual color="bg-[#A3D9C9]" type="green" />;
      case 'app-orange': return <AppIconVisual color="bg-[#FCD34D]" type="orange" />;
      case 'app-pink': return <AppIconVisual color="bg-[#F9A8D4]" type="pink" />;
      case 'app-purple': return <AppIconVisual color="bg-[#C084FC]" type="purple" />;
      default: return <FolderVisual />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-3 border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer group">
      {/* Thumbnail Area */}
      <div className={`relative h-36 rounded-xl ${course.thumbnailColor} p-4 flex flex-col items-center justify-center mb-4 transition-colors duration-300`}>
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/80 backdrop-blur-[2px] px-2 py-0.5 rounded text-[10px] font-medium text-gray-500 shadow-sm border border-white/50">
            {course.lessonsCount} lessons
          </span>
        </div>
        
        {/* Render the specific visual element */}
        <div className="transform transition-transform duration-300 group-hover:scale-105">
           {renderVisual()}
        </div>

      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 px-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {course.category.map((cat, i) => (
            <span key={i} className="text-[10px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
              {cat}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug line-clamp-2 mb-4 group-hover:text-black transition-colors">
          {course.title}
        </h3>

        {/* Footer Info */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3">
          {/* Level */}
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-400 font-medium">Level:</span>
             <span className="text-xs font-semibold text-gray-700">{course.level}</span>
          </div>
          
          {/* Progress or Status */}
          <div className="flex flex-col items-end">
            {course.status === 'Not Started' ? (
               <span className="text-[10px] text-gray-400 font-medium mt-auto py-1">Not Started</span>
            ) : (
              <>
                 <span className="text-[10px] text-gray-400 font-medium mb-0.5">Progress:</span>
                 <div className="flex items-center gap-1.5">
                    <ProgressRing percentage={course.progress} />
                    <span className="text-xs font-bold text-gray-900">{course.progress}%</span>
                 </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Course, ViewMode } from '../types';
import { CourseCard } from '../components/CourseCard';
import { Filter, SlidersHorizontal, LayoutGrid, List, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ courses }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <div className="h-full flex flex-col">
      {/* Header Toolbar */}
      <div className="flex items-center justify-between mb-6 pt-2">
        <div className="flex items-center gap-2">
           <h2 className="text-xl font-bold text-gray-900">All Courses</h2>
           <span className="text-lg text-gray-400 font-medium">{courses.length}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 shadow-sm transition-colors">
            <Filter size={14} />
            Filter
          </button>

          {/* Sort Dropdown */}
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 shadow-sm transition-colors">
            <SlidersHorizontal size={14} />
            Sort by
            <ChevronDown size={14} className="text-gray-400 ml-1" />
          </button>

          {/* View Toggle */}
          <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
             <button 
               onClick={() => setViewMode('list')}
               className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
             >
                <List size={16} />
             </button>
             <button 
               onClick={() => setViewMode('grid')}
               className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-400 hover:text-gray-600'}`}
             >
                <LayoutGrid size={16} />
             </button>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto pb-20 custom-scrollbar pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {courses.map(course => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Pagination */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-50 pt-4 pb-6 flex items-center justify-between border-t border-gray-200 mt-auto z-10">
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:border-gray-300">
            <span className="text-sm font-medium text-gray-700">16</span>
            <div className="border-l border-gray-200 pl-2 h-4 flex items-center">
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-gray-800"></div>
            </div>
          </div>
          <span className="text-sm text-gray-500 font-medium">Results: 1 - 16 of 150</span>
        </div>

        <div className="flex items-center gap-2">
           <button className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-gray-700 px-2 py-1 transition-colors">
             <ChevronLeft size={14} />
             Previous
           </button>
           
           <div className="flex items-center gap-1">
             <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-900 shadow-sm">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-xs font-medium text-gray-500 hover:shadow-sm transition-all">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-xs font-medium text-gray-500 hover:shadow-sm transition-all">3</button>
             <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-xs font-medium text-gray-500 hover:shadow-sm transition-all">4</button>
             <span className="text-gray-400 px-1 text-xs">...</span>
             <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-xs font-medium text-gray-500 hover:shadow-sm transition-all">15</button>
           </div>

           <button className="flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 px-2 py-1 ml-1 transition-colors">
             Next
             <ChevronRight size={14} />
           </button>
        </div>
      </div>
    </div>
  );
};
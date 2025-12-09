import React from 'react';
import { Calendar, FileText, CheckCircle, Clock, Paperclip, MoreVertical } from 'lucide-react';

export const AssignmentsPage: React.FC = () => {
  const assignments = [
    { id: 1, title: 'Case Study: E-commerce Redesign', course: 'Mastering UX', due: 'Oct 28, 2023', status: 'Pending', type: 'Upload' },
    { id: 2, title: 'Typography Analysis Essay', course: 'Visual Design', due: 'Oct 25, 2023', status: 'Submitted', type: 'Text' },
    { id: 3, title: 'Interactive Prototype v1', course: 'Prototype Design', due: 'Nov 02, 2023', status: 'Late', type: 'Link' },
    { id: 4, title: 'User Journey Map', course: 'UX Principles', due: 'Nov 05, 2023', status: 'Pending', type: 'Upload' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-10 custom-scrollbar pr-2">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Assignments</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Summary Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg md:col-span-2 lg:col-span-1">
          <div className="flex items-start justify-between mb-8">
            <div className="p-3 bg-white/10 rounded-xl">
              <FileText size={24} />
            </div>
            <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">Weekly Goals</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-1">12</h3>
            <p className="text-gray-300 text-sm">Assignments remaining this semester</p>
          </div>
          <div className="mt-6 flex gap-2">
             <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
               <div className="h-full bg-green-400 w-3/4"></div>
             </div>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-right">75% Completion</p>
        </div>

        {/* Assignment Cards */}
        {assignments.map(item => (
          <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider
                 ${item.status === 'Pending' ? 'bg-orange-50 text-orange-600' : ''}
                 ${item.status === 'Submitted' ? 'bg-green-50 text-green-600' : ''}
                 ${item.status === 'Late' ? 'bg-red-50 text-red-600' : ''}
              `}>
                {item.status}
              </span>
              <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-xs text-gray-500 mb-4">{item.course}</p>
            
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs">
               <div className="flex items-center gap-1.5 text-gray-500">
                 <Calendar size={14} />
                 <span>Due: <span className="text-gray-700 font-medium">{item.due}</span></span>
               </div>
               
               {item.type === 'Upload' && <Paperclip size={14} className="text-gray-400" />}
               {item.type === 'Text' && <FileText size={14} className="text-gray-400" />}
            </div>
          </div>
        ))}

        {/* Add New Placeholder */}
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer min-h-[180px]">
           <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-gray-500">
             <Clock size={20} />
           </div>
           <p className="text-sm font-medium">No more assignments</p>
           <p className="text-xs text-gray-400 mt-1">Check back later</p>
        </div>
      </div>
    </div>
  );
};
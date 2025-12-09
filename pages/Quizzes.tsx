import React from 'react';
import { Search, Filter, Clock, CheckCircle2, AlertCircle, MoreHorizontal, FileQuestion } from 'lucide-react';

export const QuizzesPage: React.FC = () => {
  const quizzes = [
    { id: 1, title: 'UX Research Fundamentals', course: 'Mastering UX From Basics', questions: 20, time: '30 mins', score: '95%', status: 'Completed', date: 'Oct 24, 2023' },
    { id: 2, title: 'Color Theory & Accessibility', course: 'Visual Design Mastery', questions: 15, time: '25 mins', score: '-', status: 'Pending', date: 'Due Tomorrow' },
    { id: 3, title: 'Wireframing Basics', course: 'Complete UX Design Program', questions: 10, time: '15 mins', score: '80%', status: 'Completed', date: 'Oct 20, 2023' },
    { id: 4, title: 'Typography Principles', course: 'Visual Design Mastery', questions: 25, time: '45 mins', score: '-', status: 'In Progress', date: 'Started Today' },
    { id: 5, title: 'User Persona Creation', course: 'Mastering UX From Basics', questions: 12, time: '20 mins', score: '60%', status: 'Failed', date: 'Oct 15, 2023' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Quizzes & Assessments</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and track your evaluation progress.</p>
        </div>
        <div className="flex gap-3">
           <div className="relative">
             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
             <input type="text" placeholder="Search quizzes..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-100 w-64" />
           </div>
           <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
             <Filter size={16} /> Filter
           </button>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex-1">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quiz Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Details</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-100 transition-colors">
                      <FileQuestion size={20} />
                    </div>
                    <span className="font-medium text-gray-900 text-sm">{quiz.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{quiz.course}</td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-4 text-xs text-gray-500">
                     <span className="flex items-center gap-1"><AlertCircle size={14} /> {quiz.questions} Qs</span>
                     <span className="flex items-center gap-1"><Clock size={14} /> {quiz.time}</span>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${quiz.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                    ${quiz.status === 'Pending' ? 'bg-orange-100 text-orange-800' : ''}
                    ${quiz.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : ''}
                    ${quiz.status === 'Failed' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {quiz.status === 'Completed' ? `Score: ${quiz.score}` : quiz.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{quiz.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
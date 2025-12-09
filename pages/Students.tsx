import React from 'react';
import { Mail, MoreHorizontal, ArrowUpDown, Download } from 'lucide-react';

export const StudentsPage: React.FC = () => {
  const students = [
    { id: 1, name: 'Alex Morgan', email: 'alex.m@example.com', enrolled: 4, progress: 85, status: 'Active', joined: 'Jan 12, 2023' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah.w@example.com', enrolled: 2, progress: 32, status: 'Active', joined: 'Feb 04, 2023' },
    { id: 3, name: 'James Carter', email: 'j.carter@example.com', enrolled: 6, progress: 12, status: 'Inactive', joined: 'Dec 10, 2022' },
    { id: 4, name: 'Emily Chen', email: 'e.chen@example.com', enrolled: 3, progress: 64, status: 'Active', joined: 'Mar 22, 2023' },
    { id: 5, name: 'Michael Brown', email: 'm.brown@example.com', enrolled: 5, progress: 92, status: 'Active', joined: 'Jan 05, 2023' },
    { id: 6, name: 'Jessica Lee', email: 'j.lee@example.com', enrolled: 1, progress: 5, status: 'Inactive', joined: 'Apr 15, 2023' },
    { id: 7, name: 'David Kim', email: 'd.kim@example.com', enrolled: 4, progress: 45, status: 'Active', joined: 'Feb 28, 2023' },
    { id: 8, name: 'Olivia Martinez', email: 'o.martinez@example.com', enrolled: 3, progress: 78, status: 'Active', joined: 'Mar 10, 2023' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
         <h2 className="text-xl font-bold text-gray-900">Students Directory</h2>
         <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
           <Download size={16} />
           Export CSV
         </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">Name <ArrowUpDown size={12}/></div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Courses</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Avg. Progress</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail size={14} />
                      {student.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {student.enrolled} Enrolled
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                       <div className="flex-1 w-24 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div className="h-full bg-gray-900 rounded-full" style={{ width: `${student.progress}%` }}></div>
                       </div>
                       <span className="text-xs text-gray-600 w-6">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.joined}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Simple Pagination */}
        <div className="mt-auto border-t border-gray-200 p-4 flex items-center justify-between bg-gray-50">
           <span className="text-xs text-gray-500">Showing 1-8 of 124 students</span>
           <div className="flex gap-2">
             <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600 hover:bg-gray-50">Previous</button>
             <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600 hover:bg-gray-50">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};
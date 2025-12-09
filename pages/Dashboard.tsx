import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

const data = [
  { name: 'Mon', active: 4000, completed: 2400 },
  { name: 'Tue', active: 3000, completed: 1398 },
  { name: 'Wed', active: 2000, completed: 9800 },
  { name: 'Thu', active: 2780, completed: 3908 },
  { name: 'Fri', active: 1890, completed: 4800 },
  { name: 'Sat', active: 2390, completed: 3800 },
  { name: 'Sun', active: 3490, completed: 4300 },
];

const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className={`text-xs mt-2 font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
        {trend > 0 ? '+' : ''}{trend}% from last week
      </p>
    </div>
    <div className={`p-3 rounded-xl ${color}`}>
      <Icon size={24} className="opacity-80" />
    </div>
  </div>
);

export const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6 overflow-y-auto pb-10 h-full custom-scrollbar pr-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <div className="flex gap-2">
           <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2">
             <option>Last 7 Days</option>
             <option>Last 30 Days</option>
           </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Students" value="12,345" icon={Users} color="bg-blue-100 text-blue-600" trend={12} />
        <StatCard title="Active Courses" value="48" icon={BookOpen} color="bg-orange-100 text-orange-600" trend={5} />
        <StatCard title="Certificates Issued" value="1,204" icon={Award} color="bg-purple-100 text-purple-600" trend={-2} />
        <StatCard title="Avg. Learning Time" value="4h 32m" icon={Clock} color="bg-green-100 text-green-600" trend={8} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-96">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
           <h3 className="font-semibold text-gray-900 mb-6">Learning Activity</h3>
           <div className="flex-1">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
                />
                <Area type="monotone" dataKey="active" stroke="#8884d8" fillOpacity={1} fill="url(#colorActive)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
           <h3 className="font-semibold text-gray-900 mb-6">Course Completion Rate</h3>
           <div className="flex-1">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="completed" fill="#1f2937" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
};
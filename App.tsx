import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { CoursesPage } from './pages/Courses';
import { DashboardPage } from './pages/Dashboard';
import { QuizzesPage } from './pages/Quizzes';
import { AssignmentsPage } from './pages/Assignments';
import { StudentsPage } from './pages/Students';
import { CertificatesPage } from './pages/Certificates';
import { SettingsPage } from './pages/Settings';
import { INITIAL_COURSES } from './constants';
import { Course } from './types';
import { Bell, HelpCircle, Loader2, Sparkles, X, Menu } from 'lucide-react';
import { generateCourseWithAI } from './services/geminiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [sidebarOpen, setSidebarOpen] = useState(true); // For responsive toggle if needed later
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddCourse = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError('');

    try {
      // Mock ID generation
      const newId = (courses.length + 1).toString();
      const generatedData = await generateCourseWithAI(topic);
      
      const newCourse: Course = {
        id: newId,
        title: generatedData.title || topic,
        category: generatedData.category || ['General'],
        lessonsCount: generatedData.lessonsCount || 10,
        level: (generatedData.level as any) || 'Junior',
        progress: 0,
        status: 'Not Started',
        thumbnailColor: generatedData.thumbnailColor || 'bg-gray-100',
        iconType: (generatedData.iconType as any) || 'folder'
      };

      setCourses([newCourse, ...courses]);
      setIsModalOpen(false);
      setTopic('');
    } catch (err) {
      setError('Failed to generate course. Please check API Key or try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'courses':
        return <CoursesPage courses={courses} />;
      case 'quizzes':
        return <QuizzesPage />;
      case 'assignments':
        return <AssignmentsPage />;
      case 'students':
        return <StudentsPage />;
      case 'certificates':
        return <CertificatesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <Sparkles size={48} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Coming Soon</h2>
            <p className="text-sm">The {activeTab} module is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onAddCourse={() => setIsModalOpen(true)}
      />

      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden relative transition-all duration-300">
        {/* Top Navigation Bar */}
        <header className="h-16 px-8 flex items-center justify-between bg-transparent flex-shrink-0 z-10">
           {/* Breadcrumbs / Page Title */}
           <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-gray-400">Oliya</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium capitalize">{activeTab}</span>
           </div>

           {/* Right Actions */}
           <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <HelpCircle size={20} />
              </button>
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-gray-50"></span>
              </button>
              
              <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                 <img src="https://picsum.photos/100/100" alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                 <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
                    <span className="text-xs text-gray-600">▼</span>
                 </div>
              </div>
           </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 px-8 pb-4 relative overflow-hidden">
           {renderContent()}
        </div>
      </main>

      {/* AI Course Generation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                    <Sparkles size={16} />
                 </div>
                 <div>
                   <h3 className="font-semibold text-gray-900">AI Course Creator</h3>
                   <p className="text-xs text-gray-500">Powered by Gemini 2.5</p>
                 </div>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What do you want to teach?</label>
                <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Advanced React Patterns, Introduction to Pottery..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  autoFocus
                />
              </div>
              
              {error && <p className="text-red-500 text-sm">{error}</p>}
              
              <div className="bg-indigo-50 rounded-xl p-4 text-xs text-indigo-800 leading-relaxed">
                Gemini will generate a title, lesson count, difficulty level, and select an appropriate icon and color theme for your course.
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddCourse}
                disabled={loading || !topic}
                className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                Generate Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
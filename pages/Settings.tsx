import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Save } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="h-full flex flex-col lg:flex-row gap-8 overflow-hidden">
      {/* Settings Sidebar */}
      <div className="w-full lg:w-64 flex-shrink-0">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Settings</h2>
        <nav className="space-y-1">
          {[
            { id: 'profile', label: 'Edit Profile', icon: User },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'password', label: 'Password & Security', icon: Lock },
            { id: 'language', label: 'Language & Region', icon: Globe },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${activeTab === item.id 
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-100' 
                  : 'text-gray-500 hover:bg-white/50 hover:text-gray-700'}
              `}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="flex-1 overflow-y-auto pb-10 custom-scrollbar pr-2">
         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-2xl">
           {activeTab === 'profile' && (
             <div className="space-y-6">
                <div className="flex items-center gap-6 mb-8">
                   <div className="relative">
                      <img src="https://picsum.photos/100/100" className="w-20 h-20 rounded-full border-4 border-gray-50 object-cover" />
                      <button className="absolute bottom-0 right-0 bg-black text-white p-1.5 rounded-full border-2 border-white hover:bg-gray-800">
                        <User size={12} />
                      </button>
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900 text-lg">Yeasin Design</h3>
                      <p className="text-sm text-gray-500">yeasin@example.com</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700">First Name</label>
                     <input type="text" defaultValue="Yeasin" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700">Last Name</label>
                     <input type="text" defaultValue="Design" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm" />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                     <label className="text-sm font-medium text-gray-700">Email Address</label>
                     <input type="email" defaultValue="yeasin@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm" />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                     <label className="text-sm font-medium text-gray-700">Bio</label>
                     <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm resize-none" defaultValue="Passionate UI/UX designer and instructor..." />
                   </div>
                </div>

                <div className="pt-4 flex justify-end">
                   <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                     <Save size={16} />
                     Save Changes
                   </button>
                </div>
             </div>
           )}

           {activeTab === 'notifications' && (
             <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Notification Preferences</h3>
                <div className="space-y-4">
                  {['Email me when someone comments on my article', 'Email me when someone answers on my forum thread', 'Email me when I get a new follower'].map((item, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked={i === 0} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 select-none">{item}</span>
                    </label>
                  ))}
                </div>
             </div>
           )}

            {(activeTab === 'password' || activeTab === 'language') && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                 <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                   <Lock size={20} className="text-gray-400" />
                 </div>
                 <h3 className="text-gray-900 font-medium">Restricted Area</h3>
                 <p className="text-sm text-gray-500 mt-1">This section is for demonstration purposes only.</p>
              </div>
            )}
         </div>
      </div>
    </div>
  );
};
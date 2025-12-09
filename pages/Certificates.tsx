import React from 'react';
import { Award, Download, Share2, Eye } from 'lucide-react';

export const CertificatesPage: React.FC = () => {
  const certificates = [
    { id: 1, title: 'Advanced UX Design Certification', issuer: 'Oliya Academy', date: 'Oct 12, 2023', theme: 'bg-stone-800' },
    { id: 2, title: 'UI Fundamentals', issuer: 'Design Institute', date: 'Sep 05, 2023', theme: 'bg-indigo-900' },
    { id: 3, title: 'Frontend Mastery', issuer: 'Tech World', date: 'Aug 22, 2023', theme: 'bg-emerald-800' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-10 custom-scrollbar pr-2">
      <h2 className="text-xl font-bold text-gray-900 mb-6">My Certificates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
             {/* Certificate Preview */}
             <div className={`h-48 ${cert.theme} p-6 relative flex flex-col justify-between text-white`}>
                <div className="flex justify-between items-start opacity-80">
                   <Award size={32} />
                   <span className="text-xs font-mono uppercase tracking-widest border border-white/30 px-2 py-0.5 rounded">Verified</span>
                </div>
                <div className="text-center">
                   <h3 className="font-serif text-xl font-bold leading-tight mb-1">{cert.title}</h3>
                   <p className="text-xs opacity-70">Issued by {cert.issuer}</p>
                </div>
                <div className="text-center">
                   <p className="text-[10px] opacity-50 uppercase tracking-widest">Date Issued</p>
                   <p className="text-xs font-medium">{cert.date}</p>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                   <button className="p-2 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform"><Eye size={18} /></button>
                   <button className="p-2 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform"><Download size={18} /></button>
                </div>
             </div>

             {/* Footer Actions */}
             <div className="p-4 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                   ID: <span className="font-mono">CERT-{cert.id}00X2</span>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900">
                   <Share2 size={14} /> Share
                </button>
             </div>
          </div>
        ))}
        
        {/* Placeholder for future certs */}
        <div className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-gray-400 min-h-[250px] bg-gray-50/50">
           <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
             <Award size={24} className="opacity-50" />
           </div>
           <h3 className="text-sm font-medium text-gray-600">Complete more courses</h3>
           <p className="text-xs mt-1 max-w-[200px]">Finish courses with a passing grade to earn more certificates.</p>
        </div>
      </div>
    </div>
  );
};
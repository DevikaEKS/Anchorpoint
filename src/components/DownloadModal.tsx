import React from 'react';
import { X, Download, FileCode, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-sky-50 via-white to-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#106eea] text-white flex items-center justify-center shadow-xs">
              <Download className="w-5 h-5" />
            </div>
            <div>
              {/* <h3 className="text-lg font-bold text-[#071830]">
                Download Project ZIP
              </h3> */}
              {/* <p className="text-xs text-slate-500">
                Choose the package that fits how you want to deploy
              </p> */}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Options */}
        <div className="p-6 space-y-4">
          {/* Option 1: GitHub Pages Ready Dist (Recommended for instant deployment) */}
          <div className="p-5 rounded-xl border-2 border-sky-200 bg-sky-50/40 relative">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#106eea] bg-white px-2 py-0.5 rounded-sm shadow-2xs">
                    Recommended for GitHub Pages
                  </span>
                  <span className="text-xs text-slate-500">· 8.9 MB</span>
                </div>
                <h4 className="text-base font-bold text-[#071830] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#106eea]" />
                  <span>GitHub Pages Ready ZIP (Pre-built Static Site)</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contains the compiled HTML, CSS, JavaScript, and vehicle photos with relative paths (<code className="bg-white px-1 py-0.5 rounded text-[11px] font-mono">./assets</code>). Extract this zip file directly into your GitHub repository or drag-and-drop to GitHub Pages—no Node.js build step needed!
                </p>
                <div className="pt-1 flex items-center gap-2 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Zero build configuration required</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-end">
              <a
                href="./anchorpoint-github-pages-dist.zip"
                download="anchorpoint-github-pages-dist.zip"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#106eea] hover:bg-[#0d5ac3] text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                
              </a>
            </div>
          </div>

          {/* Option 2: Full React Source Project */}
          <div className="p-5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                    Developer Package
                  </span>
                  <span className="text-xs text-slate-500">· 17 MB</span>
                </div>
                <h4 className="text-base font-bold text-[#071830] flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-slate-700" />
                  <span>Full React 19 + TypeScript Source Code</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete developer codebase with Vite, Tailwind CSS v4, Lucide icons, components, data, and <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono">.github/workflows/deploy.yml</code>. Run <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono">npm install</code> and <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono">npm run dev</code> locally.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
              <a
                href="./anchorpoint-react-project-source.zip"
                download="anchorpoint-react-project-source.zip"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Download React Source ZIP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Instructions Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-600">
          <p className="font-semibold text-slate-800 mb-0.5">Quick GitHub Pages Setup:</p>
        
        </div>
      </div>
    </div>
  );
};

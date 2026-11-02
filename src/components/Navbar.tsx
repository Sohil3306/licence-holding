import React, { useState } from 'react';
import { 
  FileCheck2, 
  Search, 
  Compass, 
  MapPin, 
  Sparkles, 
  Bookmark, 
  ShieldCheck, 
  Menu, 
  X,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAI: () => void;
  onOpenDashboard: () => void;
  onOpenAdmin: () => void;
  savedCount: number;
  remindersCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenAI,
  onOpenDashboard,
  onOpenAdmin,
  savedCount,
  remindersCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'explore', label: 'Explore Licences', icon: Search },
    { id: 'categories', label: 'Categories', icon: Compass },
    { id: 'state-explorer', label: 'State-wise', icon: MapPin },
    { id: 'wizard', label: 'Discovery Wizard', icon: Sparkles },
    { id: 'sources', label: 'Official Portals', icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          
          {/* Zone 1: Brand Wordmark & Original Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onSelectTab('home');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-teal-400 group-hover:bg-slate-800 transition-colors shadow-sm">
                <FileCheck2 className="w-5 h-5 text-teal-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
                  Licence Holding
                </span>
                <span className="text-[10px] text-slate-700 tracking-wider font-semibold uppercase -mt-1">
                  Every Licence. One Platform.
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (single line, no wrap) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSelectTab(link.id)}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-sm ${
                    isActive
                      ? 'border-teal-600 text-slate-900 font-semibold'
                      : 'border-transparent hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Ask AI Assistant */}
            <button
              onClick={onOpenAI}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 transition-colors whitespace-nowrap shrink-0"
              title="Chat with Licence Mitra AI"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Ask Licence Mitra</span>
            </button>

            {/* User Dashboard / Saved items */}
            <button
              onClick={onOpenDashboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors whitespace-nowrap shrink-0 relative"
              title="View Saved Licences & Reminders"
            >
              <Bookmark className="w-3.5 h-3.5 text-slate-600" />
              <span>My Dashboard</span>
              {(savedCount > 0 || remindersCount > 0) && (
                <span className="ml-1 px-1.5 py-0.2 bg-teal-600 text-white text-[10px] font-bold rounded-full">
                  {savedCount + remindersCount}
                </span>
              )}
            </button>

            {/* Admin Panel Link */}
            <button
              onClick={onOpenAdmin}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Information Review & Admin Portal"
            >
              Admin
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAI}
              className="p-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200"
              aria-label="Ask AI Assistant"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Open main menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onSelectTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentTab === link.id
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <link.icon className="w-4 h-4 text-slate-500" />
              <span>{link.label}</span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenDashboard();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-700 bg-slate-50"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4" /> My Dashboard & Reminders
              </span>
              {(savedCount > 0 || remindersCount > 0) && (
                <span className="px-2 py-0.5 bg-teal-600 text-white text-xs font-bold rounded-full">
                  {savedCount + remindersCount}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-500"
            >
              <ShieldCheck className="w-4 h-4" /> Admin Review Workspace
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

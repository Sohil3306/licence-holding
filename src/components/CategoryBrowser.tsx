import React from 'react';
import { CATEGORIES, CategoryInfo } from '../data/categories';
import { 
  Car, 
  Utensils, 
  Store, 
  Factory, 
  HeartPulse, 
  GraduationCap, 
  Sprout, 
  Globe, 
  Building2,
  ArrowRight
} from 'lucide-react';
import { LicenceCategory } from '../types/licence';

interface CategoryBrowserProps {
  onSelectCategory: (categoryId: LicenceCategory) => void;
  getLicenceCountForCategory: (categoryId: LicenceCategory) => number;
}

export const CategoryBrowser: React.FC<CategoryBrowserProps> = ({
  onSelectCategory,
  getLicenceCountForCategory,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Sprout': return <Sprout className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Store className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            Structured Directory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Explore by Sector & Category
          </h2>
          <p className="text-sm text-slate-600 mt-1.5">
            Organized across central ministries, state departments, and local municipal corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => {
            const count = getLicenceCountForCategory(cat.id);
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="p-5 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer bg-slate-50/50 hover:bg-white group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <span className="text-xs text-slate-700 font-semibold tabular-nums">
                      {count > 0 ? `${count} Licences` : 'Catalogued'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1.5">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {cat.shortDescription}
                  </p>

                  {/* Typical Examples */}
                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/60 flex flex-wrap gap-1">
                    <span className="text-slate-400">Includes:</span>
                    {cat.examples.slice(0, 2).map((ex, i) => (
                      <span key={i} className="text-slate-600">
                        {ex}{i < 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2 flex items-center gap-1 text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>Browse category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

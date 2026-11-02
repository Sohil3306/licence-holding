import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Public Advisory" className="bg-amber-50/90 border-b border-amber-200 text-amber-900 px-4 py-2 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <p className="leading-snug">
            <span className="font-semibold text-amber-950">Public Advisory:</span> Licence Holding is an independent information and guidance platform. It is not a government agency. Requirements, fees, and procedures are subject to official revision. Always verify on the official government portal before making payments.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-700 hover:text-amber-950 p-1 rounded hover:bg-amber-100 shrink-0 transition-colors"
          title="Dismiss advisory"
          aria-label="Dismiss advisory banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};

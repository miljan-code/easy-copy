'use client';

import { useContext } from 'react';
import { ParaphraseContext } from '@/context/ParaphraseContext';
import { paraphrasingModes } from '@/constants/paraphrasingModes';

const ParaphraserHead = () => {
  const { paraMode, setParaMode } = useContext(ParaphraseContext);

  return (
    <div className="max-h-[200px] h-full text-md flex items-center gap-4 relative">
      <div className="absolute h-full w-full border-b-2 border-gray-100 dark:border-slate-800 z-0" />
      <p className="pl-6 font-bold">Style:</p>
      <div className="flex items-center gap-2">
        {paraphrasingModes.map(mode => (
          <button
            key={mode}
            onClick={() => setParaMode(mode)}
            className={`z-10 py-3 px-3 border-b-2 ${
              paraMode === mode ? 'border-green-700' : 'border-b-transparent'
            }`}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ParaphraserHead;

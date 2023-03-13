'use client';

import { useContext, useRef } from 'react';
import { GrammarContext } from '@/context/GrammarContext';
import { CopyButton } from '.';

const GrammarOutput = () => {
  const { outputText } = useContext(GrammarContext);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex-1 px-4 py-2">
      <div
        ref={outputRef}
        className="h-[400px] overflow-y-auto whitespace-pre-wrap custom-scroll"
      >
        {outputText}
      </div>
      <div className="flex items-center justify-end">
        <CopyButton isDisabled={!outputText} ref={outputRef} />
      </div>
    </div>
  );
};

export default GrammarOutput;

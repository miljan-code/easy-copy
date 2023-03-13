'use client';

import { useContext, useRef } from 'react';
import { ParaphraseContext } from '@/context/ParaphraseContext';
import { CopyButton } from '@/app/components';

const ParaphraserOutput = () => {
  const { paraphrased } = useContext(ParaphraseContext);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    // FIXME: needs formated output!
    <div className="flex-1 px-4 py-2">
      <div
        ref={outputRef}
        className="h-[400px] overflow-y-auto whitespace-pre-wrap custom-scroll"
      >
        {paraphrased}
      </div>
      <div className="flex justify-center items-center">
        <CopyButton isDisabled={!paraphrased} ref={outputRef} />
      </div>
    </div>
  );
};

export default ParaphraserOutput;

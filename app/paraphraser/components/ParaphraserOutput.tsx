'use client';

import { useContext } from 'react';
import { ParaphraseContext } from '@/context/ParaphraseContext';

const ParaphraserOutput = () => {
  const { paraphrased } = useContext(ParaphraseContext);

  return (
    // TODO: Add loading state
    // FIXME: outputed text should have some white space and nice format
    <div className="flex-1 px-4 py-2">
      <p className="whitespace-pre-wrap">{paraphrased}</p>
    </div>
  );
};

export default ParaphraserOutput;

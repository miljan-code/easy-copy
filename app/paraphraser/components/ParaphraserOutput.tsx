'use client';

import { useContext } from 'react';
import { ParaphraseContext } from '@/context/ParaphraseContext';

const ParaphraserOutput = () => {
  const { paraphrased } = useContext(ParaphraseContext);

  return (
    <div className="flex-1 px-4 py-2">
      <p>{paraphrased}</p>
    </div>
  );
};

export default ParaphraserOutput;

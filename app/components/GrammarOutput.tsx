'use client';

import { useContext } from 'react';
import { GrammarContext } from '@/context/GrammarContext';

const GrammarOutput = () => {
  const { outputText } = useContext(GrammarContext);

  return <div className="flex-1 px-4 py-2">{outputText}</div>;
};

export default GrammarOutput;

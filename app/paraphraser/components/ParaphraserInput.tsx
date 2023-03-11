'use client';

import { useEffect, useRef, useContext } from 'react';
import { preventRichText } from '@/utils/helpers';
import { ParaphraseContext } from '@/context/ParaphraseContext';

const ParaphraserInput = () => {
  const { paraMode, setParaphrased } = useContext(ParaphraseContext);

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current!.spellcheck = false;

    inputRef.current?.addEventListener('paste', e =>
      preventRichText(e, inputRef)
    );

    return () =>
      inputRef.current?.removeEventListener('paste', e =>
        preventRichText(e, inputRef)
      );
  }, []);

  const paraphraseIt = async () => {
    const inputText = inputRef.current?.innerText || '';

    if (inputText.trim().length === 0) return;

    await fetch('/api/paraphrase-it', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: inputText, style: paraMode }),
    })
      .then(res => res.json())
      .then(data => {
        setParaphrased(data.answer);
      });
  };

  return (
    <div className="flex-1 border-r-2 border-gray-100 dark:border-slate-800 py-2 px-4">
      <div
        ref={inputRef}
        contentEditable={true}
        className="w-full min-h-[400px] focus:outline-none"
      />
      <div className="flex items-center justify-center">
        <button
          onClick={paraphraseIt}
          className="bg-blue-800 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
        >
          Rephrase
        </button>
      </div>
    </div>
  );
};

export default ParaphraserInput;

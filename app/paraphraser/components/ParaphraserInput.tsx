'use client';

import { useEffect, useRef, useContext, useState } from 'react';
import { preventRichText } from '@/utils/helpers';
import { ParaphraseContext } from '@/context/ParaphraseContext';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ParaphraserInput = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { paraMode, setParaphrased } = useContext(ParaphraseContext);

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current!.spellcheck = false;

    // FIXME: sometimes pastes double
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

    setIsLoading(true);

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex-1 border-r-2 border-gray-100 dark:border-slate-800 py-2 px-4">
      <div
        ref={inputRef}
        contentEditable={true}
        className="w-full h-[400px] overflow-y-auto focus:outline-none custom-scroll"
      />
      <div className="flex items-center justify-center gap-2 mt-2">
        <button
          onClick={paraphraseIt}
          className="bg-blue-800 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
        >
          Rephrase
        </button>
        {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
      </div>
    </div>
  );
};

export default ParaphraserInput;

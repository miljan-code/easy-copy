'use client';

import { useEffect, useState, useRef, useContext } from 'react';
import { GrammarContext } from '@/context/GrammarContext';
import { putCursorAtTheEndOf, preventRichText } from '@/utils/helpers';

const GrammarInput = () => {
  const [inputText, setInputText] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [errors, setErrors] = useState<string[]>();
  const [errorCount, setErrorCount] = useState(0);

  const { setOutputText } = useContext(GrammarContext);

  const inputRef = useRef<HTMLDivElement>(null);

  const wordsCount = inputText.split(' ').filter(i => i !== '').length;

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

  useEffect(() => {
    const currentText = inputRef.current?.innerText.split(' ');

    const markedWords = currentText?.map(word => {
      if (errors?.includes(word)) {
        return `<span class="text-red-700 font-bold">${word}</span>`;
      } else {
        return word;
      }
    });

    const editedText = `<p>${markedWords!.join(' ')}</p>`;
    inputRef.current!.innerHTML = editedText;

    putCursorAtTheEndOf(inputRef);
  }, [errors]);

  // TODO: refactor
  const checkForErrors = async () => {
    if (inputText.trim().length === 0) return;

    await fetch('/api/get-grammar-errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: inputText }),
    })
      .then(res => res.json())
      .then(data => {
        setErrors(data.answer.words);
        setErrorCount(data.answer.errors);
      });
  };

  const fixErrors = async () => {
    if (inputText.trim().length === 0) return;

    await fetch('/api/get-correct-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: inputText }),
    })
      .then(res => res.json())
      .then(data => {
        setOutputText(data.response);
      });
  };

  const typingHandler = () => {
    if (inputRef.current?.innerText.length === 0) {
      setErrorCount(0);
    }

    setInputText(inputRef.current?.innerText!);
    clearTimeout(timer);
    // TODO: maybe fire this after 1s?
    setTimer(setTimeout(() => checkForErrors(), 2000));
  };

  return (
    <div className="flex-1 border-r-2 border-gray-100 dark:border-slate-800 py-2 px-4">
      {/* FIXME: add overscroll after h-400px */}
      <div
        ref={inputRef}
        contentEditable={true}
        onKeyUp={typingHandler}
        className="w-full min-h-[400px] focus:outline-none"
      />
      <div className="flex items-center gap-2">
        <p>
          {wordsCount} <span className="text-sm">Words</span>
        </p>
        {/* FIXME: sometime shows errors even if there arent any */}
        <p
          className={`${
            errorCount > 0 ? 'bg-red-700 text-white' : ''
          } px-2 rounded-md`}
        >
          {errorCount}{' '}
          <span className="text-sm">{errorCount > 1 ? 'Errors' : 'Error'}</span>
        </p>
        <div className="ml-auto">
          <button
            onClick={fixErrors}
            className="bg-green-800 text-white px-5 py-2 rounded-full text-sm hover:bg-green-700 transition-colors"
          >
            Fix Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrammarInput;

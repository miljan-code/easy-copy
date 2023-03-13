'use client';

import { useRef, useContext, useState } from 'react';
import { ArticleContext } from '@/context/ArticleContext';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { CopyButton } from '@/app/components';

const MIN_LENGTH = 5;

const ArticleWriter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { article, setArticle } = useContext(ArticleContext);

  const topicRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const getArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    const topic = topicRef.current!.value;

    if (topic.trim().length < MIN_LENGTH) return;

    setIsLoading(true);

    await fetch('/api/get-article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: topic }),
    })
      .then(res => res.json())
      .then(data => {
        setArticle(data.response);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="mx-auto w-[80%] shadow-md rounded-xl my-16 dark:bg-slate-900">
      <div className="px-4 py-4 max-h-[200px] h-full text-md flex items-center gap-4 relative border-b-2 dark:border-slate-800">
        <p className="min-w-fit">Choose a topic</p>
        <form onSubmit={getArticle} className="w-full flex items-center gap-4">
          <input
            ref={topicRef}
            type="text"
            className="bg-slate-200 dark:bg-slate-800 focus:outline-none text-sm px-2 py-1 w-[300px] rounded-lg"
          />
          <button
            onClick={getArticle}
            className="bg-green-700 text-white text-sm px-2 py-1 rounded-md"
          >
            Submit
          </button>
          {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </form>
      </div>
      <div className="h-[600px] whitespace-pre-wrap p-4 flex flex-col">
        <div ref={outputRef} className="h-full">
          {article}
        </div>
        <div className="self-center justify-self-end">
          <CopyButton isDisabled={!article} ref={outputRef} />
        </div>
      </div>
    </div>
  );
};

export default ArticleWriter;

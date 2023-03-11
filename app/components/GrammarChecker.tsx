import { GrammarInput, GrammarOutput } from '.';

const GrammarChecker = () => {
  return (
    <div className="mx-auto w-[80%] shadow-md rounded-xl my-10 dark:bg-slate-900">
      {/* Head */}
      <div className="max-h-[200px] h-full border-b-2 border-gray-100 dark:border-slate-800 py-3 px-4 text-md flex justify-between font-bold">
        <p>Original text</p>
        <p>AI improved text</p>
      </div>

      {/* Textareas */}
      <div className="flex">
        <GrammarInput />
        <GrammarOutput />
      </div>
    </div>
  );
};

export default GrammarChecker;

import { ParaphraserHead, ParaphraserInput, ParaphraserOutput } from '.';

const Paraphraser = () => {
  return (
    <div className="mx-auto w-[80%] shadow-md rounded-xl my-16 dark:bg-slate-900">
      <ParaphraserHead />
      <div className="flex">
        <ParaphraserInput />
        <ParaphraserOutput />
      </div>
    </div>
  );
};

export default Paraphraser;

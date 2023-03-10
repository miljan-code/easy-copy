import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google';
import { HiOutlineMenu } from 'react-icons/hi';
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';

const logoFont = Roboto_Slab({ subsets: ['latin'] });

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ darkMode, setDarkMode }: Props) => {
  return (
    <header className="px-3 py-2 border-b flex items-center justify-between border-gray-200 dark:border-slate-700 w-full dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-4 flex-1">
        <HiOutlineMenu className="text-2xl text-gray-700 dark:text-white cursor-pointer" />
        <div className="flex items-center cursor-pointer gap-2">
          <Image
            src="/logo.png"
            alt="Easy Copy Logo"
            height={250}
            width={250}
            className="w-8 h-8"
          />
          <h1
            className={`${logoFont.className} font-bold uppercase text-gray-800 dark:text-white`}
          >
            Easy Copy
          </h1>
        </div>
      </div>
      <div className="flex-1 text-center">
        <h3 className="">AI Powered Copywriting</h3>
      </div>
      <div className="flex-1 flex items-center justify-end gap-2">
        <div
          onClick={() => setDarkMode(prev => !prev)}
          className="bg-gray-200 dark:bg-slate-700 p-2 rounded-full cursor-pointer"
        >
          {!darkMode ? (
            <TbMoonFilled className="text-slate-700 dark:text-white" />
          ) : (
            <TbSunFilled className="text-slate-700 dark:text-white" />
          )}
        </div>
        <div className="bg-gray-200 dark:bg-slate-700 p-2 rounded-full cursor-pointer">
          <FaRegUser className="text-slate-700 dark:text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;

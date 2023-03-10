'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavIcon } from '@/utils/getNavIcon';

const NavLink = ({ data }: { data: NavLinkType }) => {
  // Pathname is neccessery to check if navlink is active
  const pathname = usePathname();

  // This is workaround for passing NavLink Icons because in Next 13 it's not possible to pass functions through props in Client components
  const Icon = getNavIcon(data.label);

  // Colors map to make tailwind happy because it doesnt like passing classes through props or as arbitrary values
  const colorVariants = {
    blue: 'bg-blue-500',
    green: 'bg-green-700',
    red: 'bg-red-500',
    yellow: 'bg-yellow-600',
  };
  const color = colorVariants[data.color as keyof typeof colorVariants];

  return (
    <Link href={data.link}>
      <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 py-2 pr-4">
        <div
          className={`h-6 w-1 rounded-r-md ${
            pathname === data.link ? color : ''
          }`}
        />
        <div className={`p-[6px] rounded-full ${color}`}>
          <Icon className="text-lg text-white" />
        </div>
        <div>{data.label}</div>
      </div>
    </Link>
  );
};

export default NavLink;

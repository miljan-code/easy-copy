import { navLinks } from '@/constants/navLinks';
import { NavLink } from '.';

const Sidebar = () => {
  return (
    <aside className="border-r-2 border-gray-100 dark:border-slate-700">
      <nav className="flex flex-col pt-3">
        {navLinks.map(item => (
          <NavLink key={item.label} data={item} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

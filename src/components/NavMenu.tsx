'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'about', url: '/about' },
  { name: 'vans', url: '/vans' },
  { name: 'host', url: '/host' },
];

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <header className="px-5 py-8 flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="" width={100} height={50} />
      </Link>

      <nav role="navigation" className="flex gap-2 ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={clsx(
              'capitalize',
              pathname === link.url &&
                'font-medium underline underline-offset-2',
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default NavMenu;

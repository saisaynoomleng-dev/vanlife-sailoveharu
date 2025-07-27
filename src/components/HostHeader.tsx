'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'dashboard', url: '/host' },
  { name: 'income', url: '/host/income' },
  { name: 'vans', url: '/host/vans' },
  { name: 'reviews', url: '/host/reviews' },
];

const hostHeader = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-3 px-5 py-3 capitalize text-brand-black-100/90">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.url}
          key={link.url}
          className={clsx(
            pathname === link.url &&
              'text-brand-black-100/100 font-semibold underline underline-offset-4',
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default hostHeader;

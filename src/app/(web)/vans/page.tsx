import Bounded from '@/components/Bounded';
import VanCard from '@/components/VanCard';
import { sanityFetch } from '@/sanity/lib/live';
import { VANS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const VansPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    filter?: string;
  }>;
}) => {
  const { page, filter } = await searchParams;
  const params = {
    filter: filter || null,
  };
  const { data: vans } = await sanityFetch({ query: VANS_QUERY, params });

  const currentPage = parseInt(page || '1');
  const vansPerPage = 4;
  const totalVans = vans.length;
  const totalPages = Math.ceil(totalVans / vansPerPage);

  const startIndex = (currentPage - 1) * vansPerPage;
  const endIndex = startIndex + vansPerPage;
  const allVans = vans.slice(startIndex, endIndex);

  const VANS_FILTER = ['simple', 'rugged', 'luxury'];

  return (
    <Bounded>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-fs-500">Explore our van options</h1>

        <div className="flex justify-between min-w-full items-center">
          <div className="flex gap-3">
            {VANS_FILTER.map((filterName) => (
              <Link
                href={{
                  pathname: '/vans',
                  query: {
                    ...(page && { page }),
                    filter: filterName,
                  },
                }}
                key={filterName}
                className={clsx(
                  'font-semibold capitalize self-start px-3 py-1 text-brand-white-100 rounded-sm',
                  filter === filterName &&
                    {
                      simple: 'bg-brand-orange-500',
                      rugged: 'bg-brand-green',
                      luxury: 'bg-brand-black-200',
                    }[filter],
                  filter !== filterName && 'bg-brand-orange-300',
                )}
              >
                {filterName}
              </Link>
            ))}
          </div>

          {filter && (
            <Link
              className="underline underline-offset-2 text-red-500"
              href="/vans"
            >
              Clear Filter
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 py-3">
        {allVans.map((van) => (
          <VanCard key={van.slug?.current} {...van} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-3 items-center justify-center">
          <Link
            href={{
              pathname: '/vans',
              query: {
                ...(filter && { filter }),
                page: currentPage === 1 ? 1 : currentPage - 1,
              },
            }}
            className={
              currentPage === 1
                ? 'pointer-events-none text-brand-black-100/20'
                : 'pointer-events-auto text-brand-black-100/100'
            }
          >
            <FaChevronLeft />
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Link
                href={{
                  pathname: '/vans',
                  query: {
                    ...(filter && { filter }),
                    page: pageNumber,
                  },
                }}
                key={pageNumber}
                className={clsx(
                  pageNumber === currentPage &&
                    'text-brand-orange-500 font-bold',
                )}
              >
                {pageNumber}
              </Link>
            ),
          )}

          <Link
            href={{
              pathname: '/vans',
              query: {
                ...(filter && { filter }),
                page: currentPage === totalPages ? totalPages : currentPage + 1,
              },
            }}
            className={
              currentPage === totalPages
                ? 'pointer-events-none text-brand-black-100/20'
                : 'pointer-events-auto text-brand-black-100/100'
            }
          >
            <FaChevronRight />
          </Link>
        </div>
      )}
    </Bounded>
  );
};

export default VansPage;

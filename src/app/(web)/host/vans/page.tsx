import Bounded from '@/components/Bounded';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { HOST_VANS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const hostVansPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
  }>;
}) => {
  const { page } = await searchParams;
  const { data: vans } = await sanityFetch({ query: HOST_VANS_QUERY });

  const currentPage = parseInt(page || '1');
  const totalVans = vans.length;
  const vansPerPage = 5;
  const totalPages = Math.ceil(totalVans / vansPerPage);

  const startIndex = (currentPage - 1) * vansPerPage;
  const endIndex = startIndex + vansPerPage;
  const allVans = vans.slice(startIndex, endIndex);

  if (!vans) notFound();

  return (
    <Bounded className="flex flex-col">
      <h3 className="font-bold text-fs-500">Your Listed Vans</h3>

      <div className="flex flex-col gap-y-5">
        {allVans.map((van) => (
          <Link
            href={`/host/vans/${van.slug?.current}`}
            key={van.slug?.current}
            className="bg-brand-white-100 p-2 grid grid-cols-[auto_1fr] gap-x-3"
          >
            {van.imageURL?.url && (
              <Image
                src={urlFor(van.imageURL.url)
                  .width(200)
                  .height(200)
                  .auto('format')
                  .format('webp')
                  .url()}
                width={100}
                height={100}
                alt={van.imageAlt as string}
                className="rounded-sm"
              />
            )}

            <div className="flex flex-col gap-y-3">
              <h3 className="font-semibold text-fs-500">{van.title}</h3>
              {van.price && <p>{formatCurrency(van.price)}/day</p>}
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex min-w-full justify-center items-center gap-3">
          <Link
            href={{
              pathname: '/host/vans',
              query: {
                page: currentPage - 1,
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
                  pathname: '/host/vans',
                  query: {
                    page: pageNumber,
                  },
                }}
                key={pageNumber}
              >
                {pageNumber}
              </Link>
            ),
          )}

          <Link
            href={{
              pathname: '/host/vans',
              query: {
                page: currentPage + 1,
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

export default hostVansPage;

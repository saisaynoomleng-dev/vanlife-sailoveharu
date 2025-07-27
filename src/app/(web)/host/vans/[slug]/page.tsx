import Bounded from '@/components/Bounded';
import HostVanDetailMenu from '@/components/HostVanDetailMenu';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { HOST_VAN_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const HostVanDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: van } = await sanityFetch({
    query: HOST_VAN_QUERY,
    params: await params,
  });

  if (!van) notFound();

  return (
    <Bounded className="flex flex-col gap-y-5">
      <Link href="/host/vans" className="underline underline-offset-4">
        &larr; Back to all vans
      </Link>

      <div className="bg-brand-white-100">
        <div className="grid grid-cols-[auto_1fr] gap-x-4 p-4">
          {van.imageURL?.url && (
            <Image
              src={urlFor(van.imageURL.url)
                .width(300)
                .height(300)
                .format('webp')
                .url()}
              width={200}
              height={200}
              alt={van.imageAlt as string}
              className="min-w-[200px] rounded-sm"
            />
          )}

          <div className="flex flex-col justify-center">
            <p
              className={clsx(
                'capitalize p-2 font-semibold text-brand-white-100 rounded-sm inline-block self-start',
                van.type === 'simple' && 'bg-brand-orange-500',
                van.type === 'rugged' && 'bg-brand-green',
                van.type === 'luxury' && 'bg-brand-black-200',
              )}
            >
              {van.type}
            </p>

            <h2 className="font-bold text-fs-600">{van.title}</h2>

            {van.price && (
              <p>
                <span className="font-bold text-fs-500">
                  {formatCurrency(van.price)}
                </span>
                /day
              </p>
            )}
          </div>
        </div>

        <HostVanDetailMenu
          title={van.title}
          desc={van.desc}
          price={van.price}
          imageAlt={van.imageAlt}
          imageURL={van.imageURL}
          type={van.type}
          slug={van.slug}
        />
      </div>
    </Bounded>
  );
};

export default HostVanDetails;

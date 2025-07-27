import Bounded from '@/components/Bounded';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { HOST_VANS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

const HostPage = async () => {
  const { data: vans } = await sanityFetch({ query: HOST_VANS_QUERY });
  return (
    <Bounded>
      {/* income */}

      {/* review */}

      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-fs-500">Your Listed Vans</h2>
          <Link href="/host/vans" className="underline underline-offset-4">
            View All
          </Link>
        </div>
        {vans.map((van) => (
          <div
            key={van.slug?.current}
            className="bg-brand-white-100 p-2 grid grid-cols-[auto_1fr_auto] gap-x-2 justify-center items-center pr-5"
          >
            {van.imageURL?.url && (
              <Image
                src={urlFor(van.imageURL.url)
                  .width(200)
                  .height(200)
                  .format('webp')
                  .url()}
                width={100}
                height={100}
                alt={van.imageAlt as string}
              />
            )}

            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold">{van.title}</h3>
              {van.price && <p>{formatCurrency(van.price)}/day</p>}
            </div>

            <Link href="/" className="underline underline-offset-4">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default HostPage;

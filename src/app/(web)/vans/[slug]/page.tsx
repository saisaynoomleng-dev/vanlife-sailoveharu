import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import VanType from '@/components/VanType';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { VAN_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const VanDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: van } = await sanityFetch({
    query: VAN_QUERY,
    params: await params,
  });

  if (!van) notFound();

  return (
    <Bounded className="flex flex-col">
      <Link href="/vans"> &larr; Back to all Vans</Link>

      <Image
        src={urlFor(van?.imageURL?.url || 'https://placehold.co/600x400')
          .width(1000)
          .height(1000)
          .auto('format')
          .format('webp')
          .url()}
        width={600}
        height={600}
        className="rounded-sm min-w-full"
        alt=""
      />

      {van.type && <VanType type={van.type} />}

      {van.price && (
        <p>
          <span className="font-semibold text-fs-500">
            {formatCurrency(van.price)}
          </span>
          /day
        </p>
      )}

      <p>{van.desc}</p>

      <Link href="/">
        <Button
          variant="link"
          className="min-w-full bg-brand-orange-400 text-brand-white-200"
        >
          Rent this Van
        </Button>
      </Link>
    </Bounded>
  );
};

export default VanDetailPage;

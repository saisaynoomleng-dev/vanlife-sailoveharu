import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { VANS_QUERYResult } from '@/sanity/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import VanType from './VanType';

const VanCard = (props: NonNullable<VANS_QUERYResult>[number]) => {
  const { slug, imageURL, imageAlt, title, price, type } = props;

  return (
    <Link href={`/vans/${slug?.current}`} className="flex flex-col gap-3">
      <Image
        src={urlFor(imageURL?.url || 'https://placehold.co/400')
          .width(400)
          .height(400)
          .format('webp')
          .auto('format')
          .url()}
        width={300}
        height={300}
        alt={imageAlt as string}
        className="rounded-sm min-w-full"
      />

      <div className="flex justify-between">
        <h3 className="font-semibold text-fs-500">{title}</h3>
        {price && (
          <p>
            <span className="font-semibold text-fs-500">
              {formatCurrency(price)}
            </span>
            /day
          </p>
        )}
      </div>

      {type && <VanType type={type} />}
    </Link>
  );
};

export default VanCard;

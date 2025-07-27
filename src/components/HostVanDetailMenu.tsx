'use client';

import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { HOST_VAN_QUERYResult } from '@/sanity/types';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

const Details = ({
  title,
  type,
  desc,
}: {
  title: string;
  type: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-y-4 mt-4">
      <p>
        <span className="font-bold">Name: </span>
        <span className="capitalize">{title}</span>
      </p>

      <p>
        <span className="font-bold">Category: </span>
        <span className="capitalize">{type}</span>
      </p>

      <p>
        <span className="font-bold">Description:</span>
        {desc}
      </p>

      <p>
        <span className="font-bold">Visibility:</span>
        Public
      </p>
    </div>
  );
};

const Pricing = ({ price }: { price: number }) => {
  return (
    <div className="flex flex-col gap-y-4 mt-4">
      <p>
        <span className="font-bold text-fs-500">{formatCurrency(price)}</span>
        /day
      </p>
    </div>
  );
};

const Photos = ({
  imageAlt,
  imageURL,
}: {
  imageAlt: string;
  imageURL: string;
}) => {
  return (
    <div className="flex flex-col gap-y-4 mt-4">
      <Image
        src={urlFor(imageURL).width(500).height(500).format('webp').url()}
        width={400}
        height={400}
        alt={imageAlt}
        className="min-w-[300px] rounded-sm"
      />
    </div>
  );
};

const MENU = [{ name: 'details' }, { name: 'pricing' }, { name: 'photos' }];

const HostVanDetailMenu = (props: NonNullable<HOST_VAN_QUERYResult>) => {
  const [activeTab, setActiveTab] = useState('details');
  const { title, type, desc, price, imageAlt, imageURL } = props;

  const renderComponent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <Details
            title={title as string}
            type={type as string}
            desc={desc as string}
          />
        );

      case 'pricing':
        return <Pricing price={price as number} />;

      case 'photos':
        return (
          <Photos imageAlt={imageAlt || ''} imageURL={imageURL?.url || ''} />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-x-3 px-5 py-6">
      <div className="flex gap-x-3">
        {MENU.map((menu) => (
          <div className="flex gap-x-3">
            <button
              key={menu.name}
              className={clsx(
                'capitalize',
                activeTab === menu.name && 'underline underline-offset-4',
              )}
              onClick={() => setActiveTab(menu.name)}
            >
              {menu.name}
            </button>
          </div>
        ))}
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
};

export default HostVanDetailMenu;

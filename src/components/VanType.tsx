import clsx from 'clsx';
import React from 'react';

const VanType = ({ type }: { type: 'simple' | 'rugged' | 'luxury' }) => {
  return (
    <p
      className={clsx(
        'font-semibold capitalize self-start px-3 py-1 text-brand-white-100 rounded-sm',
        type === 'rugged' && 'bg-brand-green',
        type === 'simple' && 'bg-brand-orange-500',
        type === 'luxury' && 'bg-brand-black-200',
      )}
    >
      {type}
    </p>
  );
};

export default VanType;

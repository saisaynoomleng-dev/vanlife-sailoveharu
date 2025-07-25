import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp className={clsx('py-3 px-5 space-y-5 min-h-[86vh]', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;

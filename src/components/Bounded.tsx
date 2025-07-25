import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return <Comp className={(clsx(''), className)}>{children}</Comp>;
};

export default Bounded;

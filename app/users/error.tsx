'use client';

import { ErrorProps } from './types';

const Error = ({ error }: ErrorProps) => {
  console.log(error);

  return <p className="text-center py-4 text-red-500">{error.message}</p>;
};

export default Error;

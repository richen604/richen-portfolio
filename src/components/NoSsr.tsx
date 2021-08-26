import dynamic from 'next/dynamic';
import React from 'react';

interface INoSsrProps {
  children: React.ReactNode;
}

const NoSsr: React.FunctionComponent<INoSsrProps> = ({
  children,
}: INoSsrProps) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});

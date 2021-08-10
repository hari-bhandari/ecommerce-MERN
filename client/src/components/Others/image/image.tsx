import React from 'react';
import placeholder from './product-placeholder.png';
import Image from 'next/image'

const Placeholder = () => <img src={placeholder} alt="product img loader" />;
export default function Img({
                                url,
                                alt = 'placeholder',
                                className,
                                style,
                                width, height
                            }: {
    url?: string;
    alt?: string;
    unloader?: string;
    loader?: string;
    className?: string;
    style?: any;
    width: string,
    height: string
}) {
  return (
      <Image
          alt={alt}
          src={url}
          width={width}
          height={height}
          className={className}
      />
  );
}

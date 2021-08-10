import React from 'react';
import {Img} from 'react-image';
import placeholder from './product-placeholder.png';

const Placeholder = () => <img src={placeholder} alt="product img loader" />;
export default function Image({
                                url,
                                alt = 'placeholder',
                                unloader,
                                loader,
                                className,
                                style,
                                width, height
                              }: {
  url?: string | [string];
  alt?: string;
  unloader?: string;
  loader?: string;
  className?: string;
  style?: any;
  width: string,
  height: string
}) {
  return (
      <Img
          draggable={false}
          style={style}
          src={url}
          alt={alt}
          width={width}
          height={height}
          loader={<Placeholder/>}
          unloader={<Placeholder/>}
          className={className}
      />
  );
}

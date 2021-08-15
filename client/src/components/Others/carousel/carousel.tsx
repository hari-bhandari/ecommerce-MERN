import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


type Props = {
  data?: any[] | undefined;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  props?: any;
  component?: any;
  autoPlay?: boolean;
  infinite?: boolean;
  isRtl?: boolean;
  customLeftArrow?: React.ReactElement;
  customRightArrow?: React.ReactElement;
  itemClass?: string;
  mobile:number;
  desktop:number;
  tablet:number;
  children?:any;
  tv:number;
  laptop:number,
  miniTablet:number

};

export default function CustomCarousel({
                                         deviceType,
                                         component,
                                         autoPlay = false,
                                         infinite = false,
                                         customLeftArrow,
                                         customRightArrow,
                                         itemClass,
                                         isRtl, mobile, desktop, tablet, children, laptop, tv, miniTablet,
                                         ...props
                                       }: Props) {
  const responsive = {
    tv: {
      breakpoint: { max: 10000, min: 2200 },
      items: tv,
    },
    desktop: {
      breakpoint: { max: 2200, min: 1723 },
      items: desktop,
    },
    laptop: {
      breakpoint: { max: 1723, min: 1282 },
      items: laptop,
    },
    tablet: {
      breakpoint: { max: 1282, min: 617 },
      items:tablet,
    },
    miniTablet:{
      breakpoint: { max: 617, min: 439 },
      items:miniTablet,
    },
    mobile: {
      breakpoint: { max: 439, min: 0 },
      items: mobile,
    },
  };
  return (
    <div dir='ltr'>
      <Carousel
          arrows={true}
          responsive={responsive}
          showDots={false}
          slidesToSlide={1}
          infinite={infinite}
          containerClass='container-with-dots'
          itemClass={itemClass}
          autoPlay={autoPlay}
          autoPlaySpeed={8000}
          renderButtonGroupOutside={true}
          additionalTransfrom={0}
          {...props}
      >
        {children}
      </Carousel>
    </div>
  );
}

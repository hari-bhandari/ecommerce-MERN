import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {ArrowNext} from '../../../assets/icons/ArrowNext';
import {ArrowPrev} from '../../../assets/icons/ArrowPrev';
import 'react-multi-carousel/lib/styles.css';

const ButtonPrev = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 40%;
  left: 40px;
  z-index: 99;
`;

const ButtonNext = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 40%;
  right: 40px;
  z-index: 99;
`;


const PrevButton = ({ onClick, children }: any) => {
  return (
    <ButtonPrev
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='prevButton'
    >
      {children}
    </ButtonPrev>
  );
};
const NextButton = ({ onClick, children }: any) => {
  return (
    <ButtonNext
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='nextButton'
    >
      {children}
    </ButtonNext>
  );
};

const ButtonGroup = ({ next, previous }: any) => {

  return (

        <>
          <PrevButton aria-label="Previous" onClick={() => previous()}>
            <ArrowPrev/>
          </PrevButton>
          <NextButton aria-label="next" onClick={() => next()}>
            <ArrowNext/>
          </NextButton>
        </>
  );
};

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
  infinite = true,
  customLeftArrow,
  customRightArrow,
  itemClass,
  isRtl,mobile,desktop,tablet,children,laptop,tv,miniTablet,
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
        arrows={false}
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        infinite={infinite}
        containerClass='container-with-dots'
        itemClass={itemClass}
        autoPlay={autoPlay}
        autoPlaySpeed={3000}
        renderButtonGroupOutside={true}
        additionalTransfrom={0}
        customButtonGroup={<ButtonGroup />}
        {...props}
      >
        {children}
      </Carousel>
    </div>
  );
}

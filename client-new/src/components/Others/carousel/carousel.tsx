import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ArrowNext } from '../../../assets/icons/ArrowNext';
import { ArrowPrev } from '../../../assets/icons/ArrowPrev';
import 'react-multi-carousel/lib/styles.css';
const ButtonPrev = styled('button')`
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
  top: 50%;
  left: 40px;
  margin-top: -20px;
  z-index: 99;
`;

const ButtonNext = styled('button')`
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
  top: 50%;
  right: 40px;
  margin-top: -20px;
  z-index: 99;
`;

const ButtonGroupWrapper = styled('div')``;

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
    <ButtonGroupWrapper>

        <>
          <PrevButton onClick={() => previous()}>
            <ArrowPrev />
          </PrevButton>
          <NextButton onClick={() => next()}>
            <ArrowNext />
          </NextButton>
        </>
    </ButtonGroupWrapper>
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

};

export default function CustomCarousel({
  data,
  deviceType,
  component,
  autoPlay = false,
  infinite = true,
  customLeftArrow,
  customRightArrow,
  itemClass,
  isRtl,mobile,desktop,tablet,children,
  ...props
}: Props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 1232 },
      items: desktop,
    },
    tablet: {
      breakpoint: { max: 1232, min: 464 },
      items:tablet,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
        // use dir ltr when rtl true
      >
        {  // @ts-ignore
          data.map((item: any, index: number) => {
            if(children) return children
            if (component) return component(item);
          return (
            <div style={{ padding: '0 15px', overflow: 'hidden' }} key={index}>
              <a
                href={item.link}
                style={{ display: 'flex', cursor: 'pointer' }}
              >
                <img
                  key={item.id}
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    position: 'relative',
                  }}
                />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

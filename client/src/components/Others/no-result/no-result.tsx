import React from 'react';
import {useRouter} from 'next/router';
import NoResultSvg from './no-result.svg';
import {ButtonWrapper, ImageWrapper, NoResultWrapper,} from './no-result.style';
import {ArrowPrev} from '@/assets/icons/ArrowPrev';
import {Button} from '@/components/Others/button/button';

type NoResultFoundProps = {
    id?: string;
};

const NoResultFound: React.FC<NoResultFoundProps> = ({id}) => {
    const router = useRouter();

    // const { dispatch } = React.useContext(SearchContext);

    function onClickButton() {
        // dispatch({
        //   type: 'RESET',
        // });
        const href = router.pathname;

        router.push(href, href, {shallow: true});
    }

    return (
    <NoResultWrapper id={id}>
      <h3>
          Sorry, No result found :(
      </h3>

      <ImageWrapper>
        <img src={NoResultSvg} alt="No Result" />
      </ImageWrapper>

      <ButtonWrapper>
          <div onClick={onClickButton}>
              <Button aria-label="Previous">
                  <ArrowPrev/> Go Back
              </Button>
          </div>
      </ButtonWrapper>
    </NoResultWrapper>
  );
};

export default NoResultFound;

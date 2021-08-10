import styled from 'styled-components';
import css from '@styled-system/css';

export const LogoBox = styled.span(
  css({
    color: 'text.bold',
    fontSize: 26,
    fontWeight: 'bold',
    cursor: 'pointer',
    mr: [0, 20, 40],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
);

export const LogoImage = styled.div`
  svg {

    display: block;
    backface-visibility: hidden;
    max-width: 150px;
    @media only screen and (max-width: 428px) {
      max-width: 120px;
    }
    @media only screen and (max-width: 428px) {
      max-width: 110px;
    }
  }

`

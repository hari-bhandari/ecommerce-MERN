import styled from 'styled-components';
import css from '@styled-system/css';
import {color, compose, layout, space} from 'styled-system';

export const Label = styled.label(
  css({
    fontSize: 'base',
    lineHeight: '19px',
    mb: '15px',
    display: 'flex',
  }),
  compose(color, space, layout)
);

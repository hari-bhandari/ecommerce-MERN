import styled from 'styled-components';
import {color, compose, flexbox, layout, position, space,} from 'styled-system';

export const Box = styled.div<any>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    margin: 0,
  },
  compose(space, color, layout, flexbox, position)
);

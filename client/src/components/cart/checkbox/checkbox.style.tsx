import styled from 'styled-components';
import css from '@styled-system/css';

export const StyledCheckBox = styled.div({
  display: 'inline-flex',
});
export const StyledCheckBoxInputIndicator = styled.div(
  css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 14,
    height: 14,
    borderRadius: 'base',
    borderWidth: 1,
    borderColor: 'text.regular',
    position: 'relative',
    transition: 'all 0.3s ease',
    '&::after': {
      content: ' ',
      width: 2,
      height: 6,
      transform: 'rotate(45deg) scale(0.8)',
      borderBottom: '2px solid',
      borderRight: '2px solid',
      borderColor: 'text.regular',
      position: 'absolute',
      top: 1,
      opacity: 0,
      visibility: 'hidden',
      transitionProperty: 'opacity, visibility',
      transitionDuration: '0.3s',
    },
  })
);
export const StyledCheckBoxInput = styled.input(
  css({
    opacity: 0,
    position: 'absolute',
    margin: 0,
    zIndex: -1,
    width: 0,
    height: 0,
    overflow: 'hidden',
    pointerEvents: 'none',

    '&:checked + div': {
      borderColor: 'text.regular',
      backgroundColor: 'white',
      '&::after': {
        opacity: 1,
        visibility: 'visible',
        transform: 'rotate(45deg) scale(1)',
      },
    },
  })
);

export const StyledCheckBoxLabel = styled.label<any>(
  css({
    display: 'flex',
    alignItems: 'center',
    color: 'text.regular',
    fontSize: 'base',
    fontWeight: 'regular',
  }),
  ({ position }) => ({
    flexDirection: position === 'right' ? 'row-reverse' : 'row',
  })
);
export const StyledCheckBoxLabelText = styled.span<any>((props) =>
  props.position === 'left'
    ? {
        marginRight: 10,
      }
    : { marginLeft: 10 }
);

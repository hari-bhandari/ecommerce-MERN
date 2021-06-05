import styled, {css} from 'styled-components';
import {themeGet} from '@styled-system/theme-get';

const PopoverWrapper = styled.div`
  ${css({
    flexGrow: 1,
    fontSize: 'base',
    px: 20,
    height: 38,
    color: 'text.regular',
    backgroundColor: 'inherit',
  })}
  position: relative;
  cursor: pointer;
  //flex-grow: 100;
  .popover-handler {
    width: 100%;
    display: inline-block;
    flex-grow: 1;
    cursor: pointer;
  }

  .popover-content {
    left: 0px;
    top: calc(100% + 15px);
    display: block;
    min-width: 100%;
    padding: 15px 20px;
    position: absolute;
    border-radius: ${themeGet('radii.base', '6px')};
    background-color: ${themeGet('colors.white', '#ffffff')};
    box-shadow: 0 3px 20px rgba(142, 142, 142, 0.14);
    z-index: 99;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 9px 8px;
      border-color: transparent transparent ${themeGet('colors.white', '#ffffff')} transparent;
      top: -8px;
      left: 15px;
      box-shadow: -4px -4px 8px -3px rgba(142, 142, 142, 0.14);
      pointer-events: none;
    }
  }

  /* If direction prop set to right */

  &.right {
    .popover-content {
      left: auto;
      right: 0px;

      &:before {
        left: auto;
        right: 15px;
      }
    }
  }
`;

export default PopoverWrapper;

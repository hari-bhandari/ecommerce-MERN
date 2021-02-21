import React from 'react';
import { Box, SelectedItem, Flag, MenuItem } from './CurrencySwitcherStyles';
import Popover from '../../../components/popover/popover';
import { FormattedMessage } from 'react-intl';
import * as flagIcons from '../../../assets/icons/flags';
import { CURRENCY_MENU } from '../../site-navigation';

const FlagIcon:React.FC<{name:string}> = ({ name }) => {
  // @ts-ignore
  const TagName = flagIcons[name];
  return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};

// @ts-ignore
const LanguageMenu = ({ onClick }) => {
  return (
      <>
        {CURRENCY_MENU.map((item) => (
            <MenuItem onClick={onClick} key={item.id} value={item.id}>
          <span>
            <FlagIcon name={item.icon} />
          </span>
              <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
            </MenuItem>
        ))}
      </>
  );
};

const CurrencySwitcher: React.FC<{}> = () => {
  const languageChangeHandler = (e: { target: { value: any; }; }) => {

  };
  return (
      <Box>
        <Popover
            className="right"
            handler={
              <SelectedItem>
                <Flag>
                  <FlagIcon name={"USFlag"} />
                </Flag>
                <span>
              <FormattedMessage
                  id="en"
                  defaultMessage="English"
              />
            </span>
              </SelectedItem>
            }
            content={<LanguageMenu onClick={languageChangeHandler} />}
        />
      </Box>
  );
};

export default CurrencySwitcher;
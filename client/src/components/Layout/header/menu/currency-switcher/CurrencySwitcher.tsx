import React, {useContext} from 'react';
import { Box, SelectedItem, Flag, MenuItem } from './CurrencySwitcherStyles';
import Popover from '../../../popover/popover';
import * as flagIcons from '../../../../../assets/icons/flags';
import { CURRENCY_MENU } from '../../site-navigation';
import shopContext from "@/context/shop/shopContext";
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
                {item.defaultMessage}
            </MenuItem>
        ))}
      </>
  );
};

const CurrencySwitcher: React.FC<{}> = () => {
    const shop=useContext(shopContext)
    const {currency,setCurrency}=shop

    const languageChangeHandler = (e: { target: { value: any; }; }) => {
        const item=CURRENCY_MENU.filter(item=>item.id===e.target.value)
       setCurrency(item[0])
  };
  return (
      <Box>
        <Popover
            className="right"
            handler={
              <SelectedItem id={currency.id}>
                <Flag>
                  <FlagIcon name={currency.icon} />
                </Flag>
                <span>
                    {currency.defaultMessage}
            </span>
              </SelectedItem>
            }
            content={<LanguageMenu onClick={languageChangeHandler} />}
        />
      </Box>
  );
};

export default CurrencySwitcher;

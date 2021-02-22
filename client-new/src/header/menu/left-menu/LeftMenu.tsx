import React from 'react';
import Router, { useRouter } from 'next/router';
import Popover from '../../../components/popover/popover';
import Logo from '../../../logo/logo';
import { MenuDown } from '../../../assets/icons/MenuDown';
import {CATEGORY_MENU_ITEMS, GROCERY_PAGE} from '../../site-navigation';
import * as categoryMenuIcons from '../../../assets/icons/category-menu-icons';
import {
  MainMenu,
  MenuItem,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox,
} from './LeftMenuStyle';

const CategoryIcon:React.FC<{name:string}> = ({ name }) => {
  // @ts-ignore
    const TagName = categoryMenuIcons[name];
  return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};

const CategoryMenu = (props: any) => {
  const handleOnClick = (item: { id: string; href: string; defaultMessage: string; icon: string; dynamic: boolean; } | { id: string; defaultMessage: string; href: string; icon: string; dynamic?: undefined; }) => {
    props.onClick(item);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {CATEGORY_MENU_ITEMS.map((item) => (
        <MenuItem key={item.id} {...props} onClick={() => handleOnClick(item)}>
          <CategoryIcon name={item.icon} />
          {item.defaultMessage}
        </MenuItem>
      ))}
    </div>
  );
};

type Props = {
  logo: string;
};
interface ActiveMenu{
  id:string,
  href:string,
  defaultMessage: string,
  icon:string,
  dynamic?: boolean,
}

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = React.useState<ActiveMenu | null>(null);

  return (
      <LeftMenuBox>
        <Logo
            imageUrl={logo}
            alt={'Shop Logo'}
            onClick={() => setActiveMenu(CATEGORY_MENU_ITEMS[0])}
        />

        <MainMenu>
          <Popover
              className="right"
              handler={
                <SelectedItem>
              <span>
                {activeMenu &&
                <Icon>
                  <CategoryIcon name={activeMenu?.icon}/>
                </Icon>}
                {activeMenu ? <span>{activeMenu.defaultMessage}</span> : (
                    <span>
                  Shop by <br/>category
                </span>)}
              </span>
                  <Arrow>
                    <MenuDown/>
                  </Arrow>
                </SelectedItem>
              }
              content={<CategoryMenu onClick={setActiveMenu}/>}
          />
        </MainMenu>
      </LeftMenuBox>
  );
};

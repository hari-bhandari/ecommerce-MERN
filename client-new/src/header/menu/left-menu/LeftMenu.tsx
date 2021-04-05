import React from 'react';
import Router, { useRouter } from 'next/router';
import Popover from '../../../components/popover/popover';
import Logo from '../../../logo/logo';
import { MenuDown } from '../../../assets/icons/MenuDown';
import {CATEGORY_MENU_ITEMS, GROCERY_PAGE} from '../../site-navigation';
import * as categoryMenuIcons from '../../../assets/icons/category-menu-icons';
import useFetch from "@/hooks/useFetch";
import {
    MainMenu,
    MenuItem,
    SelectedItem,
    Icon,
    Arrow,
    LeftMenuBox,
} from './LeftMenuStyle';
import {API_BASE_URL} from "@/utils/config";

export const CategoryIcon:React.FC<{link:string,height:string,width:string}> = ({ link,height,width }) => {
    // @ts-ignore
    return link? <img src={link} alt="Icon" style={{width:width,height:height}}/> : null;
};

const CategoryMenu:React.FC<{onClick:any,isLoading:boolean,data:null| { data:[any] }}> = ({onClick,data,isLoading}) => {
    if(isLoading){
        return <div>
            Loading...
        </div>
    }
    const handleOnClick = (item: { id: string; href: string; defaultMessage: string; icon: string; dynamic: boolean; } | { id: string; defaultMessage: string; href: string; icon: string; dynamic?: undefined; }) => {
        onClick(item);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column',}}>
            {data.data.map((item) => (
                <MenuItem key={item.id}  onClick={() => handleOnClick(item)}>
                    <CategoryIcon link={item.image} height={"20px"} width={"20px"} />
                    {item.name}
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
    image?:string,
    icon:string,
    dynamic?: boolean,
}

export const LeftMenu: React.FC<Props> = ({ logo }) => {
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/category/`)


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
                    <CategoryIcon link={activeMenu?.image} height={"16px"} width={"16px"} />
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
                    content={<CategoryMenu onClick={setActiveMenu} data={data} isLoading={isLoading} />}
                />
            </MainMenu>
        </LeftMenuBox>
    );
};

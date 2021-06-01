import React from 'react';
import Popover from '../../../components/popover/popover';
import { MenuDown } from '../../../assets/icons/MenuDown';
import useFetch from "@/hooks/useFetch";
import {
    MainMenu,
    MenuItem,
    SelectedItem,
    Icon,
    Arrow,
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
            Search by Category
            {data.data.map((item) => (
                <MenuItem key={item.id}  onClick={() => handleOnClick(item)}>
                    <CategoryIcon link={item.image} height={"20px"} width={"20px"} />
                    {item.name}
                </MenuItem>
            ))}
        </div>
    );
};


interface ActiveMenu{
    id:string,
    href:string,
    defaultMessage: string,
    image?:string,
    icon:string,
    dynamic?: boolean,
}

const CategorySearch = ( ) => {
    // const router=useRouter()
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/category/`)


    const [activeMenu, setActiveMenu] = React.useState<ActiveMenu | null>(null);

    return (

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
                  search by <br/>category
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
    );
};
export default CategorySearch;
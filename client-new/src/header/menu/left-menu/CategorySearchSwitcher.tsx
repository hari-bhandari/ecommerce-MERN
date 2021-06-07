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
import {ActiveSearchFilter} from "@/components/search-box/search-box";

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
    const handleOnClick = (item: ActiveSearchFilter ) => {
        onClick(item);
        console.log(item)
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column',}}>
            {data.data.map((item) => (
                <MenuItem key={item.id}  onClick={() => handleOnClick({id:item.id,name:item.name,image:item.image})}>
                    <CategoryIcon link={item.image} height={"20px"} width={"20px"} />
                    {item.name}
                </MenuItem>
            ))}
        </div>
    );
};


interface Props{
    category:ActiveSearchFilter|null,
    setCategory:React.Dispatch<React.SetStateAction<any>>
}

const CategorySearch:React.FC<Props> = ( {category,setCategory}) => {
    // const router=useRouter()
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/category/`)



    return (

            <MainMenu>
                <Popover
                    className="right"
                    handler={
                        <SelectedItem>
              <span>
                {category &&
                <Icon>
                    <CategoryIcon link={category?.image} height={"16px"} width={"16px"} />
                </Icon>}
                  {category ? <span>{category?.name}</span> : (
                      <span>
                  Filter by Category
                </span>)}
              </span>
                            <Arrow>
                                <MenuDown/>
                            </Arrow>
                        </SelectedItem>
                    }
                    content={<CategoryMenu onClick={setCategory} data={data} isLoading={isLoading} />}
                />
            </MainMenu>
    );
};
export default CategorySearch;
import React, {useContext, useEffect} from 'react';
import Popover from '../../../popover/popover';
import {MenuDown} from '../../../../../assets/icons/MenuDown';
import {Arrow, Icon, MainMenu, MenuItem, SelectedItem,} from './LeftMenuStyle';
import {ActiveSearchFilter} from "@/components/Layout/search-box/search-box";
import shopContext from "@/context/shop/shopContext";
import {fetchData} from "@/pages/product/[slug]";
import {API_BASE_URL} from "@/utils/config";
import {useRouter} from 'next/router'

export const CategoryIcon: React.FC<{ link: any, height: string, width: string }> = ({link, height, width}) => {
    // @ts-ignore
    return link ? <img src={link} alt="Icon" style={{width: width, height: height}}/> : null;
};

const CategoryMenu: React.FC<{ onClick: any, isLoading: boolean, data: { data: [any] } }> = ({
                                                                                                 onClick,
                                                                                                 data,
                                                                                                 isLoading
                                                                                             }) => {
    if (isLoading) {
        return <div>
            Loading...
        </div>
    }
    const handleOnClick = (item: ActiveSearchFilter) => {

            onClick(item);

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
    return (<div></div>)
};


interface Props{
    category:ActiveSearchFilter|null,
    setCategory:React.Dispatch<React.SetStateAction<any>>
}

const CategorySearch:React.FC<Props> = ( {category,setCategory}) => {
    // const router=useRouter()
    const shop = useContext(shopContext)
    const {categoryLoading, categoryData, setCategoryData} = shop
    const fetchCategory = async () => {
        const data = await fetchData(`${API_BASE_URL}/api/v1/category/sub`)
        if (setCategoryData) {
            setCategoryData(data.data)
        }
    }
    const router = useRouter()
    useEffect(() => {

        if (router.isReady && router.pathname !== '/') {
            fetchCategory()
        }
    }, [router.isReady])


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
                content={<CategoryMenu onClick={setCategory} data={categoryData} isLoading={!!categoryLoading}/>}
                />
            </MainMenu>
    );
};
export default CategorySearch;
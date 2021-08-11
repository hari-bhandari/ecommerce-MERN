import React, {useContext, useEffect} from 'react';
import {useRouter} from 'next/router';
import Sticky from 'react-stickynode';
import Popover from '@/components/Layout/popover/popover';
import {ArrowDropDown} from '@/assets/icons/ArrowDropDown';
import {CategoryIcon} from '@/assets/icons/CategoryIcon';
import {SidebarLoader, SidebarMobileLoader,} from '@/components/Others/placeholder/placeholder';
import {CategoryWrapper, PopoverHandler, PopoverWrapper, SidebarWrapper, TreeWrapper,} from './CategorySidebar.style';
import {TreeMenu} from '@/components/Layout/tree-menu/tree-menu';
import shopContext from "@/context/shop/shopContext";
import {Scrollbar} from "@/components/Scrollbar";

type SidebarCategoryProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
interface selectedQuery{
    category:string[]|string;
    subCategory:string[]|string
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({deviceType: { mobile, tablet, desktop }}) => {
    const router = useRouter();
    const shop = useContext(shopContext)
    const {setCategoryData, categoryLoading, categoryData} = shop

    useEffect(() => {
        setCategoryData()
    }, [])

    const {pathname, query} = router;

    const selectedQueries: selectedQuery = {
        category: query.category,
        subCategory: query.subCategory
    };
    if (categoryLoading || !categoryData) {
        if (mobile || tablet) {
            return <SidebarMobileLoader/>
        }
        if(desktop){
        return <SidebarLoader/>;
        }

    }


    const onCategoryClick = (slug: string,parent:string) => {
        const { type, ...rest } = query;
        if (parent){
            if (type) {
                router.push(
                    {
                        pathname,
                        query: {category:parent,subCategory:slug },
                    },
                    {
                        pathname: `/${type}`,
                        query: {category:parent,subCategory:slug },
                    }
                );
            }
            else {
                router.push({
                    pathname,
                    query: {category:parent,subCategory:slug },
                });
            }}
        else{
            if (type) {
                if (parent){
                    router.push(
                        {
                            pathname,
                            query: {  category: slug },
                        },
                        {
                            pathname: `/${type}`,
                            query: {  category: slug },
                        }
                    );
                }

            } else {
                router.push({
                    pathname,
                    query: {  category: slug },
                });
            }
        }
    }

    return (
        <CategoryWrapper>
            <PopoverWrapper>
                <Popover
                    handler={
                        <PopoverHandler>
                            <div>
                                <CategoryIcon />
                                Select your Category
                            </div>
                            <div>
                                <ArrowDropDown />
                            </div>
                        </PopoverHandler>
                    }
                    className="category-popover"
                    content={
                        <>
                            <TreeMenu
                                data={categoryData}
                                onClick={onCategoryClick}
                                active={selectedQueries}
                            />
                        </>
                    }
                />
            </PopoverWrapper>

            <SidebarWrapper>
                <Sticky enabled={true} top={110} className={"leftSideBar"}>
                    <Scrollbar style={{height:'100vh'}}>
                        <TreeWrapper>
                            <TreeMenu
                                data={categoryData}
                                onClick={onCategoryClick}
                                active={selectedQueries}
                            />
                        </TreeWrapper>
                    </Scrollbar>
                </Sticky>
            </SidebarWrapper>
        </CategoryWrapper>
    );
};

export default SidebarCategory;

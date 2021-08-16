import React, {useContext} from 'react';
import StoreNavWrapper, {StoreNavLinks} from './store-nav.style';
import NavLink from "@/components/Layout/nav-link/nav-link";
import {CategoryMobile} from "@/components/Others/placeholder/placeholder";
import shopContext from "@/context/shop/shopContext";

type StoreNavProps = {
    className?: string;
    items?: any[];
};

const StoreNav: React.FunctionComponent<StoreNavProps> = ({
                                                              className
                                                          }) => {
    const shop = useContext(shopContext)
    const {categoryLoading, categoryData} = shop
    if (categoryLoading) {
        return <CategoryMobile/>
    }
    return (
        <StoreNavWrapper className={className}>
            <StoreNavLinks>
                {categoryData?.data?.map((item: any, index: number) => (
                    <NavLink
                        className="store-nav-link"
                        href={`/?category=${item.id}`}
                        label={item.name}
                        dynamic={true}
                        key={index}
                    />
                ))}
            </StoreNavLinks>
        </StoreNavWrapper>
    );


};

export default StoreNav;

import React from 'react';
import StoreNavWrapper, { StoreNavLinks } from './store-nav.style';
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import NavLink from "@/components/Layout/nav-link/nav-link";
import {CategoryMobile} from "@/components/Others/placeholder/placeholder";

type StoreNavProps = {
  className?: string;
  items?: any[];
};

const StoreNav: React.FunctionComponent<StoreNavProps> = ({
  className}) => {
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/category/`)
    if(isLoading){
            return <CategoryMobile/>
    }
    console.log(data)
    if(!isLoading){
        return (
            <StoreNavWrapper className={className}>
                <StoreNavLinks>
                    {data?.data.map((item, index) => (
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
    }



};

export default StoreNav;

import React from 'react';
import StoreNavWrapper, { StoreNavLinks } from './store-nav.style';
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import NavLink from "@/components/nav-link/nav-link";

type StoreNavProps = {
  className?: string;
  items?: any[];
};

const StoreNav: React.FunctionComponent<StoreNavProps> = ({
  className,
  items = [],
}) => {
    const [data, isLoading]=useFetch(`${API_BASE_URL}/api/v1/category/`)
    if(isLoading){
        return
    }
    if(!isLoading){
        return (
            <StoreNavWrapper className={className}>
                <StoreNavLinks>
                    {data?.data.map((item, index) => (
                        <NavLink
                            className="store-nav-link"
                            href={item.id}
                            label={item.name}
                            intlId={item.id}
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

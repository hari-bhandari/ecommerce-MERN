import React, {useState} from 'react';
import {Arrow, Icon, MenuItem, SelectedItem} from "@/components/Layout/header/menu/left-menu/LeftMenuStyle";
import {MenuDown} from "@/assets/icons/MenuDown";
import Popover from "@/components/Layout/popover/popover";export const filterTypes={
    ascendingPrice:"ascending",
    descendingPrice:"descending",
    default:'default',
    alphabetical:'alphabetical'

}
const FilterMenu: React.FC<{ onClick: any }> = ({onClick}) => {
    const handleOnClick = (item: { label: string ,type:string}) => {
        onClick(item);
    };
    const SortData = [
        {label: "Relevant",type:filterTypes.default},
        {label: "Highest price",type:filterTypes.descendingPrice},
        {label: "Lowest Price",type:filterTypes.ascendingPrice},
        {label: "Alphabetical Order",type:filterTypes.alphabetical}

    ]
    return (
        <div style={{display: 'flex', flexDirection: 'column',}}>
            {SortData.map((item) => (
                <MenuItem onClick={() => handleOnClick({label: item.label,type:item.type})}>
                    {/*<CategoryIcon link={item.image} height={"20px"} width={" />*/}
                    {item.label}
                </MenuItem>
            ))}
        </div>
    );
    return (<div></div>)
};

const FilterProducts: React.FC<{setCurrentFilter:any,filter:any}> = ({setCurrentFilter,filter}) => {
    return (
        <Popover
            className="right"
            handler={
                <SelectedItem>
              <span>

                  {!filter?'Filter products':filter.label}
                </span>
                    <Arrow>
                        <MenuDown/>
                    </Arrow>
                </SelectedItem>
            }
            content={<FilterMenu onClick={setCurrentFilter}/>}
        />
    );
};

export default FilterProducts;
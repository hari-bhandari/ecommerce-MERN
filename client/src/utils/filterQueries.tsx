import {filterTypes} from "@/components/FilterProducts";

export const filterProducts=(list:[any],type)=>{
    console.log(type)
    switch (type){
        case filterTypes.ascendingPrice:
            return list.sort((a, b) => (a.price - b.price))
        case filterTypes.descendingPrice:
            return list.sort((a, b) => (b.price-a.price))
        default:
            return list
    }
}

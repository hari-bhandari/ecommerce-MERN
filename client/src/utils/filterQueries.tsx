import {filterTypes} from "@/components/FilterProducts";

export const filterProducts=(list:[any],type)=>{
    console.log(type)
    switch (type){
        case filterTypes.ascendingPrice://sorts array by price --ascending
            return list.sort((a, b) => (a.price - b.price))
        case filterTypes.descendingPrice: //sorts array by price --descending
            return list.sort((a, b) => (b.price-a.price))
        case filterTypes.alphabetical: //sorts array by title
            return list.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
        default:
            return list

    }
}

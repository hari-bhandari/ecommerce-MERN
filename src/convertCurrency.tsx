const ConvertCurrency=(data,price,from='GBP',to)=>{
    let convertedPrice=0
    if(to==='GBP'){
        convertedPrice=price
    }
    else{
        const param='GBP/'+to
        const currencyData=data[param
            ]
        convertedPrice=price*currencyData.rate
    }

    return convertedPrice.toFixed(2)
}

export default ConvertCurrency;
const ConvertCurrency=(data,price,from='GBP',to)=>{
    const gbpUsdRate=1/data[from]

    const ValueInOtherCurrency=parseFloat(data[to])*gbpUsdRate
    const productValue:Number=ValueInOtherCurrency*price
    return productValue.toFixed(2)
}

export default ConvertCurrency;
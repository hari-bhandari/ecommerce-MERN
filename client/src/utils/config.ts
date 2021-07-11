export const API_BASE_URL=process.env.NEXT_PUBLIC_API_URL
export const transformCloudinaryImage=(url,width,height)=>{
    // https://res.cloudinary.com/wisecart/image/upload/w_150,h_300,c_fill/v1617441971/re3lf0beoxdrw4hdqbeb.png
    const[first,last]=url.split('/upload/')
    return first+`/upload/w_${width},h_${height},c_fill/`+last
}
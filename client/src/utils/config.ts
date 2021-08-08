export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const transformCloudinaryImage = (url, width, height, imgFormat) => {
    // https://res.cloudinary.com/wisecart/image/upload/w_150,h_300,c_fill/v1617441971/re3lf0beoxdrw4hdqbeb.png
    let [first, last] = url.split('/upload/') //splits the url at /upload/ and returns an array
    if (imgFormat) {
        const imageFormat = last.substring(last.lastIndexOf('.') + 1, last.length) || null
        // console.log({imageFormat,last})
        if (imageFormat) {
            last = last.replace(`.${imageFormat}`, imgFormat)

        }
    }
    return first + `/upload/w_${width},h_${height},c_fill/` + last
}
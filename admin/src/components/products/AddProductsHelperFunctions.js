import axios from "axios";
import Toast from "light-toast";
import {PUBLIC_URL} from "../../util/config";

export const UploadImagesToCloud = async (data) => {
    const UploadedImages = data.pictures?.filter(item => item.startsWith('http'))
    const pictures = data.files;
    if (pictures.length == 0) {
        return {
            success: true,
            images: [ ...UploadedImages]
        }
    }

    const formData = new FormData();
    pictures.forEach(image => {
        formData.append("image", image);
    })
    try {
        const res = await axios.post(`${PUBLIC_URL}/api/v1/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return {
            success: true,
            images: [...res.data.imgLinks, ...UploadedImages]
        }

    } catch (e) {
        Toast.hide()
        Toast.fail('Something went wrong. Please contact Hari Bhandari https://haribhandari.me')
        return {
            success: false,
            error: e
        }
    }

}
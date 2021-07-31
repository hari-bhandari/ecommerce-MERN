import axios from "axios";
import Toast from "light-toast";

export const UploadImagesToCloud=async (pictures)=>{
        if(pictures.length==0){
            return null
        }

        const formData = new FormData();
        pictures.forEach(image=>{
            formData.append("image", image);
        })
        try {
            const res = await axios.post(`/api/v1/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return {
                success:true,
                images:res.data.imgLinks
            }

        } catch (e) {
            Toast.hide()
            Toast.fail('Something went wrong. Please contact Hari Bhandari https://haribhandari.me')
            return {
                success:false,
                error:e
            }
        }

}
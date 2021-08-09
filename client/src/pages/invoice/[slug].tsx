import React from 'react';
import {SEO} from "@/components/Others/seo";
import axios from "axios";

const fetchData = async (url:string) => await axios.get(url)
    .then(res => ({
        error: false,
        data: res.data.data,
    }))
    .catch(() => ({
            error: true,
            data: null,
        }),
    );

const OrderReceivedPage = ({data}) => {
    // const router=useRouter()
    // const orderNumber=router.query.slug
    // if(!data.data){
    //     return(
    //         <>
    //             <SEO
    //                 title={`404 Not Found`}
    //                 description={`The page doesn't exist`}
    //             />
    //             <ProductNotFound/>
    //
    //         </>
    //     )
    // }
    return (
        <>
            <SEO title="Invoice- Wisecart" description="Invoice Details" />
            hi
            {/*<OrderReceived title={'Invoice for -  Order no. '+ orderNumber} data={data}/>*/}
        </>
    );
};
//
// export async function getServerSideProps({ params }) {
//     const data = await fetchData(`${API_BASE_URL}/api/v1/products/single/${params.slug}`).then(data=>data
//     ).catch((error)=>{
//         console.log(error)
//     })
//     return {
//         props: {
//             data,
//         },
//     };
// }
export default OrderReceivedPage;

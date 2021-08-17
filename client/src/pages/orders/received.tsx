import React from 'react';
import {SEO} from "@/components/Others/seo";

const OrderReceivedPage = () => {
        // const router = useRouter()
        // const [data, setData] = useState(JSON.parse(localStorage.getItem('completedOrder')))
        //
        // useEffect(() => {
        //
        //     if (data) {
        //         localStorage.removeItem('completedOrder')
        //     } else {
        //         router.push('/').then(e => {
        //             Toast.fail('Please view your orders from your profile', 4)
        //         })
        //     }
        //
        // })
        return (
            <>
                <SEO title="Invoice- Wisecart" description="Invoice Details"/>
                {/*{data ?*/}
                {/*    <OrderReceived data={data} title={"Invoice- Wisecart"}/>*/}
                {/*    : <b>Loading...</b>*/}
                {/*}*/}
            </>
        );
    }
;

export default OrderReceivedPage;

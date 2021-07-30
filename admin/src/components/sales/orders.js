import React, {Fragment, useEffect, useState} from 'react'
import Breadcrumb from '../common/breadcrumb';
import Datatable from '../common/datatable'
import useAxios from "axios-hooks";

import Image from "../common/image";

const TransformData = (data) => {
    console.log(data)
    if(!data){
        return []
    }

    return data.map(data => {
        const productImages = []
        data.orderItems.forEach(data => {
            productImages.push(data.thumbImage)
        })
        return ({
                order_id: data._id,
                image: <Image id="image1" data={productImages}/>,
                status: <span className="badge badge-secondary">{data.status}</span>,
                payment_method: data.paymentMethod,
                date: data.created,
                total: data.totalPrice
            })
        }
    )
}

const Orders = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        {url:'/api/v1/order/',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }}
    )
    const [transformedData,setTransformedData]=useState([])
    useEffect(()=>{
        setTransformedData(TransformData(data))
    },[data])

    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <Fragment>
            <Breadcrumb title="Orders" parent="Sales"/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Manage Order</h5>
                            </div>
                            <div className="card-body order-datatable">
                                <Datatable
                                    multiSelectOption={false}
                                    myData={transformedData}
                                    pageSize={10}
                                    pagination={true}
                                    order={true}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Orders;

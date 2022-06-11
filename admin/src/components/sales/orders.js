import React, {Fragment, useEffect, useState} from 'react'
import Breadcrumb from '../common/breadcrumb';
import Datatable from '../common/datatable'
import useAxios from "axios-hooks";

import Image from "../common/image";
import {ShowError, ShowSuccess} from "../../util/alert";
import axios from "axios";
import {PUBLIC_URL} from "../../util/config";

const TransformData = (data) => {
    if(!data){
        return []
    }
    return data.map(data => {
        const productImages = []
        data.orderItems.forEach(data => {
            productImages.push(data.thumbImage)
        })
        const className=()=>{
            if(data.status==='received'){
                return 'badge-danger'
            }
            if(data.status==='dispatched'){
                return 'badge-secondary'
            }
            if(data.status==='delivered'){
                return 'badge-success'
            }
            return 'badge-danger'

        }
        return ({
                order_id: data._id,
                image: <Image id="image1" data={productImages}/>,
                status: <span className={`badge ${className()}`}>{data.status}</span>,
                payment_method: data.paymentMethod,
                date: data.created,
                total: data.totalPrice.toFixed(2),
            })
        }
    )
}

const Orders = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        {
            url: `${PUBLIC_URL}/api/v1/order/`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    const [transformedData,setTransformedData]=useState([])
    useEffect(()=>{
        setTransformedData(TransformData(data))
    },[data])

    if (loading) {
        return <h4>Loading...</h4>
    }
    const updateToDelivered=async (id,status)=>{
        console.log(id,status.props.children)
        if(status.props.children==='delivered'){
            return ShowError('Product has already been marked as delivered')

        }
        if(!id){
            return ShowError('Something went wrong')
        }
        try {
            await axios.put(`${PUBLIC_URL}/api/v1/order/${id}/deliver`)
            ShowSuccess('Order  successfully updated to delivered with an ID of ' + id)
            refetch()

        }catch (e){
            ShowError('Something went wrong! Please try again later')
        }

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
                                    deliver={updateToDelivered}
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

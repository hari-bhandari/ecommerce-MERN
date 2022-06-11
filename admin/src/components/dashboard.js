import React, {Fragment} from 'react';
import Breadcrumb from './common/breadcrumb';
import {Box, MessageSquare, Navigation, Users} from 'react-feather';
import CountUp from 'react-countup';

import {Bar} from 'react-chartjs-2';
import {lineOptions,} from '../constants/chartData'
import {lineData} from './dashboardHelpers'
import useAxios from "axios-hooks";
import {PUBLIC_URL} from "../util/config";


const Dashboard = () => {
    const [{data: dashboardData, loading, error}, refetch] = useAxios(
        {
            url: `${PUBLIC_URL}/api/v1/products/dashboard`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    const [{ data:ordersData, loading:ordersLoading, error:ordersError }] = useAxios(
        {
            url: `${PUBLIC_URL}/v1/order/?limit=6`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    const [{ data:salesData, loading:salesLoading, error:salesError }] = useAxios(
        {
            url: `${PUBLIC_URL}/v1/order/getSalesForLastSevenDays`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    if(loading || ordersLoading){
        return <div>Loading...</div>

    }

    return (

        <Fragment>
            <Breadcrumb title="Dashboard" parent="Dashboard" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card o-hidden widget-cards">
                            <div className="bg-warning card-body">
                                <div className="media static-top-widget row">
                                    <div className="icons-widgets col-4">
                                        <div className="align-self-center text-center"><Navigation className="font-warning" /></div>
                                    </div>
                                    <div className="media-body col-8"><span className="m-0">Earnings</span>
                                        <h3 className="mb-0">£<CountUp className="counter" end={dashboardData.totalSales} /><small> This Month</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card o-hidden  widget-cards">
                            <div className="bg-secondary card-body">
                                <div className="media static-top-widget row">
                                    <div className="icons-widgets col-4">
                                        <div className="align-self-center text-center"><Box className="font-secondary" /></div>
                                    </div>
                                    <div className="media-body col-8"><span className="m-0">Products added </span>
                                        <h3 className="mb-0"> <CountUp className="counter" end={dashboardData.totalProductsAdded} /><small> This Month</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card o-hidden widget-cards">
                            <div className="bg-primary card-body">
                                <div className="media static-top-widget row">
                                    <div className="icons-widgets col-4">
                                        <div className="align-self-center text-center"><MessageSquare className="font-primary" /></div>
                                    </div>
                                    <div className="media-body col-8"><span className="m-0">Users added</span>
                                        <h3 className="mb-0"> <CountUp className="counter" end={dashboardData.totalUsersAdded} /><small> This Month</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 xl-50">
                        <div className="card o-hidden widget-cards">
                            <div className="bg-danger card-body">
                                <div className="media static-top-widget row">
                                    <div className="icons-widgets col-4">
                                        <div className="align-self-center text-center"><Users className="font-danger" /></div>
                                    </div>
                                    <div className="media-body col-8"><span className="m-0">Total Reviews Added</span>
                                        <h3 className="mb-0"> <CountUp className="counter" end={dashboardData.totalReviewsAdded} /><small> This Month</small></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 xl-100">
                        <div className="card">
                            <div className="card-header">
                                <h5>Sales by day</h5>
                            </div>
                            <div className="card-body">
                                <div className="market-chart">
                                    <Bar data={()=>lineData(salesData,salesLoading)} options={lineOptions} width={778} height={308} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 xl-100">
                        <div className="card">
                            <div className="card-header">
                                <h5>Latest Orders</h5>
                            </div>
                            <div className="card-body">
                                <div className="user-status table-responsive latest-order-table">
                                    <table className="table table-bordernone">
                                        <thead>
                                        <tr>
                                            <th scope="col">Order ID</th>
                                            <th scope="col">Order Total</th>
                                            <th scope="col">Payment Method</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {ordersData.map(order=>{
                                            return (
                                                <tr>
                                                    <td>{order._id}</td>
                                                    <td className="digits">£{order.totalPrice.toFixed(2)}</td>
                                                    <td className="font-danger">{order.paymentMethod}</td>
                                                    <td className="digits">{order.status}</td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                    <a href="/sales/orders" className="btn btn-primary">View All Orders</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
import React, { Component,Fragment } from 'react';
import Breadcrumb from './common/breadcrumb';
import { Navigation, Box, MessageSquare, Users, Briefcase, CreditCard, ShoppingCart, Calendar } from 'react-feather';
import CountUp from 'react-countup';
import { Chart } from "react-google-charts";

import {  Bar, Line } from 'react-chartjs-2';
import { 
    lineOptions,
    employeeData,
    employeeOptions 
} from '../constants/chartData'
import {lineData,doughnutOptions,pieOptions} from './dashboardHelpers'


export class Dashboard extends Component {

    render() {


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
                                            <h3 className="mb-0">$ <CountUp className="counter" end={6659} /><small> This Month</small></h3>
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
                                        <div className="media-body col-8"><span className="m-0">Products</span>
                                            <h3 className="mb-0">$ <CountUp className="counter" end={9856} /><small> This Month</small></h3>
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
                                        <div className="media-body col-8"><span className="m-0">Messages</span>
                                            <h3 className="mb-0">$ <CountUp className="counter" end={893} /><small> This Month</small></h3>
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
                                        <div className="media-body col-8"><span className="m-0">New Vendors</span>
                                            <h3 className="mb-0">$ <CountUp className="counter" end={45631} /><small> This Month</small></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Market Value</h5>
                                </div>
                                <div className="card-body">
                                    <div className="market-chart">
                                        <Bar data={lineData} options={lineOptions} width={778} height={308} />
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
                                                <tr>
                                                    <td>1</td>
                                                    <td className="digits">$120.00</td>
                                                    <td className="font-danger">Bank Transfers</td>
                                                    <td className="digits">On Way</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="digits">$90.00</td>
                                                    <td className="font-secondary">Ewallets</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td className="digits">$240.00</td>
                                                    <td className="font-warning">Cash</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td className="digits">$120.00</td>
                                                    <td className="font-primary">Direct Deposit</td>
                                                    <td className="digits">$6523</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td className="digits">$50.00</td>
                                                    <td className="font-primary">Bank Transfers</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="javascript:void(0)" className="btn btn-primary">View All Orders</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Sales Status</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-6 xl-100">
                                            <div className="order-graph">
                                                <h6>Orders By Location</h6>
                                                <div className="chart-block chart-vertical-center">
                                                    <Chart
                                                        width={"100%"}
                                                        height={'180px'}
                                                        chartType="PieChart"
                                                        loader={<div>Loading Chart</div>}
                                                        data={[
                                                            ['Task', 'Hours per Day'],
                                                            ['Saint Lucia', 300],
                                                            ['Kenya', 50],
                                                            ['Liberia', 100],
                                                        ]}
                                                        options={doughnutOptions}
                                                        legend_toggle
                                                    />
                                                </div>
                                                <div className="order-graph-bottom">
                                                    <div className="media">
                                                        <div className="order-color-primary"></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-0">Saint Lucia <span className="pull-right">$157</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <div className="order-color-secondary"></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-0">Kenya <span className="pull-right">$347</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <div className="order-color-danger"></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-0">Liberia<span className="pull-right">$468</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <div className="order-color-warning"></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-0">Christmas Island<span className="pull-right">$742</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="media">
                                                        <div className="order-color-success"></div>
                                                        <div className="media-body">
                                                            <h6 className="mb-0">Saint Helena <span className="pull-right">$647</span></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 xl-100">
                                            <div className="order-graph xl-space">
                                                <h6>Revenue for last month</h6>
                                                <div className="ct-4 flot-chart-container">
                                                    <Line data={employeeData} options={employeeOptions}  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}
// javascript:void(0)

export default Dashboard

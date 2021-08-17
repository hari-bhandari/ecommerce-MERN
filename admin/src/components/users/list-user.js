import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom'
import Breadcrumb from '../common/breadcrumb';
import Datatable from '../common/datatable'
import useAxios from 'axios-hooks'
import {Loader} from "react-feather";
import AuthContext from "../../context/auth/authContext";
import {ShowError, ShowSuccess} from "../../util/alert";
import axios from "axios";

const List_user = () => {
    const authContext = useContext(AuthContext);
    const {token}=authContext;
     const [{ data, loading, error }, refetch] = useAxios(
         {url:'/api/v1/users',
         headers:{
             'Authorization':`Bearer ${token}`
         }}
     )
     if(loading){
         return (
             <Loader/>
         )

     }
     if(error){
         return (
             <h2>Something went wrong</h2>
         )
     }
    const deleteUser=async (id)=>{
        if(!id){
            return ShowError('Something went wrong')
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            await axios.put(`/api/v1/users/${id}`)
            ShowSuccess('User successfully deleted with an ID of '+id)
            refetch()

        }catch (e){
            ShowError('Something went wrong! Please try again later')
        }

    }

        return (
            <Fragment>
                <Breadcrumb title="User List" parent="Users" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>User Details</h5>
                        </div>
                        <div className="card-body">
                            <div className="btn-popup pull-right">
                                <Link to="/users/create-user" className="btn btn-secondary">Create User</Link>
                            </div>
                            <div className="clearfix"></div>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                                <Datatable
                                    multiSelectOption={true}
                                    myData={data.data}
                                    pageSize={10}
                                    pagination={true}
                                    delete={deleteUser}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

export default List_user

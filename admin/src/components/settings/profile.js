import React, {Fragment, useContext} from 'react'
import Breadcrumb from '../common/breadcrumb';
import AuthContext from "../../context/auth/authContext";
import {useForm} from "react-hook-form";
import axios from "axios";
import Toast from "light-toast";

const Profile = () => {
    const authContext = useContext(AuthContext);
    const {user} = authContext;
    const {register, handleSubmit} = useForm({defaultValues:{firstName:user?.firstName,lastName:user?.lastName,email:user?.email}});
    const onSubmit = async data => {
        console.log(data)
        try {
            await axios.put(
                `/api/v1/auth/`,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            Toast.success('Successfully changed user data')


        } catch (error) {
            Toast.fail(error.response.data.error + ', Please try again')
        }
    }

    return (
        <Fragment>
            <Breadcrumb title="Profile" parent="Settings"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="card profile-card">
                            <div className="card-body ">
                                <div className="tab-pane fade show active">
                                    <h5 className="f-w-600 f-16">Profile</h5>
                                    <div className="table-responsive profile-table">
                                        <table className="table table-responsive">
                                            <tbody>
                                            <tr>
                                                <td>First Name:</td>
                                                <td>{user?.firstName}</td>
                                            </tr>
                                            <tr>
                                                <td>Last Name:</td>
                                                <td>{user?.lastName}</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>{user?.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Provider:</td>
                                                <td>{user?.provider}</td>
                                            </tr>
                                            <tr>
                                                <td>_id</td>
                                                <td>{user?._id}</td>
                                            </tr>
                                            <tr>
                                                <td>Role</td>
                                                <td>{user?.role}</td>
                                            </tr>
                                            <tr>
                                                <td>Date created</td>
                                                <td>{user?.created}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="card profile-card">
                            <div className="card-body">
                                <div className="tab-pane fade show active">
                                    <h5 className="f-w-600 f-16">Profile</h5>
                                    <div className="table-responsive profile-table">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name"
                                                       className="col-form-label">FirstName</label>
                                                <input type="text" className="form-control"
                                                        {...register("firstName")}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name"
                                                       className="col-form-label">LastName</label>
                                                <input type="text" className="form-control"
                                                        {...register("lastName")} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Email</label>
                                                <input type="text" className="form-control"
                                                       {...register("email")} />
                                            </div>
                                            <button className="submit" className={"btn btn-primary"}>Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Profile;



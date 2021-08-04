import React, {Fragment, useState} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";
import {ShowError, ShowSuccess} from "../../util/alert";
import Toast from "light-toast";

const Tabset_user = () => {

    const {register, handleSubmit, errors} = useForm();
    const [confirmed, setConfirmed] = useState(false)
    const onSubmit = async (data) => {
        if (data.role === 'admin') {
            if (window.confirm('Are you sure you want to create an admin who has all the administrator power')) {
                setConfirmed(true)
            }
        }
        if(data.role !=='admin'){
            setConfirmed(true)
        }
        if (confirmed) {
            Toast.loading('Creating user')
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            try {
                const res = await axios.post('/api/v1/users', data, config);
                Toast.hide()
                ShowSuccess(`You have successfully created a ${res.data.data.role} with the name of  ${res.data.data.name}`)
            } catch (e) {
                ShowError(e.response.data.error)
            }
        }

    }
    console.log(errors);
    return (
        <Fragment>

            <form className="needs-validation user-add" onSubmit={handleSubmit(onSubmit)}>
                <h4>Account Details</h4>
                <div className="form-group row">
                    <label className="col-xl-3 col-md-4"><span>*</span>First Name</label>
                    <input className="form-control col-xl-8 col-md-7" id="validationCustom0" name={"firstName"}
                           type="text" required={true}  {...register("firstName", {required: true})}/>
                </div>
                <div className="form-group row">
                    <label className="col-xl-3 col-md-4"><span>*</span>Last Name</label>
                    <input className="form-control col-xl-8 col-md-7" id="validationCustom0" name={"lastName"}
                           type="text" required={true}  {...register("lastName", {required: true})}/>
                </div>

                <div className="form-group row">
                    <label className="col-xl-3 col-md-4"><span>*</span> Email</label>
                    <input className="form-control col-xl-8 col-md-7" id="validationCustom2" type="email" name={"email"}
                           required={true}  {...register("email", {required: true})} />
                </div>
                <div className="form-group row">
                    <label className="col-xl-3 col-md-4"><span>*</span> Password</label>
                    <input className="form-control col-xl-8 col-md-7" id="validationCustom3" type="password"
                           name={"password"} required={true}  {...register("password", {required: true})}/>
                </div>
                <div className="form-group row">
                    <label className="col-xl-3 col-md-4"><span>*</span> User Type</label>
                    <div className="col-xl-9 col-sm-8">
                        <div className="form-group m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                            <label className="d-block">
                                <input className="radio_animated" id="edo-ani1" type="radio" name="role"
                                       value={'user'}  {...register("role", {required: true})} defaultChecked/>
                                User
                            </label>
                            <label className="d-block">
                                <input className="radio_animated" id="edo-ani2" type="radio" name="role"
                                       value={'vendor'}  {...register("role", {required: true})}/>
                                Vendor
                            </label>
                            <label className="d-block">
                                <input className="radio_animated" id="edo-ani2" type="radio" name="role"
                                       value={'admin'}  {...register("role", {required: true})}/>
                                Admin
                            </label>
                        </div>
                    </div>
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-primary">Add user</button>
                </div>
            </form>

        </Fragment>
    )
}

export default Tabset_user

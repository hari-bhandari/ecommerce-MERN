import React, {Fragment, useContext, useEffect} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {User} from 'react-feather';
import {useForm} from "react-hook-form";
import axios from "axios";
import AuthContext from "../../context/auth/authContext";
import {withRouter} from "react-router-dom";
import {ShowError} from "../../util/alert";
import Toast from "light-toast";

export const LoginTabset = ({history}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, setToken} = authContext;
    const { register, handleSubmit, errors } = useForm();
    useEffect(()=>{
        if(isAuthenticated){
            history.push('/dashboard')
        }
    },[isAuthenticated])

    const onSubmit = async (data) =>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            Toast.loading('Signing you in...')
            const res = await axios.post('/api/v1/auth/login', data, config);
            Toast.hide()
            if(res.data.user.role!=='admin'){
                ShowError(`Only admin can access this page`)
            }
            if (!res.data.token){
                ShowError(`Something went wrong`)
            }
            setToken(res.data.token)

        }catch (e){
            ShowError(e.response.data.error)

        }
    }
    return (
        <div>
            <Fragment>
                <Tabs>
                    <TabList className="nav nav-tabs tab-coupon" >
                        <Tab className="nav-link" ><User />Admin Login</Tab>
                    </TabList>

                    <TabPanel>
                        <form className="form-horizontal auth-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input required="" name="email" type="email" className="form-control" placeholder="Username" id="exampleInputEmail1"  {...register("email", { required: true })}/>
                            </div>
                            <div className="form-group">
                                <input required="" name="password" type="password" className="form-control" placeholder="Password"  {...register("password", { required: true })}/>
                            </div>
                            <div className="form-button">
                                <button className="btn btn-primary" type="submit" >Login</button>
                            </div>
                        </form>
                    </TabPanel>
                </Tabs>
            </Fragment>
        </div>)
}


export default withRouter(LoginTabset)


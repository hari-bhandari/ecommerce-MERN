import React, {useState, useContext, useEffect} from 'react';
import AuthContext from "../../context/auth/authContext"
import AlertContext from '../../context/alert/alertContext';
import background from './img/background.svg'
import './login.css'

const Login = (props) => {
    const [login,setLogin]=useState({email:'',password:''})



    const authContext=useContext(AuthContext);
    const {getUserLoggedIn,isAuthenticated,loadUser}=authContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const {email,password}=login

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            getUserLoggedIn({
                email,
                password
            });
        }
    };
    const onChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        loadUser();
        if(isAuthenticated){
            props.history.push('/');
        }

    },[isAuthenticated,props.history])


    return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt">
                            <img src={background} alt="IMG"/>
                        </div>

                        <form className="login100-form validate-form" onSubmit={onSubmit}>
					<span className="login100-form-title">
						Member Login
					</span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" onChange={onChange}/>
                                    <span className="focus-input100" ></span>
                                    <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" placeholder="Password" onChange={onChange}/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
							            <i className="fa fa-lock" aria-hidden="true"/>
						</span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>


                            <div className="text-center p-t-136">
                                <a className="txt2" href="#">
                                    Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;
import React, {useContext, useState} from 'react';
import './login.css'
import signup from './img/signup.svg'
import AuthContext from '../../context/auth/authContext';

const Signup = () => {
    const authContext = useContext(AuthContext);
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''})
    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const { register, error, clearErrors, isAuthenticated } = authContext;
    const{name,email,password,password2}=user
    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
                return 0
            } else if (password !== password2) {
                return 0
        } else {
            register({
                name,
                email,
                password
            });
        }
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt">
                        <img src={signup} alt="IMG"/>
                    </div>
                    <form className="login100-form validate-form">
					<span className="login100-form-title">
						Sign up to access amazing deals
					</span>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="name" placeholder="Name" onChange={onChange}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="email" name="email" placeholder="Email"  onChange={onChange}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" placeholder="Password"  onChange={onChange}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password2" placeholder=" Confirm Password"  onChange={onChange}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" onClick={onSubmit}>
                                Signup
                            </button>
                        </div>
                        <div className="text-center p-t-136">
                            <a className="txt2" href="/login">
                                Login
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;

import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"
import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";
const FeaturedPage = () => {
    const[item,setItem]=useState(null)

    const authContext=useContext(AuthContext);
    const {isAuthenticated,addToCart,getCartSize}=authContext;
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const addToCartOnClick=()=>{
        if(!isAuthenticated){
            setAlert('Please login in or signup to add item to the cart',"danger")
        }
        else{
            addToCart(item._id)
            getCartSize()
        }

    }
    const getItem=async ()=>{
        const res = await axios.get(`/api/items/apple-watch-series-4`);
        setItem(res.data.data)
    }

    useEffect(()=>{
        getItem()
    },[])

    if(!item){
        return (
            <div></div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="d-block w-100 FeaturedPage--img" src={`https://we-shop.herokuapp.com/uploads/${item.images}`} alt="First slide"/>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <h3>{item.productName}</h3>
                    </div>
                    <div className="row">
                        <h4><i className="fa fa-inr" aria-hidden="true"/> Price</h4>
                        <h3>
                            <del>399</del>
                        </h3>
                        <h2 className="text-success">50% off {item.price}</h2>
                    </div>
                    <div className="row">
                        <h3 className="text-warning"><i className="fa fa-star" aria-hidden="true"/><i className="fa fa-star" aria-hidden="true"/><i className="fa fa-star" aria-hidden="true"/><i className="fa fa-star" aria-hidden="true"/><i className="fa fa-star" aria-hidden="true"/></h3>
                        <h5 className="ml-2">  1200 star rating and 250 reviews</h5>
                    </div>
                    <p style={{fontSize:"18px"}}>{item.description}</p>
                    <div className="row mt-4">
                        <h3 className="text-info"><i className="fa fa-map-marker" aria-hidden="true"></i></h3>
                        <p style={{fontSize:"20px"}} className="ml-2">  Delivery within 5 days | <span className="text-success">FREE</span></p>
                    </div>


                    <div className="row mt-4">
                        <h4>Seller:</h4>
                        <p style={{fontSize:"18px"}}>Hari Bhandari</p>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg btn-block mt-4" onClick={addToCartOnClick}>Add to Cart</button>


                </div>
            </div>
        </div>

    );
};

export default FeaturedPage;
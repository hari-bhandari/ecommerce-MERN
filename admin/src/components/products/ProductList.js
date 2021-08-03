import React, { Fragment} from 'react'
import Breadcrumb from '../common/breadcrumb';
import {Edit, Trash2} from 'react-feather'
import useAxios from "axios-hooks";
import {Link} from "react-router-dom";
import axios from "axios";
import {ShowError, ShowSuccess} from "../../util/alert";
import StarRating from "../StarRating";


const Product_list = () => {
    const [{data, loading, error}, refetch] = useAxios(
        '/api/v1/products'
    )

    if(loading){
        return (
            <div>Loading...</div>
        )
    }
    const deleteProduct=async (id)=>{
        if(!id){
            return ShowError('Something went wrong')
        }
        try {
            await axios.delete(`/api/v1/products/${id}`)
            ShowSuccess('Product successfully deleted with an ID of '+id)
            refetch()

        }catch (e){
            ShowError('Something went wrong! Please try again later')
        }

    }
    return (
        <Fragment>
            <Breadcrumb title="Product List" parent="Physical"/>
            <div className="container-fluid">
                <div className="row products-admin ratio_asos">
                    {
                        data.data.map((myData, i) => {
                            return (
                                <div className="col-xl-3 col-sm-6" key={i}>
                                    <div className="card">
                                        <div className="products-admin">
                                            <div className="card-body product-box">
                                                <div className="img-wrapper" >
                                                    <div className="lable-block">
                                                        <span className="lable3">New</span>
                                                    </div>
                                                    <div className="front">
                                                        <a className="bg-size" ><img
                                                            className="img-fluid blur-up bg-img lazyloaded" style={{maxHeight:'280px'}}
                                                            src={myData.thumbImage}/></a>
                                                        <div className="product-hover">
                                                            <ul>
                                                                <li>

                                                                    <Link to={{
                                                                        pathname: "/products/add-product",
                                                                        state: myData
                                                                    }}>
                                                                    <button className="btn" type="button">
                                                                        <Edit className="editBtn"/>
                                                                    </button>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <button className="btn" type="button" onClick={()=>{
                                                                        deleteProduct(myData._id)
                                                                    }}>
                                                                        <Trash2 className="deleteBtn"/>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="rating">
                                                        <StarRating rating={myData.rating} size={22}/>


                                                    </div>
                                                    <a><h6>{myData.name}</h6></a>
                                                    <h4>{myData.price}
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }

                        </div>
                        </div>
                        </Fragment>
                        )
                    }

                    export default Product_list

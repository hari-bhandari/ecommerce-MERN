import React, {useContext} from 'react';
import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";

const NewlyReleasedItem = ({photo,title,price,description,id}) => {
    const authContext=useContext(AuthContext);
    const {isAuthenticated,addToCart,getCartSize}=authContext;
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;
    const addToCartOnClick=()=>{
        if(!isAuthenticated){
            setAlert('Please login in or signup to add item to the cart',"danger")
        }
        else{
            addToCart(id)
            getCartSize()

        }

    }
    return (
        <div className="col-md-3 product-grid">
            <div className="image">
                <a href="#">
                    <img src={`https://we-shop.herokuapp.com/uploads/${photo}`} className="w-100" height={'300px'}/>
                    <div className="overlay">
                        <div className="detail">{description.slice(0,100)}</div>
                    </div>
                </a>
            </div>
            <h5 className="text-center">{title}</h5>
            <h5 className="text-center">Price: £{price}</h5>
            <a onClick={addToCartOnClick} className="btn buy">Add To Cart</a>
        </div>
    );
};
export default NewlyReleasedItem;
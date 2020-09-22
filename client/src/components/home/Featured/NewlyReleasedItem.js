import React from 'react';

const NewlyReleasedItem = ({photo,title,price}) => {
    return (
        <div className="col-md-3 product-grid">
            <div className="image">
                <a href="#">
                    <img src={`http://localhost:5000/uploads/${photo}`} className="w-100" height={'300px'}/>
                    <div className="overlay">
                        <div className="detail">View Details</div>
                    </div>
                </a>
            </div>
            <h5 className="text-center">{title}</h5>
            <h5 className="text-center">Price: ${price}</h5>
            <a href="#" className="btn buy">Add To Cart</a>
        </div>
    );
};

export default NewlyReleasedItem;
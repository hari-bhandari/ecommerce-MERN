import React from 'react';

const NewlyReleasedItem = () => {
    return (
        <div className="col-md-4 product-grid">
            <div className="image">
                <a href="#">
                    <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100"/>
                    <div className="overlay">
                        <div className="detail">View Details</div>
                    </div>
                </a>
            </div>
            <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
            <h5 className="text-center">Price: $550.00</h5>
            <a href="#" className="btn buy">BUY</a>
        </div>
    );
};

export default NewlyReleasedItem;
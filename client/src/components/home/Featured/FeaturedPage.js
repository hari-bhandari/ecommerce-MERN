import React from 'react';

const FeaturedPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active"><img className="d-block w-100 FeaturedPage--img" src="https://shop.ee.co.uk/content/dam/everything-everywhere/images/SHOP/affiliates/apple/Watch_S5_40mm_Gold+PinkBand_affilliates_800x800.png" alt="First slide"/></div>
                            <div className="carousel-item"><img className="d-block w-100 FeaturedPage--img" src="https://shop.ee.co.uk/content/dam/everything-everywhere/images/SHOP/affiliates/apple/Watch_S5_40mm_Gold+PinkBand_affilliates_800x800.png" alt="Second slide"/></div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a></div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <h2>Party Flared Sleeve Top</h2>
                    </div>
                    <div className="row">
                        <h1><i className="fa fa-inr" aria-hidden="true"></i> 599</h1>
                        &nbsp; &nbsp;
                        <h3>
                            <del>799</del>
                        </h3>
                        &nbsp; &nbsp;
                        <h2 className="text-success">30% off</h2>
                    </div>
                    <div className="row">
                        <h3 className="text-warning"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i><i className="fa fa-star-o" aria-hidden="true"></i></h3>
                        &nbsp; &nbsp;
                        <h5>1200 star rating and 250 reviews</h5>
                    </div>

                    <div className="row mt-4">
                        <h3 className="text-info"><i className="fa fa-map-marker" aria-hidden="true"></i></h3>
                        <p style={{fontSize:"20px"}}> &nbsp; Delivery by23 Jul, Tuesday | &nbsp; <span className="text-success">FREE</span></p>
                    </div>
                    <div className="row mt-4">
                        <h4>Size: &nbsp; &nbsp;</h4>
                        <div className="dropdown show"><a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Select sizes </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink"><a className="dropdown-item" href="#">small</a> <a className="dropdown-item" href="#">meduam </a> <a className="dropdown-item" href="#">large</a></div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <h4>Seller: &nbsp; &nbsp;</h4>
                        <p style={{fontSize:"18px"}}>G.M Garments </p>
                    </div>


                </div>
            </div>
        </div>

);
};

export default FeaturedPage;
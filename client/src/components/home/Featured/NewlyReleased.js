import React from 'react';
import './style.css'
import NewlyReleasedItem from "./NewlyReleasedItem";

const NewlyReleased = () => {
    return (

        <div className="container">
            < h1
                className="text-center"> Newly Released Items </h1>

                        <div className="row">
                            <NewlyReleasedItem/>
                            <NewlyReleasedItem/>
                            <NewlyReleasedItem/>

                        </div>



        </div>
    );
};

export default NewlyReleased;
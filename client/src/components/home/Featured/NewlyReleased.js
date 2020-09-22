import React from 'react';
import './style.css'
import NewlyReleasedItem from "./NewlyReleasedItem";

const NewlyReleased = ({title,data}) => {
    return (

        <div className="container">
            < h1
                className="text-center">{title}</h1>

                        <div className="row">
                            {data&&data.map((product)=>(
                                <NewlyReleasedItem/>
                            ))}
                        </div>



        </div>
    );
};

export default NewlyReleased;
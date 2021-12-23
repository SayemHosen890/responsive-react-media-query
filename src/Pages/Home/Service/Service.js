import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, price, description, image } = props.service;
    return (
        <div className="service pb-3">
            <img className="py-2" src={image} alt="" />
            <h2>{name}</h2>
            <p className="text-white">price : {price}</p>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">{name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;
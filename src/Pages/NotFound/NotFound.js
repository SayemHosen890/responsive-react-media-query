import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://image.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1880.jpg" alt="" />
            <br />
            <Link to="/"><button className="btn-primary">Back Home</button></Link>
        </div>
    );
};

export default NotFound;
import React from 'react';

const Expert = ({ expert }) => {
    const { image, name, expertise } = expert;
    return (
        <div className="col-lg-6 col-md-6 col-12">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h3>Expertise : {expertise}</h3>
        </div>
    );
};

export default Expert;
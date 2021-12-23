import React from 'react';
import Expert from '../SingleExpert/Expert';

const experts = [
    {
        "id": 1,
        "name": "Replace Tire",

        "description": "habijabi",
        "image": "https://i.ibb.co/kgHCjsB/female-mechanic-holding-spare-parts-car-1170-1615.jpg"
    },
    {
        "id": 2,
        "name": "Replace Tire",

        "expertise": "habijabi",
        "image": "https://i.ibb.co/kgHCjsB/female-mechanic-holding-spare-parts-car-1170-1615.jpg"
    },
    {
        "id": 3,
        "name": "Replace Tire",

        "expertise": "habijabi",
        "image": "https://i.ibb.co/kgHCjsB/female-mechanic-holding-spare-parts-car-1170-1615.jpg"
    },
    {
        "id": 4,
        "name": "Replace Tire",

        "expertise": "habijabi",
        "image": "https://i.ibb.co/kgHCjsB/female-mechanic-holding-spare-parts-car-1170-1615.jpg"
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container mt-5">
            <h2 className="text-primary">Our Expert</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
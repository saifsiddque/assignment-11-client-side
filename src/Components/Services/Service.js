import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    return (
        <div className='text-left'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.serviceName}</h2>
                <div className='text-white'>Price: ${service.price}</div>

                <p>{service.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;
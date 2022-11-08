import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const service = useLoaderData()
    console.log(service);
    return (
        <div>
            <h2 className='text-3xl border-b-4 p-4 mb-4'>
            {service.serviceName}
            </h2>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.serviceName} || Price:{service.price}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
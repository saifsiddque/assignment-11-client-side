import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://server-side-saifsiddque.vercel.app/services')
        .then(res=> res.json())
        .then(data=>  setServices(data))
        
    });
    return (
        <div className=' text-center'>
            <h2 className='text-3xl border-b-4 p-4 mb-4'>
                Services
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-5'>
                {
                    services.slice(0, 3).map(service => <Service key={service._id} service={service}></Service> )
                }
            </div>
            <Link to={'/services'}><button className="btn btn-primary " >All Services</button></Link>
            
        </div>
    );
};

export default Services;
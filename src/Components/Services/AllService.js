import React, { useEffect, useState } from 'react';
import Service from './Service';

const AllService = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://server-side-saifsiddque.vercel.app/services')
        .then(res=> res.json())
        .then(data=>  setServices(data))
        
    });
    if(services.length == 0){
        return <button className="btn loading my-40 ml-28">loading</button>
    }
    return (
        <div className=' text-center'>
            <h2 className='text-3xl border-b-4 p-4 mb-4'>
                Services
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service> )
                }
            </div>
            
        </div>
    );
};

export default AllService;
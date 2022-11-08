import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({})
    const handleAddUser = (event) =>{
        event.preventDefault();
        console.log(service);
        fetch('https://server-side-chi.vercel.app/services', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(service)
        } )
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Service Added Successfully ')
                event.target.reset()

            }
        })
    }
    const handleInputBlur = (event) =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...service};
        newService[field] = value;
        setService(newService) 
    }
    return (
        <div>
            <form onSubmit={handleAddUser} className='p-5 m-5 bg-gray-600'>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Name</label>
                    <input onBlur={handleInputBlur} name='serviceName' type="text"  className="bg-gray-400 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                    <input onBlur={handleInputBlur} name='price' type="text"  className="bg-gray-400 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                    <input onBlur={handleInputBlur} name='img' type="text"  className="bg-gray-400 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <textarea onBlur={handleInputBlur} name='description' class="textarea textarea-bordered h-24 bg-gray-400 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Bio"></textarea>
                </div>
                <button type="submit" className=" text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center">POST</button>
            </form>
        </div>
    );
};

export default AddService;
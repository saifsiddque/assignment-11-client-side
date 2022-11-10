import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpadeReview = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview)
    const handleUpdateUser = (event) =>{
        event.preventDefault();
        console.log(review);
        fetch(`https://server-side-saifsiddque.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',

            },
            body: JSON.stringify(review)
        } )
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('User Updated ')
                console.log(data);
                event.target.reset()

            }
        })
    }
    const handleInputChange = (event) =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...review};
        newUser[field] = value;
        setReview(newUser) 
    }

    return (
        <div>
            <form onSubmit={handleUpdateUser} className='p-5 m-5 bg-gray-600'>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add Review</label>
                    <textarea onChange={handleInputChange}  name='message' class="textarea textarea-bordered h-24 bg-gray-400 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Bio"></textarea>
                </div>
                <button type="submit"  className=" text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center">POST</button>
                </form>
        </div>
    );
};

export default UpadeReview;
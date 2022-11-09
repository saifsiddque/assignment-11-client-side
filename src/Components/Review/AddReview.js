import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useTitel from '../../kooks/useTitel';
import Service from '../Services/Service';
import Reviews from './Reviews';

const AddReview = ({service}) => {
    console.log(service);
    const {user} = useContext(AuthContext);
   

    useTitel('Service')
    const handleAdd = (event) =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const review = {
            service : service._id,
            img : service.img,
            serviceName : service.serviceName,
            email : user.email,
            message: message,
            displayName : user.displayName,
            photoURL : user.photoURL
        }
        console.log(review)
        fetch('http://localhost:5000/reviews', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        } )
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Service Added Successfully ')
                event.target.reset()

            }
        })
    }
    function refreshPage() {
        window.location.reload(false);
      }

  
    return (
        <div>
            {
                user?.uid? <>
                <form onSubmit={handleAdd} className='p-5 m-5 bg-gray-600'>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add Review</label>
                    <textarea  name='message' class="textarea textarea-bordered h-24 bg-gray-400 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Bio"></textarea>
                </div>
                <button type="submit" onClick={refreshPage} className=" text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center">POST</button>
                </form>
                
                </> : <>
                <h3>Please <Link to={'/login'}><button className="btn btn-link m-0 p-0">LogIn</button></Link> For Add Review </h3>
                
                </>
            }
            
            
            <Reviews service={service}></Reviews>

        </div>
    );
};

export default AddReview;
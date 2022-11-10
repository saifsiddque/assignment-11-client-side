import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = ({rev }) => {



    const handleDelete = user =>{
        const notify = () => toast("'Review Deleted Successfully.'");
        const agree = window.confirm(`Are you sure , you want to delete ${user.name}`)
        if(agree){
            // console.log('Deleting user with id:', user._id)
            fetch(`https://server-side-saifsiddque.vercel.app/reviews/${user._id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    refreshPage(true)
                    
                }
            })
            }notify()
            
    }
    function refreshPage() {
        window.location.reload(false);
      }
      
    
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={rev.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{rev.serviceName}</div>
                    </div>
                </div>
            </td>
            <td>{rev.message}</td>
            <td>
                <Link to={`/reviews/${rev._id}`}><button  className="btn btn-ghost btn-xs border border-white mr-2">Edit</button></Link>
                <button onClick={() => handleDelete(rev)} className="btn btn-ghost btn-xs border border-white">Delete</button>
            </td>
            <ToastContainer />
        </tr>
    );
};

export default Review;
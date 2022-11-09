import { linkWithCredential } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Review from './Review';

const Reviews = ({service}) => {
    const [review, setReview] = useState([]);
    const {user} = useContext(AuthContext);

    console.log(service);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?service=${service?._id}`)
        .then(res => res.json())
        .then(data=> setReview(data))
    },[service?._id])
    return (
        <div>
            <h2 className='text-3xl border-b-4 p-4 mb-4'>
                Reviews
            </h2>
            {
                review.map( rev => <>
                <div className="card w-full bg-base-100 shadow-xl border border-white">
                    <div className="card-body">
                        <h2 className="card-title">{rev?.displayName} 
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={rev?.photoURL} />
                            </div>
                        </div>
                        </h2>
                        <p>{rev.message}</p>
                    </div>
                </div>
                </>)
            }
        </div>
    );
};

export default Reviews;
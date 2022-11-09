import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import useTitel from '../../kooks/useTitel';
import Review from './Review';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> setReview(data))
    },[user?.email])
    useTitel('My Reviews')
    console.log(review)
    return (
        <div>
            {review.length >0 ? <>
                <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(rev=> <Review key={rev._id} rev={rev}></Review> )
                            // review.length
                        }
                    
                    
                    </tbody>
                </table>
                </div>
            </> : <><h2 className='text-3xl text-center py-60'>No reviews were added</h2></>}
           
        </div>
    );
};

export default MyReviews;
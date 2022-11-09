import React from 'react';

const Review = ({rev}) => {
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
                <button className="btn btn-ghost btn-xs border border-white mr-2">Edit</button>
                <button className="btn btn-ghost btn-xs border border-white">Delete</button>
            </td>
        </tr>
    );
};

export default Review;
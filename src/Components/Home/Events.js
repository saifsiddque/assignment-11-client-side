import React from 'react';

const Events = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl border-b-4 p-4 mb-4'>
            Achievements
            </h2>
            <p>
                I'm a wading planer , who have a long experience of event management <br />
                I have done so much events like official , traditional , cultural and also family events . Explore this side you can have clarity.    
            </p>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title">Visits</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                
                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                
                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                
            </div>
        </div>
    );
};

export default Events;
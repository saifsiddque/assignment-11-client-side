import React from 'react';

const AboutMe = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl border-b-4 p-4 mb-4'>
                About Me
            </h2>
            <p>
                I'm a wading planer , who have a long experience of event management <br />
                I have done so much events like official , traditional , cultural and also family events . Explore this side you can have clarity.    
            </p> <br />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://img.freepik.com/free-psd/vertical-poster-template-social-corporate-event-planning_23-2148992351.jpg?w=740&t=st=1667954541~exp=1667955141~hmac=2a3a93bdb03f579b2b5a433bdfe9031455fbc03467632a76044401a87a7ced3d" className="max-w-sm rounded-lg shadow-2xl w-3/6 " />
                    <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Saif Siddique</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Know More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
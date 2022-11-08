import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Login = () => {
    const [error, seterror ] = useState('')
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result =>{
            const user = result.user
            console.log(user)
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            seterror(error.message)

        })


    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})

        })
        .catch(error =>{
            console.error(error)
        })
    }
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover" to={'/register'}>Create a New Account?</Link>
                            </label>
                            <p className=' text-left text-red-500'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="btn-group btn-group-vertical">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mb-2">  Login With Google</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
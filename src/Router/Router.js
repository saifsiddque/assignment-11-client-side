import Home from "../Components/Home/Home";
import Login from "../Components/Login/LogIn";
import Main from "../Components/Main/Main";
import Register from "../Components/Register/Register";
import AddService from "../Components/Services/AddService";
import AllService from "../Components/Services/AllService";
import ServiceDetail from "../Components/Services/ServiceDetail";
import PrivetRout from './PrivetRout';
import Blogs from '../Components/Blogs/Blogs'


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/addService',
                element: <PrivetRout>
                <AddService></AddService>
              </PrivetRout>
            },
            {
                path: '/services',
                element: <AllService></AllService>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader:({params}) =>{
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            }
        ]

    }
]);

export default router;
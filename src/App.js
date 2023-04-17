import React from "react";
import ReactDOM  from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";
import About from './components/About';
import Footer from './components/Footer'; 
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import Login from './components/Login';
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from './components/ProfileClass';

const AppLayout = () =>{
    return(
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const routes = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/profile',
                element:<ProfileClass />
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />)
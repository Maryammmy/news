import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import MisrNews from './Components/MisrNews/MisrNews';
import Policy from './Components/Policy/Policy';
import Sports from './Components/Sports/Sports';
import Economics from './Components/Economics/Economics';
import Culture from './Components/Culture/Culture';
import Events from './Components/Events/Events';
import Provinces from './Components/Provinces/Provinces';
import Userlayout from './Components/Userlayout/Userlayout';

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout/>,
     
      children: [
        { index: true, element:<Home/> },
        { path: "home", element: <Home/> },
        { path: "misrnews", element: <MisrNews/> },
        { path: "policy", element: <Policy/> },
        { path: "sports", element: <Sports/> },
        { path: "economics", element: <Economics/> },
        { path: "culture", element: <Culture/> },
        { path: "events", element: <Events/> },
        { path: "provinces", element: <Provinces/> },


       
      ],
    },
  
  ]);
  return (
    <div>
      <RouterProvider router={routes}/>
      
    </div>
  )
}


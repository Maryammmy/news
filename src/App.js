import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cars from './Components/Cars/Cars';
import Trade from './Components/Trade/Trade';
import Realstate from './Components/Realstate/Realstate';
import Media from './Components/Media/Media';
import Services from './Components/Services/Services';
import Userlayout from './Components/Userlayout/Userlayout';
import Context from './Components/Context/Context';
import Title from './Components/Title/Title';
import Firebase from './Firebase/Firebase';


export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout/>,
     
      children: [
        { index:true, element:<Home/> },
        { path: "عام", element: <Home /> },
        { path: "السيارات", element: <Cars /> },
        { path: "صناعةوتجارة", element: <Trade/> },
        { path: "عقارات", element: <Realstate /> },
        { path: "مالتي ميديا", element: <Media /> },
        { path: "خدمات", element: <Services/> },
        
        { path: "title", element: <Title /> },
      ],
    
    },
  
  ]);
  return (
    <div>
      <Context>
      <RouterProvider router={routes}/>
      </Context>
      
    </div>
  )
}


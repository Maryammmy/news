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
import Context from './Components/Context/Context';
import Title from './Components/Title/Title';

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout/>,
     
      _children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "misrnews", element: <MisrNews /> },
        { path: "policy", element: <Policy /> },
        { path: "sports", element: <Sports /> },
        { path: "economics", element: <Economics /> },
        { path: "culture", element: <Culture /> },
        { path: "events", element: <Events /> },
        { path: "provinces", element: <Provinces /> },
        { path: "title", element: <Title /> },
      ],
      get children() {
        return this._children;
      },
      set children(value) {
        this._children = value;
      },
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


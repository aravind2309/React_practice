import React, { Children, lazy, Suspense, useEffect } from "react"; 
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import UserContext from "./components/UserContext";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./appStore";

const Grocery=lazy(()=> import("./components/Grocery"))
const AppLayout=()=>{
  const[userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:"Aravind"
    };
    setUserName(data.name);
  },[])
  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      }
      ,{
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:rid",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
      
    ],
    errorElement:<Error/>
  }
  
]

);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
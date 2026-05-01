import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home";
import FriendDetails from "../page/FriendDetails";
import Timeline from "../page/Timeline";
import Stats from "../page/Stats";
import Error from "../components/error/Error";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children:[
      {
        path: '/',
        Component:Home
      },   
      {
        path:'/friendsDetails/:id',
        loader:() => fetch("/friends.json"),
        Component: FriendDetails,
        hydrateFallbackElement: <span className="loading loading-bars loading-xs"></span>
        
      },
      {
        path: '/timeline',
        Component: Timeline
      },
      {
        path:'/stats',
        Component: Stats
      },
      
    ],
    errorElement: <Error/>
  }
])
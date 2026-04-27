import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home";
import Friends from "../page/Friends";
import FriendDetails from "../ui/FriendDetails";
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
        path:'friends',
        Component: Friends
      },
      {
        path:'/friendsDetails',
        Component: FriendDetails
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
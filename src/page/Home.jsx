import { Suspense } from "react";
import Friends from "./Friends";
import Summary from "./Summary";


const Home = () => {
  const fetchFriends = fetch('/public/friends.json').then(res => res.json())
 
  return (
    <div>
     <Summary/>
     <Suspense fallback = {<h1>Loading.....</h1>}>
       <Friends fetchFriends = {fetchFriends}/>
     </Suspense>
    </div>
  );
};

export default Home;
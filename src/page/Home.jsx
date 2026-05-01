import { Suspense } from "react";
import Friends from "./Friends";
import Summary from "./Summary";

const fetchFriends = fetch('/friends.json').then(res => res.json())
const Home = () => {
  
 
  return (
    <div>
     <Summary fetchFriends = {fetchFriends}/>
     <Suspense fallback = {<span className="loading loading-bars loading-xs"></span>}>
       <Friends fetchFriends = {fetchFriends}/>
     </Suspense>
    </div>
  );
};

export default Home;
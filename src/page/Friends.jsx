import { use } from "react";
import FriendCard from "../ui/FriendCard";

const Friends = ({fetchFriends}) => {
  console.log(fetchFriends);
  const friends = use(fetchFriends)
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
         <FriendCard key={friend.id} friend = {friend}/>
        ))}
      </div>
    </div>
  );
};

export default Friends;
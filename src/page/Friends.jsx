import { use } from "react";

const Friends = ({fetchFriends}) => {
  console.log(fetchFriends);
  const friends = use(fetchFriends)
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="flex justify-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {friend.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {friend.days_since_contact}d ago
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700"
                >
                  {tag}
                </span>
              ))}

              {friend.status === "overdue" && (
                <span className="px-4 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                  Almost Due
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
import { BiVideo } from "react-icons/bi";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { TbPhoneCall } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router";
import { useContext } from "react";
import { TimelineContext } from "../components/context/context";

const FriendDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const { timelineData, setTimelineData } = useContext(TimelineContext);

  if (!data || !Array.isArray(data)) {
    return <p className="p-4">Loading...</p>;
  }

  const info = data.find((item) => item.id === parseInt(id));

  if (!info) {
    return <p className="p-4 text-error">Friend Not Found</p>;
  }

  // ✅ Add Timeline Data Function
  const handleAddData = (type, userDetails) => {
    const newData = {
      id: Date.now(),
      friendId: userDetails.id,
      name: userDetails.name,
      picture: userDetails.picture,
      action: type,
      time: new Date().toISOString(),
    };

    setTimelineData([...timelineData, newData]);
  };

  return (
    <div className="bg-base-200 py-20">
      <div className="container mx-auto">
        <div className="md:grid grid-cols-[380px_1fr] gap-4 p-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">

            {/* Profile Card */}
            <div className="card bg-base-100 shadow-sm border border-base-300 p-6">
              <div className="card-body items-center text-center gap-2">
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-base-300">
                    <img src={info.picture} alt={info.name} />
                  </div>
                </div>

                <h2 className="card-title text-base">{info.name}</h2>

                <div className="flex gap-2 flex-wrap justify-center">
                  <span
                    className={`badge badge-sm ${
                      info.status === "overdue"
                        ? "badge-error"
                        : info.status === "almost due"
                        ? "badge-warning"
                        : "badge-success"
                    }`}
                  >
                    {info.status?.charAt(0).toUpperCase() +
                      info.status?.slice(1)}
                  </span>

                  {info.tags?.map((tag) => (
                    <span key={tag} className="badge badge-sm badge-outline">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm italic text-base-content/60">
                  "{info.bio}"
                </p>

                <p className="text-xs text-base-content/40">
                  Preferred: {info.email}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="card bg-base-100 shadow-sm border border-base-300 p-3">
              <ul className="divide-y divide-base-200">
                <li>
                  <button className="btn btn-ghost w-full justify-start rounded-none text-sm">
                    🔔 Snooze 2 Weeks
                  </button>
                </li>
                <li>
                  <button className="btn btn-ghost w-full justify-start rounded-none text-sm">
                    📦 Archive
                  </button>
                </li>
                <li>
                  <button className="btn btn-ghost w-full justify-start rounded-none text-sm text-error">
                    🗑 Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="card bg-base-100 shadow-sm border border-base-300">
                <div className="card-body items-center text-center py-8">
                  <p className="text-2xl font-medium">
                    {info.days_since_contact}
                  </p>
                  <p className="text-xs text-base-content/50">
                    Days Since Contact
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-sm border border-base-300">
                <div className="card-body items-center text-center py-8">
                  <p className="text-2xl font-medium">{info.goal}</p>
                  <p className="text-xs text-base-content/50">
                    Goal (Days)
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-sm border border-base-300">
                <div className="card-body items-center text-center py-8">
                  <p className="text-lg font-semibold text-success">
                    {info.next_due_date
                      ? new Date(info.next_due_date).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )
                      : "N/A"}
                  </p>
                  <p className="text-xs text-base-content/50">
                    Next Due
                  </p>
                </div>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body py-8">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-sm">
                    Relationship Goal
                  </h3>
                  <button className="btn btn-xs btn-outline">
                    Edit
                  </button>
                </div>
                <p className="text-sm text-base-content/70">
                  Connect every <strong>{info.goal}</strong> days
                </p>
              </div>
            </div>

            {/* Quick Check-In */}
            <div className="bg-base-100 shadow-sm border border-base-300 p-6 rounded-xl">
              <p className="font-bold mb-6 text-xl">Quick Check In</p>

              <div className="grid grid-cols-3 gap-6">
                
                <button
                  onClick={() => handleAddData("Call", info)}
                  className="btn bg-base-200 hover:bg-base-300 flex flex-col items-center justify-center gap-3 h-24 text-lg font-semibold"
                >
                  <TbPhoneCall className="text-4xl" />
                  <span>Call</span>
                </button>

                <button
                  onClick={() => handleAddData("Text", info)}
                  className="btn bg-base-200 hover:bg-base-300 flex flex-col items-center justify-center gap-3 h-24 text-lg font-semibold"
                >
                  <PiChatTeardropTextFill className="text-4xl" />
                  <span>Text</span>
                </button>

                <button
                  onClick={() => handleAddData("Video", info)}
                  className="btn bg-base-200 hover:bg-base-300 flex flex-col items-center justify-center gap-3 h-24 text-lg font-semibold"
                >
                  <BiVideo className="text-4xl" />
                  <span>Video</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
import { useLoaderData, useParams } from "react-router";


const FriendDetails = () => {
  const data = useLoaderData() ;
  const {id} = useParams();
  console.log(data,id)
  const info = data.find(item => item.id === parseInt(id))
  console.log(info)
  return (
    <div className="container mx-auto">
       <div className="grid grid-cols-[280px_1fr] gap-4 p-6 bg-base-200 min-h-screen">

      {/* Left Column */}
      <div className="flex flex-col gap-4">

        {/* Profile Card */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body items-center text-center gap-2">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-base-300">
                <img src={info.picture} alt={info.name} />
              </div>
            </div>
            <h2 className="card-title text-base">{info.name}</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              <span className={`badge badge-sm ${info.status === "overdue" ? "badge-error" : info.status === "almost due" ? "badge-warning" : "badge-success"}`}>
                {info.status.charAt(0).toUpperCase() + info.status.slice(1)}
              </span>
              {info.tags.map((tag) => (
                <span key={tag} className="badge badge-sm badge-outline">{tag}</span>
              ))}
            </div>
            <p className="text-sm italic text-base-content/60">"{info.bio}"</p>
            <p className="text-xs text-base-content/40">Preferred: {info.email}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <ul className="divide-y divide-base-200">
            <li>
              <button className="btn btn-ghost w-full justify-start gap-2 rounded-none text-sm">
                🔔 Snooze 2 Weeks
              </button>
            </li>
            <li>
              <button className="btn btn-ghost w-full justify-start gap-2 rounded-none text-sm">
                📦 Archive
              </button>
            </li>
            <li>
              <button className="btn btn-ghost w-full justify-start gap-2 rounded-none text-sm text-error">
                🗑 Delete
              </button>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="flex flex-col gap-4">

        <div className="grid grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body items-center text-center py-4">
              <p className="text-2xl font-medium">{info.days_since_contact}</p>
              <p className="text-xs text-base-content/50">Days Since Contact</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body items-center text-center py-4">
              <p className="text-2xl font-medium">{info.goal}</p>
              <p className="text-xs text-base-content/50">Goal (Days)</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body items-center text-center py-4">
              <p className="text-lg font-semibold text-success">
                {new Date(info.next_due_date).toLocaleDateString("en-US", {
                  month: "short", day: "numeric", year: "numeric",
                })}
              </p>
              <p className="text-xs text-base-content/50">Next Due</p>
            </div>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body py-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-sm">Relationship Goal</h3>
              <button className="btn btn-xs btn-outline">Edit</button>
            </div>
            <p className="text-sm text-base-content/70">
              Connect every <strong>{info.goal} days</strong>
            </p>
          </div>
        </div>

        {/* Quick Check-In */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body py-4">
            <h3 className="font-medium text-sm mb-3">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Call", icon: "📞" },
                { label: "Text", icon: "💬" },
                { label: "Video", icon: "🎥" },
              ].map(({ label, icon }) => (
                <button key={label} className="btn btn-outline btn-sm flex flex-col gap-1 h-auto py-3">
                  <span className="text-lg">{icon}</span>
                  <span className="text-xs">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default FriendDetails;
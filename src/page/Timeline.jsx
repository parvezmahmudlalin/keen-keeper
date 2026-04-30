import { useContext, useState } from "react";
import { TimelineContext } from "../components/context/context";
import { TbPhoneCall } from "react-icons/tb";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { BiVideo } from "react-icons/bi";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");

  const sortedData = [...timelineData].reverse();

  const getIcon = (action) => {
    if (action === "Call") return <TbPhoneCall className="text-xl" />;
    if (action === "Text") return <PiChatTeardropTextFill className="text-xl" />;
    if (action === "Video") return <BiVideo className="text-xl" />;
    return "🤝";
  };

  const filteredData =
    filter === "All"
      ? sortedData
      : sortedData.filter((item) => item.action === filter);

  return (
    <div className="bg-base-200 min-h-screen py-16">
      <div className="container mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        {/* Filter */}
        <select
          className="select select-bordered mb-8 "
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filtered Timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

       
        <div className="flex flex-col gap-4">

          {filteredData.length === 0 && (
            <p className="text-base-content/60">No activity found.</p>
          )}

          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 border border-base-300 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition"
            >
              <div className="bg-base-200 p-3 rounded-full">
                {getIcon(item.action)}
              </div>

              <div className="flex flex-col">
                <p className="text-sm">
                  <span className="font-semibold">{item.action}</span>{" "}
                  with{" "}
                  <span className="text-primary font-medium">
                    {item.name}
                  </span>
                </p>

                <p className="text-xs text-base-content/50">
                  {new Date(item.time).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Timeline;


const Summary = () => {
  return (
    <div className="bg-base-200 py-20">
      <div className="container mx-auto text-center">

        <div className="w-8 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <button className="btn bg-green-800 hover:bg-green-900 text-white mt-6 px-6">
          + Add a Friend
        </button>

  
        <div className="w-6 h-1 bg-pink-500 mx-auto mt-4 rounded"></div>

    
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">

          <div className="bg-base-100 p-8 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-800">10</h2>
            <p className="text-gray-500 mt-2">Total Friends</p>
          </div>

          <div className="bg-base-100 p-8 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-800">3</h2>
            <p className="text-gray-500 mt-2">On Track</p>
          </div>

          <div className="bg-base-100 p-8 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-800">6</h2>
            <p className="text-gray-500 mt-2">Need Attention</p>
          </div>

          <div className="bg-base-100 p-8 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-800">12</h2>
            <p className="text-gray-500 mt-2">Interactions This Month</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Summary;
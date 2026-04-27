import { Link, useRouteError } from "react-router";


const Error = () => {
   const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-7xl">😵</div>
        <h1 className="text-4xl font-bold text-error">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-500">
          {error?.statusText || error?.message || "Page not found"}
        </p>
        {error?.status && (
          <p className="text-sm text-gray-400">
            Error Code: {error.status}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <Link to="/" className="btn btn-outline btn-secondary">
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline"
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
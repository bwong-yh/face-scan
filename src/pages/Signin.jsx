import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div
      className="mx-auto w-96 max-w-full rounded-md border-[1px] border-gray-500 p-6 opacity-75"
      style={{
        boxShadow: "12px 12px 36px rgba(107, 114, 128, 0.75)",
      }}
    >
      <p className="mb-6 text-3xl font-bold">Sign in!</p>

      <form>
        <div className="mt-6">
          <label>
            <span className="block text-lg font-medium text-gray-700">
              Email
            </span>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 opacity-80 shadow-lg outline-none hover:outline-none active:outline-none"
            />
          </label>
        </div>

        <div className="mt-6">
          <label>
            <span className="block text-lg font-medium text-gray-700">
              Password
            </span>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 opacity-80 shadow-sm outline-none hover:outline-none active:outline-none"
            />
          </label>
        </div>

        <div className="mt-10">
          <button className="w-full rounded-md border-[1px] border-black bg-[#009fc6] py-3 text-center opacity-75 hover:opacity-100">
            <span className="text-lg font-bold">Sign in</span>
          </button>
          <NavLink className="mt-6 block text-center text-sm font-bold text-gray-700">
            Sign up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Signin;

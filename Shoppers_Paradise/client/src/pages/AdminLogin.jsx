import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function AdminLogin() {
  
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setloader] = useState(false);

  const handleLogin = async (e) => {
    setloader(true);
    e.preventDefault();
    const data = {
      phone: phone,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/accounts/login",
        data
      );
      toast.success("Login Success");
      
      console.log(response);
      if (response.data.isLogin) window.location.href="/admin/dashboard";
      else window.location.href="/login";
    } catch (err) {
      setloader(false);
      
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className=" p-8 rounded  w-full max-w-md   border-blue-300">
        <h1 className="text-4xl text-blue-700  text-center mb-6 ">
          <span className="font-bold text-blue-700">A</span>dmin{" "}
          <span className="font-bold text-blue-700">L</span>ogin
        </h1>
        <hr />
        <form onSubmit={handleLogin} className="mt-5">
          <div className="mb-4 ">
            <label
              htmlFor="email"
              className="block  text-blue-600 text-sm font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full p-2  border border-blue-700 focus:outline-none focus:ring-blue-800 focus:ring-2 bg-transparent rounded"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="password"
              className="block  text-blue-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full  p-2 border border-blue-700 focus:outline-none focus:ring-blue-800 focus:ring-2  bg-transparent rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2  border-blue-700 text-white bg-blue-700 text-lg rounded hover:bg-blue-600 "
          >
            {loader ? (
              <div>
                <div
                  role="status"
                  className="flex justify-center items-center "
                >
                  <svg
                    aria-hidden="true"
                    class="w-7 h-7 mr-2 text-blue-200 animate-spin dark:text-blue-600 fill-gray-100"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className=" py-3">
          <p className="">
            Not having Account??{" "}
            <Link
              to="/admin/register"
              className="font-bold hover:underline text-blue-700  "
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

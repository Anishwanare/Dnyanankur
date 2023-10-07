import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleOnClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const PORT = process.env.PORT || 3000;

    const { email, password } = data;

    if (email && password) {
      try {
        const fetchData = await fetch(`http://localhost:${PORT}/api/login`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });

        const dataRes = await fetchData.json();
        console.log(dataRes);
        toast(dataRes.message);

        if (dataRes.alert) {
          localStorage.setItem("authToken", dataRes.authToken);
          localStorage.getItem("userName");
          console.log(localStorage.getItem("authToken"));
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        toast("An error occurred while logging in.");
      } finally {
        setIsLoading(false); // Stop loading
      }
    } else {
      toast("Enter Required Fields");
      setIsLoading(false); // Stop loading on error
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100"
        onSubmit={handleOnLogin}
      >
        <div className="m-5 md:m-0 p-6 w-full rounded-xl shadow-lg bg-white flex flex-col md:w-1/3 lg:w-1/4 xl:w-1/3 2xl:w-1/4 gap-5 md:gap-3">
          <h2 className="text-2xl font-semibold text-center text-purple-700 md:text-3xl">
            Log in
          </h2>
          <hr className="border border-purple-600" />
          <form className="space-y-4 flex flex-col gap-3 md:gap-2 lg:gap-3 xl:gap-2 2xl:gap-3 md:text-2xl">
            <div className="relative flex flex-col gap-3 md:gap-0">
              <label className="block text-2xl font-medium md:text-2xl">
                Email:
              </label>
              <input
                onChange={handleOnChange}
                name="email"
                type="email"
                placeholder=""
                className="w-full p-2 md:p-1 border rounded focus:outline focus:border-purple-600"
                required
              />
            </div>
            <div className="relative flex flex-col gap-3 md:gap-0">
              <label className="block text-2xl font-medium md:text-2xl">
                Password:
              </label>
              <div className="flex items-center">
                <input
                  onChange={handleOnChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  className="w-full p-2 md:p-1 rounded border focus:outline focus:border-purple-600"
                  required
                />
                <span
                  className="absolute right-3 cursor-pointer md:text-3xl"
                  onClick={handleOnClickShowPassword}
                >
                  {showPassword ? <BiSolidHide /> : <BiSolidShow />}
                </span>
              </div>
            </div>
            <div className="md:my-4 text-center">
              <button
                className="w-full py-3 md:py-1 flex justify-center bg-purple-600 text-white rounded border-none hover:bg-purple-700 md:text-2xl"
                type="submit"
              >
                {isLoading ? (
                  <p className="w-full py-3 md:py-1 flex justify-center bg-red-600 text-white rounded border-none hover:bg-red-700 md:text-2xl">
                    Loding.....
                  </p>
                ) : (
                  "Log In"
                )}
              </button>
            </div>
          </form>
          {/* <p className="mt-2 text-center text-black text-xl">
          <Link to="" className="text-purple-700">
            Forgot Password?
          </Link>
        </p> */}
          <p className="mt-4 text-center text-black text-xl">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

    const PORT = process.env.PORT || 3000;

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
   console.log(data);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const handleOnClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// const handleOnSubmit = async (e) => {
//   e.preventDefault();

//   if (data.password.length < 7) {
//     toast("Password should be at least 7 characters long");
//     return;
//   }

//   if (data.password !== data.confirmPassword) {
//     toast("Passwords do not match");
//     return;
//   }

//   const { name, email, password } = data;

//   if (name && email && password) {
//     try {
//       const fetchData = await fetch(`http://localhost:2000/api/signup`, {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       //if error
//       if (!fetchData.ok) {
//         const errorData = await fetchData.json();
//         toast(errorData.message);
//         return;
//       }

//       //if success
//       const successData = await fetchData.json();
//       toast(successData.message)
//       localStorage.setItem("userName",successData.userName);
//       console.log(successData);
//     } catch (error) {
//       console.error(error);
//       toast("An error occurred while submitting the form");
//     }
//   }
//   setIsLoading(true);
//   navigate("/login")
// };


const handleOnSubmit = async (e) => {
  e.preventDefault();

  if (data.password.length < 7) {
    toast("Password should be at least 7 characters long");
    return;
  }

  if (data.password !== data.confirmPassword) {
    toast("Passwords do not match");
    return;
  }

  // Email validation using a regular expression
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(data.email)) {
    toast("Please enter a valid email address");
    return;
  }

  const { name, email, password } = data;

  if (name && email && password) {
    try {
      const fetchData = await fetch(`http://localhost:${PORT}/api/signup`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      //if error
      if (!fetchData.ok) {
        const errorData = await fetchData.json();
        toast(errorData.message);
        return;
      }

      //if success
      const successData = await fetchData.json();
      toast(successData.message);
      localStorage.setItem("userName", successData.userName);
      console.log(successData);
    } catch (error) {
      console.error(error);
      toast("An error occurred while submitting the form");
    }
  }
  setIsLoading(true);
  navigate("/login");
};

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen px-4 md:px-0 bg-gray-100"
      onSubmit={handleOnSubmit}
    >
      <div className="m-5 p-6 md:p-4  w-full md:w-1/2 lg:w-1/3 xl:w-2/4 2xl:w-1/4 rounded-xl shadow-lg bg-white flex flex-col gap-3 md:gap-5">
        <h2 className="text-2xl font-semibold text-center text-purple-700 md:text-3xl">
          Sign Up
        </h2>
        <hr className="border border-purple-600" />
        <form className="flex flex-col gap-3 md:gap-3 md:text-2xl ">
          <div className="">
            <label
              htmlFor="username"
              className="block text-2xl font-medium md:text-2xl"
            >
              Name:
            </label>
            <input
              required
              type="text"
              name="name"
              id="username"
              placeholder=""
              className="w-full p-3 md:p-1 border rounded focus:outline-none focus:border-purple-700"
              onChange={handleOnChange}
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block text-2xl font-medium md:text-2xl"
            >
              Email:
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder=""
              className="w-full p-3 md:p-1 border rounded focus:outline-none focus:border-purple-700"
              onChange={handleOnChange}
            />
          </div>
          <div className="relative flex flex-col">
            <label className="block text-2xl font-medium md:text-2xl">
              Password:
            </label>
            <div className="flex items-center">
              <input
                onChange={handleOnChange}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder=""
                className="w-full p-3 md:p-1 rounded border focus:outline focus:border-purple-600"
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
          <div className="relative flex flex-col">
            <label className="block text-2xl font-medium md:text-2xl">
              Confirm Password:
            </label>
            <div className="flex items-center">
              <input
                onChange={handleOnChange}
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder=""
                className="w-full p-3 md:p-1 rounded border focus:outline focus:border-purple-600"
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
          <span>
            <span className="text-red-600">Note:</span> Password will not change
            once created !{" "}
            <span className="text-green-500"> Remember password .</span>
          </span>
          <div className="text-center">
            <button
              type="submit"
              className="w-full flex justify-center bg-purple-700 text-white py-2 md:py-0 rounded hover:bg-purple-800 focus:outline-none border-none  md:text-2xl"
            >
              {isLoading ? (
                <p className="w-full py-3 md:py-1 flex justify-center bg-red-600 text-white rounded border-none hover:bg-red-700 md:text-2xl">
                  Loding.....
                </p>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-black text-xl">
          Already have an account?{" "}
          <Link to={"/login"} className="text-purple-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

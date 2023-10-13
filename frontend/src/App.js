// import { Outlet } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <>
//     <Toaster/>
//       <div className="">
//         <Navbar />
//       </div>
//       <div className="mt-20 md:mt-20  h-full ">
//         <Outlet />
//       </div>
//       {/* <Footer/> */}
//     </>
//   );
// }

// export default App;


import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ComingSoon from "./pages/Coming_soon";
import Quiz from "./Quiz/Quiz";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20 md:mt-20 h-full ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<ComingSoon />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nmms" element={<ComingSoon />} />
          <Route path="/ContactUs" element={<ComingSoon />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


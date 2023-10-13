// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Home from "./pages/Home";
// // import Login from "./pages/Login";  
// // import Services from "./pages/Services";
// // import About from "./pages/About";
// import Signup from "./pages/Signup";
// // import ContactUs from "./pages/ContactUs";
// // import NMMS from "./pages/NMMS";
// import ComingSoon from "./pages/Coming_soon";
// import Quiz from "./Quiz/Quiz";
// import Login from "./pages/Login";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route   path="/" element={<App />}>
//       <Route   path="/" element={<Home />} />
//       <Route   path="/Services" element={<ComingSoon/>} />
//       <Route   path="/about" element={<ComingSoon/>} />
//       <Route   path="/login" element={<Login/>} />
//       <Route   path="/nmms" element={<ComingSoon/>} />
//       <Route   path="/ContactUs" element={<ComingSoon/>} />
//       <Route   path="/signup" element={<Signup />} />
//       <Route   path="/quiz" element={<Quiz/>}/>
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import ComingSoon from "./pages/Coming_soon";
import Quiz from "./Quiz/Quiz";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/Services" element={<ComingSoon/>} />
      <Route path="/about" element={<ComingSoon/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/nmms" element={<ComingSoon/>} />
      <Route path="/ContactUs" element={<ComingSoon/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/quiz" element={<Quiz/>} />
    </Routes>
  </Router>,
  document.getElementById("root")
);


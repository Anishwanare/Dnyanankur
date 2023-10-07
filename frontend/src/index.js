import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./pages/Login";  
// import Services from "./pages/Services";
// import About from "./pages/About";
import Signup from "./pages/Signup";
// import ContactUs from "./pages/ContactUs";
// import NMMS from "./pages/NMMS";
import ComingSoon from "./pages/Coming_soon";
import Quiz from "./Quiz/Quiz";
import Login from "./pages/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<App />}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Services" element={<ComingSoon/>} />
      <Route exact path="/about" element={<ComingSoon/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/nmms" element={<ComingSoon/>} />
      <Route exact path="/ContactUs" element={<ComingSoon/>} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/quiz" element={<Quiz/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

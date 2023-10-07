import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster/>
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20 md:mt-20  h-full ">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Local components
import Home from "./components/Home/Home";
import ListDrivers from "./components/Drivers/ListDrivers";
import AddDriver from "./components/Drivers/AddDriver";
import EditDriver from "./components/Drivers/EditDriver";
import Navbar from "./components/Common/Navbar";
import Login from "./components/Home/Login";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/driver/list" element={<ListDrivers />} />
            <Route path="/driver/add" element={<AddDriver />} />
            <Route path="/driver/edit/:id" element={<EditDriver />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;

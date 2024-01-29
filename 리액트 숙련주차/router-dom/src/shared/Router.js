import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contect from "../pages/Contect";
import Works from "../pages/Works";
import Work from "../pages/Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contect" element={<Contect />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

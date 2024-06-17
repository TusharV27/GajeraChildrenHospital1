import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

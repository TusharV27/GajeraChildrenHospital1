import { useState, useEffect } from "react";
import Logo from "./logo4.png";
import { getTranslations } from "../../translations/data";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar({ handleChangeLanguage, language }) {
  const [data, setData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  useEffect(() => {
    const fetchData = async () => {
      const translations = await getTranslations(language);
      setData(translations);
    };

    fetchData();
  }, [language]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Render loading indicator if data is null
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="bg-white shadow fixed w-full z-50">
        <nav className="bg-white mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="container flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-auto h-12" />
            </div>
            <div className="hidden md:flex flex-row items-center justify-end space-x-11">
              <ul className="flex space-x-11 mr-5">
                <li>
                  <Link to="">
                    <span
                      className={`${
                        location.pathname === "/"
                          ? "border-b-2 pb-2 px-3 text-orange-500  border-orange-500"
                          : "text-[#023f88] font-semibold"
                      }  textFont hover:text-orange-600`}
                    >
                      {data.navItem.home}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="about">
                    <span
                      className={`${
                        location.pathname === "/about"
                          ? "border-b-2 px-3 pb-2 text-orange-500  border-orange-500"
                          : "text-[#023f88] font-semibold"
                      }  textFont hover:text-orange-600`}
                    >
                      {data.navItem.about}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="service">
                    <span
                      className={`${
                        location.pathname === "/service"
                          ? "border-b-2 px-3 pb-2 text-orange-500  border-orange-500"
                          : "text-[#023f88] font-semibold"
                      }  textFont hover:text-orange-600`}
                    >
                      {data.navItem.service}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="facility">
                    <span
                      className={`${
                        location.pathname === "/facility"
                          ? "border-b-2 px-3 pb-2 text-orange-500  border-orange-500"
                          : "text-[#023f88] font-semibold"
                      } textFont hover:text-orange-600`}
                    >
                      {data.navItem.facility}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="gallery">
                    <span
                      className={`${
                        location.pathname === "/gallery"
                          ? "border-b-2 px-3 pb-2 text-orange-500  border-orange-500"
                          : "text-[#023f88] font-semibold"
                      }  textFont hover:text-orange-600`}
                    >
                      {data.navItem.gallery}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="contact">
                    <span
                      className={`${
                        location.pathname === "/contact"
                          ? "border-b-2 px-3 pb-2 text-orange-500  border-orange-500"
                          : "text-[#023f88] font-semibold"
                      } textFont hover:text-orange-600`}
                    >
                      {data.navItem.contact}
                    </span>
                  </Link>
                </li>
              </ul>
              <div>
                <select
                  name="language"
                  onChange={handleChangeLanguage}
                  value={language}
                  className="bg-[#023f88] py-1 px-2 text-white rounded focus:outline-none"
                >
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="gu">Gujarati</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleSidebar} className="text-[#023f88]">
                {isSidebarOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>
        </nav>
        {/* Sidebar overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${
            isSidebarOpen ? "block" : "hidden"
          }`}
          onClick={toggleSidebar}
        />
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <img src={Logo} alt="Logo" className="w-auto h-12 mb-6" />
            <ul className="space-y-6 flex flex-col">
              <li>
                <Link to="" onClick={toggleSidebar}>
                  <span
                    className={`${
                      location.pathname === "/"
                        ? "text-orange-500 border-orange-500 border-b-2 pb-2"
                        : "text-[#023f88] font-semibold"
                    }   px-3  textFont hover:text-orange-600`}
                  >
                    {data.navItem.home}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="about" onClick={toggleSidebar}>
                  <span
                    className={`${
                      location.pathname === "/about"
                        ? "text-orange-500 border-orange-500 border-b-2 pb-2"
                        : "text-[#023f88] font-semibold"
                    }   px-3  textFont hover:text-orange-600`}
                  >
                    {data.navItem.about}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="service" onClick={toggleSidebar}>
                  <span
                    className={`${
                      location.pathname === "/service"
                        ? "text-orange-500 border-orange-500 border-b-2 pb-2"
                        : "text-[#023f88] font-semibold"
                    }   px-3  textFont hover:text-orange-600`}
                  >
                    {data.navItem.service}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="facility" onClick={toggleSidebar}>
                  <span
                    className={`${
                      location.pathname === "/facility"
                        ? "text-orange-500 border-orange-500 border-b-2 pb-2"
                        : "text-[#023f88] font-semibold"
                    }   px-3  textFont hover:text-orange-600`}
                  >
                    {data.navItem.facility}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="gallery" onClick={toggleSidebar}>
                  <span
                    className={`${
                      location.pathname === "/gallery"
                        ? "text-orange-500 border-orange-500 border-b-2 pb-2"
                        : "text-[#023f88] font-semibold"
                    }   px-3  textFont hover:text-orange-600`}
                  >
                    {data.navItem.gallery}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="contact" onClick={toggleSidebar}>
                  <span
                    className={`${
                      location.pathname === "/contact"
                        ? "text-orange-500 border-orange-500 border-b-2 pb-2"
                        : "text-[#023f88] font-semibold"
                    }   px-3  textFont hover:text-orange-600`}
                  >
                    {data.navItem.contact}
                  </span>
                </Link>
              </li>
              <li>
                <div className="mt-6">
                  <select
                    name="language"
                    onChange={handleChangeLanguage}
                    value={language}
                    className="bg-[#023f88] py-1 px-2 text-white rounded focus:outline-none w-full"
                  >
                    <option value="">Select Language</option>
                    <option value="en">English</option>
                    <option value="gu">Gujarati</option>
                    <option value="hi">Hindi</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

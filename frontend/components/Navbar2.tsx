import { useState } from "react";
import { NavLink } from "react-router-dom";
import ConnectButton from "./ConnectButton";

interface Navbar2Props {
  setSelectedChain: (chain: string) => void;
}

const Navbar2: React.FC<Navbar2Props> = ({ setSelectedChain }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedChain, setSelectedChainLocal] = useState("Aptos");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setIsOpen(false); // Close the mobile menu on click
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChainSelection = (chain: string) => {
    setSelectedChainLocal(chain);
    setSelectedChain(chain); // Ensure the parent component is updated
    setDropdownOpen(false);
  };

  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="">
      <div className="bg-transparent z-50 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20 pb-3 pt-2 px-3 flex justify-between items-center text-white bricolage-font">
        <a
          href="/"
          className="text-white text-xs lg:text-xl bg-transparent backdrop-blur-2xl backdrop-filter hover:scale-105 transform transition-transform duration-100 hover:shadow-xl hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-3 px-6 rounded-xl md:text-base border-2 brandy-font border-white custom-border-radius"
        >
          VortexEngine
        </a>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="block text-xl font-semibold focus:outline-none mr-4">
            ☰
          </button>
        </div>

        <div
          className={`lg:hidden absolute inset-y-0 z-50 left-0 transform transition duration-300 ease-in-out bg-black text-white backdrop-filter backdrop-blur-lg h-screen w-full ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button onClick={handleCloseClick} className="absolute top-0 right-0 m-4 text-2xl focus:outline-none">
            ×
          </button>
          <div className="flex flex-col items-center min-h-screen space-y-4 p-4">
            <ul className="space-y-2 poppins-font text-center font-medium">
              <li>
                <a
                  href="/"
                  className={`py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer ${
                    activeMenu === "home"
                      ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black"
                      : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className={`py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer ${
                    activeMenu === "dashboard"
                      ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black"
                      : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("dashboard")}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`py-1 px-1 mx-1 pt-2 md:py-3 brandy-font underline md:px-3 md:mx-3 flex-wrap cursor-pointer pb-2 ${
                    activeMenu === "resources"
                      ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black"
                      : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("resources")}
                >
                  Resources
                </a>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  >
                    {selectedChain}
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleChainSelection("Aptos")}
                      >
                        Aptos
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleChainSelection("Ethereum")}
                      >
                        Ethereum
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <ConnectButton chain={selectedChain} />
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Navbar2 */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-4 space-x-2 text-white poppins-font font-medium mr-4 text-lg">
          <NavLink
            to="/"
            className={`py-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap p-3 px-6 cursor-pointer ${
              activeMenu === "home" ? "hover:scale-105 border-b-2 rounded-xl" : " hover:text-gray-400"
            }`}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={`py-1 px-5 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap p-2 cursor-pointer  border-b-2 rounded-xl ${
              activeMenu === "dashboard" ? "hover:scale-105" : " hover:text-gray-400"
            }`}
            onClick={() => handleMenuClick("dashboard")}
          >
            Dashboard
          </NavLink>
          <a
            href="https://manis-organization-2.gitbook.io/vortexdocs"
            target="_blank"
            className={`py-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap p-3 px-6 cursor-pointer ${
              activeMenu === "resources" ? "hover:scale-105 border-b-2 rounded-xl" : " hover:text-gray-400"
            }`}
            onClick={() => handleMenuClick("resources")}
          >
            Resources
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="py-1 px-1 mx-1 md:py-3 md:px-5 md:mx-3 flex-wrap cursor-pointer border-b-2 rounded-xl flex justify-center items-center"
            >
              {selectedChain}
              <svg
                // className="w-6 h-6 text-white"
                onClick={toggleRotation}
                className={` w-6 h-6 ml-2 text-white transform transition-transform duration-500 ${isRotated ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 w-full text-center mt-2 bg-purple-800 backdrop-filter backdrop-blur-2xl text-white border-2 gradient-border shadow-lg rounded-md">
                <li
                  className="px-4 py-2 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 cursor-pointer"
                  onClick={() => handleChainSelection("Aptos")}
                >
                  Aptos
                </li>
                <li
                  className="px-4 py-2 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 cursor-pointer"
                  onClick={() => handleChainSelection("Ethereum")}
                >
                  Ethereum
                </li>
              </ul>
            )}
          </div>
          <ConnectButton chain={selectedChain} />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;

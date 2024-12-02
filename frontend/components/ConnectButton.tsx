import React, { useState } from "react";
import { WalletSelector } from "./WalletSelector"; // Assuming WalletSelector is the button for Aptos
import CustomButton from "../components/Connect"; // Assuming CustomButton is the button for Ethereum

interface ConnectButtonProps {
  chain: string; // Prop to receive the selected chain name
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ chain }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown open/close
  };

  const renderButton = () => {
    if (chain === "Aptos") {
      return <WalletSelector />;
    } else if (chain === "Ethereum") {
      return <CustomButton />;
    } else {
      return (
        <button
          className="text-white text-xs lg:text-base bg-transparent backdrop-filter backdrop-blur-2xl hover:scale-95 transform transition-transform duration-100 hover:shadow-xl p-3 px-6 rounded-xl md:text-base border-2 brandy-font border-white custom-border-radius flex justify-center items-center"
          onClick={handleButtonClick} // Toggle dropdown on button click
        >
          Connect Wallet
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 pl-2"
          >
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
          </svg>
        </button>
      );
    }
  };

  return <div className="relative inline-block text-left">{renderButton()}</div>;
};

export default ConnectButton;
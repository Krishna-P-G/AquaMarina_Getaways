import React from "react";
import PropTypes from "prop-types";
import cover from "../assets/logo_black.png";
import { CircleX } from "lucide-react";
import User_Booking from "../components/User/Components/User_Booking";

const PopupModal = ({ isOpen, onClose,itemTitle }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-1/2  h-[40rem]">
        <div className="flex flex-row justify-end">
          {/* <span className="justify-start text-3xl text-[#FF204E] font-lobster font-bold">Booking Page</span> */}
          <button className="text-gray-500 justify-end" onClick={onClose}>
            <CircleX className="w-12 h-12" />
          </button>
        </div>
        <div className="flex">
          <User_Booking selectedItemTitle={itemTitle} />
        </div>
      </div>
    </div>
  );
};

export default PopupModal;

PopupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  itemTitle:PropTypes.string.isRequired,
};

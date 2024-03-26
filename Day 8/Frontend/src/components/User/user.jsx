import React, { useState } from "react";
import User_Services from "./Components/User_Services";
import User_Bundles from "./Components/User_Bundles";
import User_Categories from "./Components/User_Categories";
import "./user.css";
import { User_Feedback } from "./Components";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PopupModal from "../../common/PopModal";

function User() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
    
  // };
  return (
    <>
      <Navbar />
      <User_Bundles/>
      {/* <PopupModal isOpen={isModalOpen} onClose={toggleModal} /> */}
      <User_Categories />
      <User_Services />
      <User_Feedback />
      <Footer />
    </>
  );
}

export default User;

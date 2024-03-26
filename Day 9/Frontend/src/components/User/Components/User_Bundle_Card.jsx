import React, { useState } from "react";
import StarRating from "../../Landing/Components/StarRating";
import PropTypes from "prop-types"; // Import the PopupModal component

function User_Bundle_Card({ item }) {
  return (
    <>
      <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4 transition-transform duration-300 ease-in-out hover:scale-105">
        <img src={item.linkImg} className="h-40 w-full object-cover" />
        <div className="p-5 border border-b">
          <h1 className="py-2 truncate">{item.title}</h1>
          <StarRating rating={item.rating} />
        </div>
        <div className="flex flex-row">
          <h3 className="p-5 text-xl">{item.price}</h3>
          <div className="px-4 py-4 font-poppins pl-20 justify-end">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 relative rounded-full transition duration-300 ease-in-out"
              // onClick={() => openModal(true, item.title)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
          {item.category}
        </div>
      </div>
    </>
  );
}

// Prop types validation
User_Bundle_Card.propTypes = {
  item: PropTypes.shape({
    linkImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default User_Bundle_Card;

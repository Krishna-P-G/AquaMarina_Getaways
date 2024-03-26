import React from "react";
import StarRating from "../../Landing/Components/StarRating";
import PropTypes from "prop-types";

const User_Category_Card = ({ item }) => {
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4 h-72 w-64 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center px-4 py-4">
          <img src={item.linkImg} alt="" className="h-24 w-24 rounded-full" />
        </div>
        <div
          className="z-8 absolute top-28 right-12 m-4 text-black"
          style={{ opacity: 1.0 }}
        >
          <h1 className="truncate font-bold pl-2">{item.title}</h1>
          <StarRating rating={item.rating} />
        </div>
        <h3 className="absolute top-56 w-full p-5 text-xl font-poppins border border-t">
          {item.price}
        </h3>
        <div className="absolute top-44 right-[4.5rem] m-3 px-2 py-[2.5px] rounded font-bold bg-slate-600 text-white">
          {item.category}
        </div>
        <div className="absolute top-[14.8rem] left-[8.5rem] font-poppins">
          <button
            className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            // onClick={() => openModal(true)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop types validation
User_Category_Card.propTypes = {
  item: PropTypes.shape({
    linkImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default User_Category_Card;

import React, { useState } from "react";
import User_Bundle_Card from "./User_Bundle_Card";
import Slider from "react-slick";
import { bundlesCategories } from "../../../data/Bundles";

const User_Bundles = ({ openModal }) => {
 


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#E9F8F3B2] pt-[5rem]" id="bundles">
      {bundlesCategories.map((category, i) => (
        <div
          key={i}
          className="md:max-w-[1480px] m-auto max-w-[600px] py-4 px-4 md:px-0"
        >
          <div className="py-4">
            <h1 className="py-3 text-3xl font-bold">
              Our Signature{" "}
              <span className="text-[#20B486]">{category.category}</span>{" "}
              Bundles
            </h1>
            <p className="text-[#6D737A]">
              We Provide More Bundles to All The Old age Peoples
            </p>
          </div>

          <Slider {...settings} className="px-5">
            {category.data.map((item, i) => (
              <div key={i}>
                <User_Bundle_Card item={item} />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default User_Bundles;

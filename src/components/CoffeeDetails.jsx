import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const singleCoffee = useLoaderData();
  const { name, photo, supplier, taste, category,details,price,chef } =
    singleCoffee;
    console.log(singleCoffee)

    
  return (
    <div >
      <div className="  h-auto bg-[#f4f3f0] "
      style={{
        backgroundImage: "url('https://i.ibb.co.com/rGz37Xw8/11.png')",
      }}>
        <div className="my-4 w-40 pt-3 pl-2">
          <NavLink
            className="text-2xl  rounded flex hover:bg-[#E3B577]  text-black "
            to="/"
          >
            <IoArrowBackSharp className="mt-1"></IoArrowBackSharp> Back to home
          </NavLink>
        </div>
        <div className="flex flex-1 items-center justify-center gap-10 p-10 bg-[#fdfcf9] rounded-lg shadow-md max-w-4xl mx-auto">
          {/* Image section */}
          <div>
            <img src={photo} alt={name} className="w-60 object-contain" />
          </div>

          {/* Details section */}
          <div>
            <h2 className="text-3xl font-bold text-[#331A15] mb-4">Niceties</h2>

            <p>
              <span className="font-semibold text-black">Name: </span>
              <span className=" text-black">{name}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Chef: </span>
              <span className=" text-black">{chef}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Supplier: </span>{" "}
              <span className=" text-black">{supplier}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Taste: </span>
              <span className=" text-black">{taste}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Category: </span>{" "}
              <span className=" text-black">{category}</span>
            </p>
            <p>
              <span className="font-semibold text-black">Details: </span>{" "}
              <span className=" text-black">{details}</span>
            </p>
            <p className=" text-black">
              <span className="font-semibold">Price: </span>
              <span className=" text-black">{price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

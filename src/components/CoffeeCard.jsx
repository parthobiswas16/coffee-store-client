import React from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees}) => {
  console.log(coffee);
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (_id) => {
    console.log("delete button clicked ", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        //start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
      //remove the coffee from the state
              const remainingCoffees=coffees.filter(cof=>cof._id !==_id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      
      <div className="card card-side w-100 h-70 shadow-sm mt-5 mx-auto p-3 bg-[#F5F4F1]">
      <figure>
        <img src={photo} alt="Movie" className="" />
      </figure>
      <div className="flex justify-around w-full gap-3 mt-14">
        <div className="">
          <h2 className=" text-black"><span className="font-bold">Name:</span> {name}</h2>
          <p  className=" text-black">
            <span className="font-bold te">Chef: </span>
            {chef}
          </p>
          <p  className=" text-black">
            <span className="font-bold te">Price: </span>
            {price}
          </p>
        </div>

        <div className="card-actions justify-center">
          <div className="join join-vertical">
            <Link to={`/coffee/${_id}`}>
              <button className="btn rounded bg-orange-300 mb-2 hover:bg-amber-600
              
              ">
                <FaEye size={20} />
              </button>
            </Link>

            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn rounded mb-2 hover:bg-amber-900">
                <FaPen size={20} />
              </button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn rounded bg-red-500 hover:bg-red-800"
            >
              <MdDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CoffeeCard;

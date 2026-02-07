import React from "react";
import { useNavigate, useLoaderData } from "react-router";
import { IoArrowBackSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const { _id, name, chef, supplier, taste, category, details, price, photo } =
    useLoaderData();

  // console.log(name,chef,supplier,taste,category,details,price,photo)

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdatedCoffee = Object.fromEntries(formData.entries());
    console.log(UpdatedCoffee);

    // send updated coffee in the database
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Coffee Updated successfully!",
            icon: "success",
            draggable: true,
          }).then((result) => {
            if (result.isConfirmed) { navigate("/");

            }

          });
          ;
          
        }
      });
  };
  
  return (
    <div className="px-24 mt-1  max-w-7xl mx-auto text-black"
    style={{
        backgroundImage: "url('https://i.ibb.co.com/rGz37Xw8/11.png')",
      }}>
      <div className="my-4 w-40">
        <NavLink className="text-2xl  rounded flex hover:bg-[#E3B577]  " to="/">
          <IoArrowBackSharp className="mt-1"></IoArrowBackSharp> Back to home
        </NavLink>
      </div>
      <div className='bg-[#F4F3F0] p-6 rounded-2xl'>
        <div className="px-12 text-center space-y-2 ">
        <h1 className="text-4xl drop-shadow-[0_0_2px_#374151] ">Update Existing Coffee Details</h1>
        <p className="px-10 text-[#504a4a] ">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coffee Name */}
          <div>
            <label className="block mb-2 ">Name</label>
            <input
              defaultValue={name}
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="w-full p-3 rounded border bg-white"
            />
          </div>

          {/* Chef */}
          <div>
            <label className="block mb-2 ">Chef</label>
            <input
              defaultValue={chef}
              type="text"
              name="chef"
              placeholder="Enter coffee Chef"
              className="w-full p-3 rounded border bg-white"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="block mb-2  ">Supplier</label>
            <input
              defaultValue={supplier}
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="w-full p-3 rounded border bg-white"
            />
          </div>

          {/* Taste */}
          <div>
            <label className="block mb-2  ">Taste</label>
            <input
              defaultValue={taste}
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="w-full p-3 rounded border bg-white"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2  ">Category</label>
            <input
              defaultValue={category}
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="w-full p-3 rounded border bg-white"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block mb-2  ">Details</label>
            <input
              defaultValue={details}
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full p-3 rounded border bg-white"
            />
          </div>
          {/* Price */}
          <div>
            <label className="block mb-2  ">Price</label>
            <input
              defaultValue={price}
              type="number"
              name="price"
              placeholder="Enter coffee price"
              className="w-full p-3 rounded border bg-white"
            />
          </div>
          {/* Photo URL */}
          <div>
            <label className="block mb-2  ">Photo</label>
            <input
              defaultValue={photo}
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full p-3 rounded border bg-white"
            />
          </div>
        </fieldset>

        <fieldset className="mt-6"></fieldset>

        {/* Button */}
        <input
          type="submit"
          className="btn w-full mt-1 mb-6 bg-[#D2B48C] text-black font-semibold py-3 rounded hover:bg-[#925608]"
          value="Update Coffee"
        />
      </form>
      </div>
      
    </div>
  );
};

export default UpdateCoffee;

import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';


const AddCoffee = () => {
    
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target ;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);
        

        // send data to backend 
        fetch('http://localhost:3000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
           if(data.insertedId){
            Swal.fire({
                title: "Coffee Added successfully!",
                 icon: "success",
                draggable: true
});
        form.reset();
           }
        })

    }
    return (

        <div className='px-24 mt-1  max-w-7xl mx-auto'>
            <div className='my-4 w-40'>
                <NavLink className='text-2xl  rounded flex hover:bg-[#E3B577]  ' to="/"><IoArrowBackSharp className='mt-1'></IoArrowBackSharp> Back to home</NavLink>
                
            </div>
            <div className='px-12 text-center space-y-2 '>
                <h1 className='text-4xl '>Add New Coffee</h1>
                <p className='px-10 '>
                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
            </div>
            <form onSubmit={handleAddCoffee}>
                
                    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Coffee Name */}
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="w-full p-3 rounded border"
            />
          </div>

          {/* Chef */}
          <div>
            <label className="block mb-2 font-semibold">Chef</label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee Chef"
              className="w-full p-3 rounded border"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="block mb-2 font-semibold">Supplier</label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="w-full p-3 rounded border"
            />
          </div>

          {/* Taste */}
          <div>
            <label className="block mb-2 font-semibold">Taste</label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="w-full p-3 rounded border"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="w-full p-3 rounded border"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block mb-2 font-semibold">Details</label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full p-3 rounded border"
            />
          </div>
          {/* Price */}
          <div>
            <label className="block mb-2 font-semibold">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter coffee price"
              className="w-full p-3 rounded border"
            />
          </div>
           {/* Photo URL */}
           <div>
            <label className="block mb-2 font-semibold">Photo</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            className="w-full p-3 rounded border"
          />
           </div>

        </fieldset>

       
        <fieldset className="mt-6">
          
        </fieldset>

        {/* Button */}
        <input type="submit" className='btn w-full mt-1 mb-6 bg-[#D2B48C] text-black font-semibold py-3 rounded hover:bg-[#925608]' value="Add Coffee" />
                
            </form>
        </div>
    );
};

export default AddCoffee;
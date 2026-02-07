import React, { useState } from 'react';
import Header from './Header';
import { NavLink, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { IoArrowBackSharp } from 'react-icons/io5';
import { LuCoffee } from 'react-icons/lu';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div className='bg-white'>
           <Header></Header> 
           
            <div className='flex flex-col  items-center text-center  border-[#331A15] mt-15'>
        <p className='text-black'>--- Sip & Savor ---</p>
        <p className='text-3xl drop-shadow-lg text-[#331A15] font-bold'>Our Popular Products</p>
        <NavLink
            className="rounded flex bg-[#E3B577] px-5 py-1 mt-1  text-white drop-shadow-[0_0_2px_#331A15] hover:drop-shadow-lg"
            to="/addCoffee"
          >
             Add Coffee  <LuCoffee size={20}/>
          </NavLink>
      
           </div>
           <div className='px-20 md:px-60 grid grid-cols-1 md:grid-cols-2'>
            {
                coffees.map(coffee=><CoffeeCard 
                    key={coffee._id} 
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
            }
           </div>
           {/* picture and text*/}
           <div className='text-black mt-5'>
            {/* text */}
            <div className='text-center'>
               <p>Follow Us Now</p>
            <p className='text-3xl font-bold text-[#331A15]'>Follow on Instagram</p> 
            </div>
            {/* picture */}
            
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-6 px-20'>
            <img src="https://i.ibb.co.com/DDS4ZW8c/Rectangle-9.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            <img src="https://i.ibb.co.com/jkzVBMRJ/Rectangle-10.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            <img src="https://i.ibb.co.com/3YrKsTrK/Rectangle-11.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            <img src="https://i.ibb.co.com/fzM51h93/Rectangle-12.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            <img src="https://i.ibb.co.com/dsCDD6QS/Rectangle-13.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            <img src="https://i.ibb.co.com/qFCXb9Rr/Rectangle-14.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            <img src="https://i.ibb.co.com/PGCPn2LS/Rectangle-15.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            <img src="https://i.ibb.co.com/CRN9kwH/Rectangle-16.png" alt="" className="w-50 h-50 object-cover rounded-xl hover:scale-110 transition duration-500" />
            </div>
            
           </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div>
           <Header></Header> 
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
        </div>
    );
};

export default Home;
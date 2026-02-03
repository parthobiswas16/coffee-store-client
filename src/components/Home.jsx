import React from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
           <Header></Header> 
           <div className='px-20 md:px-60 grid grid-cols-1 md:grid-cols-2'>
            {
                coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default Home;
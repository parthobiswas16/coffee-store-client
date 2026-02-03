import React from 'react';

const Banner = () => {
    return (
        <div>
        <div>
            <div
  className="h-[400px] w-full bg-cover bg-center flex items-center"
  style={{
    backgroundImage: "url('https://i.ibb.co.com/tMmyJmYT/6.jpg')"
  }}
>
  <div className="ml-20 max-w-md text-white">
    <h1 className="text-4xl font-bold mb-4">
      Would you like a Cup of Delicious Coffee?
    </h1>

    <p className="mb-6 text-sm opacity-90">
      It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable
    </p>

    <button className=" p-1 border rounded border-white bg-transparent hover:bg-[#E3B577] ">
      Learn More
    </button>
  </div>
</div>

        </div>
        </div>
    );
};

export default Banner;
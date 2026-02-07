import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <div
          className="h-[400px] w-full bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/tMmyJmYT/6.jpg')",
          }}
        >
          <div className="ml-20 max-w-md text-white">
            <h1 className="text-4xl font-bold mb-4">
              Would you like a Cup of Delicious Coffee?
            </h1>

            <p className="mb-6 text-sm opacity-90">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable
            </p>

            <button className=" p-1 border rounded border-white bg-transparent hover:bg-[#E3B577] ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#ECEAE3] w-full 
      py-10 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {/* 1th */}
          <div className="text-black h-[150px] w-[250px]  justify-center items-center text-center">
            <img src="https://i.ibb.co.com/99CnDXmq/1.png" alt="" className=" h-[50px] w-[50px] mx-auto  " />
            <p className="font-bold text-[#331A15]">Awesome Aroma</p>
            <p>You will definitely be a fan of the design & aroma of your coffee</p>
          </div>
          {/* 2th */}
         <div className="text-black h-[150px] w-[250px]  justify-center items-center text-center">
            <img src="https://i.ibb.co.com/Q7v1KXNq/2.png" alt="" className=" h-[50px] w-[50px] mx-auto  " />
            <p className="font-bold text-[#331A15]">High Quality</p>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          {/* 3rd */}
          <div className="text-black h-[150px] w-[250px]  justify-center items-center text-center">
            <img src="https://i.ibb.co.com/fY0yKwJM/3.png" alt="" className=" h-[50px] w-[50px] mx-auto  " />
            <p className="font-bold text-[#331A15]">Pure Grades</p>
            <p>The coffee is made of the green coffee beans which you will love</p>
          </div>
          {/* 4th */}
          <div className="text-black h-[150px] w-[250px]  justify-center items-center text-center">
            <img src="https://i.ibb.co.com/67xMm31z/4.png" alt="" className=" h-[50px] w-[50px] mx-auto  " />
            <p className="font-bold text-[#331A15]">Proper Roasting</p>
            <p>Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

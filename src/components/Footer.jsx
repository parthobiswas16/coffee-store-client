import React from 'react';

const Footer = () => {
    return (

        <div className='mt-15'>
            {/* main footer */}
            <footer
      className="bg-cover bg-center py-16 px-6"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/gM3WD9fR/13.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-[#331A15]">
        
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Espresso Emporium</h2>

          <p className="mb-4 text-sm">
            Always ready to be your friend. Come & Contact with us to share your <br />memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6 text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>

          {/* Contact Info */}
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <p className="text-sm">📞 +88 01533 333 333</p>
          <p className="text-sm">✉️ info@gmail.com</p>
          <p className="text-sm">📍 72, Wall street, King Road, Dhaka</p>
        </div>

        {/* Right Side Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-white/70 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-white/70 outline-none"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded bg-white/70 outline-none"
            ></textarea>

            <button
              type="submit"
              className="border border-[#331A15] px-6 py-2 rounded-full hover:bg-[#331A15] hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
    {/* after footer */}
    <div className=''
    
    style={{
        backgroundImage: "url('https://i.ibb.co.com/9H65t22x/24.jpg')",
      }}
    >
        <p className=' p-3 text-center'>Copyright Espresso Emporium ! All Rights Reserved</p>
    </div>
        </div>
    );
};

export default Footer;
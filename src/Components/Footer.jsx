import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import inscriptionlogo from '../../public/images/inscription/logo3.png'


const Footer = () => {
  return (

    <footer className="bg-[#47574a] text-white p-4 md:p-8" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {/* First Column - Logo */}
        <div className="col-span-1">
          <div className="items-center">
            <div className=" w-42  flex items-center justify-center mr-3">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img
                  src={inscriptionlogo}
                  alt="Written Heritage Logo"
                  className=" w-20 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Second Column - Three columns */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className='col-span-1 sm:mx-auto'>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/" className="hover:text-gray-300 text-lg">Home</Link></li>
              <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/inscriptions" className="hover:text-gray-300 text-lg">Inscriptions
              </Link></li>
              <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/events" className="hover:text-gray-300 text-lg">Events</Link></li>
            </ul>
          </div>



          {/* Contact Us */}
          <div className='col-span-2 sm:mx-auto sm:col-span-2'>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li>info@nepalinscription.com</li>
              <li>Kathmandu, Nepal</li>
            </ul>
          </div>

          {/* <div className='sm:mx-auto col-span-1'>
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300 text-xl">
                <FaFacebook />
              </a>

              <a href="#" target="_blank" className="hover:text-gray-300 text-xl">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" className="hover:text-gray-300 text-xl">
                <FaYoutube />
              </a>
            </div>
          </div> */}


        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-white mt-8 pt-6 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Inscriptions of Nepal. All rights reserved.  <span className='hidden'> Crafted by   <a href="https://www.sait.com.np/" target="_blank" >S.A I.T Solution Nepal </a></span></p>
      </div>
    </footer>
  )
}

export default Footer
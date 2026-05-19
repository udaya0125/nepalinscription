import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import inscriptionlogo from '../../public/images/inscription/logo3.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when offcanvas is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);
  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/team', label: 'TEAM' },
    { path: '/inscriptions', label: 'INSCRIPTIONS' },
        { path: '/palaeographical', label: 'PALAEOGRAPHICAL DATABASE' },

    { path: '/partners', label: 'PARTNERS' },

    { path: '/gallery', label: 'GALLERY' },

    { path: '/events', label: 'EVENTS' },
    { path: '/publication', label: 'PUBLICATIONS' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#47574a]/95 backdrop-blur-md shadow-lg transition-all duration-500">
      {/* Desktop Navbar */}
      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex items-center justify-between px-20 transition-all duration-500 ${isSticky ? 'py-0 shadow-md' : 'py-0'
          }`}
      >
        {/* Logo */}
        <div
          className="cursor-pointer flex items-center gap-3"
          onClick={() => navigate('/')}
        >
          <img
            src={inscriptionlogo}
            alt="Written Heritage Logo"
            className=" w-16 object-cover"
          />
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-8">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative text-sm font-semibold tracking-wide uppercase transition-all duration-300 pb-1 ${isActive
                  ? 'text-[#efefe8]'
                  : 'text-white hover:text-[#efefe8]'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#efefe8] after:transition-all
          hover:after:w-full ${isActive ? 'after:w-full' : ''}`
              }
              onClick={()=>window.scrollTo(0,0)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Button */}
        {/* <button
          className="bg-[#efefe8] text-[#282118] px-5 py-2 rounded-lg shadow-sm font-semibold hover:bg-[#e0d8c0] transition-all duration-300"
          onClick={() => navigate('/publication')}
        >
          PUBLICATIONS
        </button> */}
      </div>


      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-6 py-1">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img
            src="images/inscription/logo3.png"
            alt="Written Heritage Logo"
            className=" w-16 object-cover"
          />        </div>

        <button
          onClick={toggleMenu}
          className="text-white hover:text-[#efefe8] transition-colors focus:outline-none z-[110]"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer (Full Height & Opaque BG) */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-[#47574a] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden z-[105] flex flex-col rounded-r-2xl`}
      >
        <div className="flex items-center justify-between p-5 border-b border-[#5c6c5f]">
          <span className="text-lg font-semibold text-white">Menu</span>

        </div>

        <div className="flex-1 overflow-y-auto flex flex-col space-y-3 p-5">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => {
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-medium rounded-md transition-all duration-300 ${isActive
                  ? 'bg-[#7b634c] text-white'
                  : 'text-white hover:bg-[#6a5844]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          {/* <button
            onClick={() => {
              closeMenu();
              navigate('/contact');
            }}
            className="bg-[#efefe8] text-[#282118] px-4 py-3 rounded-md hover:bg-[#e0d8c0] transition-all duration-300 font-semibold mt-4"
          >
            Inquiry
          </button> */}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed h-screen inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto z-[100]' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
};

export default Navbar;

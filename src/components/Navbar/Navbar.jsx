import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);    //Log in / book table are independent of the links. Add them to the overlay if mobile screen size but otherwise they are already shown in the navbar on other screen sizes

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);

      if (window.innerWidth > 1150) { //resets the toggleMenu to false when you have a larger screen so that if you go back to a smaller screen, the menu overlay is not instantly shown and isnt blocking the user on screen size change
        setToggleMenu(false);
      }
    };

    window.addEventListener('resize', handleResize); //call this function on resize

    return () => { //clean up for eventListener when the component is unmounted (although the navbar wont be unmounted)
      window.removeEventListener('resize', handleResize);
    };
  }, []); //call on component mount


  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => { setToggleMenu(true) }} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
            <ul className="app__navbar-smallscreen_links">
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
            {isMobile && ( //render the login / book table only if screen is mobile size
              <div className="app__navbar-smallscreen_login">
                <a href="#login" className="p__opensans">Log In / Register</a>
                <div />
                <a href="/" className="p__opensans">Book Table</a>
              </div>
            )

            }
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

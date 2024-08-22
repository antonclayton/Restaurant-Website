import React from 'react';

import './AboutUs.css';

import { images } from '../../constants';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Gericht is a fine dining establishment that specializes in German cuisine. It is our mission to show German heritage and food culture. </p>
        <button type="button" className="custom__button">Learn More</button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Gericht, a fine dining establishment, was founded in 2015 by culinary visionary Kevin Luo. Gericht has since become a World-renowned restaurant. </p>
        <button type="button" className="custom__button">Learn About Our History</button>
      </div>
    </div>

  </div>
);

export default AboutUs;

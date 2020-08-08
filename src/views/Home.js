import React from 'react';
// import sections
import Entry from '../components/sections/Entry';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Contact from '../components/sections/Contact';
import Portfolio from '../components/sections/portfolio/Portfolio';

const Home = () => {
  return (
    <>
      <Entry className="illustration-section-01" />
      <Portfolio />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Contact split />
    </>
  );
};

export default Home;

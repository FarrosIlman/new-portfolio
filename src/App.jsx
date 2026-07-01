import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NumbersWarp from './components/NumbersWarp';
import GalleryThemeSwitch from './components/GalleryThemeSwitch';
import Manifesto from './components/Manifesto';
import TimeTunnel from './components/TimeTunnel';
import JourneyTimeline from './components/JourneyTimeline';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import GlobalPolish from './components/GlobalPolish';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <>
      <GlobalPolish />
      <Navigation />
      <main>
        <Hero />
        <NumbersWarp />
        <GalleryThemeSwitch />
        <Manifesto />
        <TimeTunnel />
        <JourneyTimeline />
        <ContactCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;

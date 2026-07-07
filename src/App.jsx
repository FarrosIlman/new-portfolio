import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NumbersWarp from './components/NumbersWarp';
import GalleryThemeSwitch from './components/GalleryThemeSwitch';
import Manifesto from './components/Manifesto';
import TimeTunnel from './components/TimeTunnel';
import JourneyTimeline from './components/JourneyTimeline';
import ExperienceEducation from './components/ExperienceEducation';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import GlobalPolish from './components/GlobalPolish';
import BackToTop from './components/BackToTop';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <GlobalPolish />
      <Navigation />
      <main>
        <Hero />
        <NumbersWarp />
        <GalleryThemeSwitch />
        <Manifesto />
        <TimeTunnel />
        <JourneyTimeline />
        <ExperienceEducation />
        <ContactCTA />
      </main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
};

export default App;

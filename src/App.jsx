import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import GalleryThemeSwitch from './components/GalleryThemeSwitch';
import Manifesto from './components/Manifesto';
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
        <Manifesto />
        <JourneyTimeline />
        <ExperienceEducation />
        <GalleryThemeSwitch />
        <ContactCTA />
      </main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
};

export default App;

import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhatYouGet from './components/WhatYouGet';
import TargetAudience from './components/TargetAudience';
import AboutAuthor from './components/AboutAuthor';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <WhatYouGet />
      <HowItWorks />
      <TargetAudience />
      <AboutAuthor />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;


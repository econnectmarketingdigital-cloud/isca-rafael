import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhatYouGet from './components/WhatYouGet';
import TargetAudience from './components/TargetAudience';
import AboutAuthor from './components/AboutAuthor';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import InvestmentSection from './components/InvestmentSection';
import RiskZero from './components/RiskZero';
import UrgencySection from './components/UrgencySection';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <TargetAudience />
      <AboutAuthor />
      <WhatYouGet />
      <InvestmentSection />
      <RiskZero />
      <UrgencySection />
      <Guarantee />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;


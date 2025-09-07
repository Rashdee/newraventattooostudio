// src/Pages/Home.jsx
import HeroSection from "../Sections/HeroSection";
import TattooQuizSection from "../Sections/TattooQuizSection";
import AboutTattoos from "../Sections/AboutTattoos";
import TattooGallery from "../Sections/TattooGallery";
import TattooFacts from "../Sections/TattooFacts";
import TattooSpecial from "../Sections/TattooSpecial";
import TattooStyles from "../Sections/TattooStyles";
import ServicesSection from "../Sections/ServicesSection";
import QuickLinksSection from "../Sections/QuickLinksSection";
import TextRevealSection from "../Sections/TextRevealSection";
import ExplainEmail from "../Sections/ExplainEmail"
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TattooSpecial/>
      <TattooStyles/>
      <TattooQuizSection />
      <AboutTattoos/>
      <TattooGallery/>
      <ServicesSection/>
      <QuickLinksSection/>
      <TextRevealSection/>
      <ExplainEmail/>
    </div>
  );
};

export default Home;

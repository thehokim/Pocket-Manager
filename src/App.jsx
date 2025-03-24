// App.jsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatisticsSection from "./components/StatisticsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <TestimonialsSection />
      <StatisticsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

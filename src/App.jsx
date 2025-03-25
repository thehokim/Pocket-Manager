// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatisticsSection from "./components/StatisticsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Service from "./components/Service";


function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;

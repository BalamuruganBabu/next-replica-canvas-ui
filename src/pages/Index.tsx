
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import CompanyLogos from "@/components/CompanyLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <CompanyLogos />
      <FeatureCards />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "@/components/section/HeroSection";
import Home from "@/components/section/Product";
import ServicesSection from "@/components/section/ServicesSection ";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto md:mt-26 bg-slate-100  dark:bg-zinc-900">
      <HeroSection></HeroSection>
      <ServicesSection />
      <Home />
    </div>
  );
};

export default page;

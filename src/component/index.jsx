import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Servicesq";
import FAQ from "./FAQ";
import Footer from "./Footer";
import WhatsAppIcon from "./Whatsapp";
import Facility from "./Facility";
import Why from "./Why";

const MainComp = () => {
  return (
    <div>
      <WhatsAppIcon />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Facility />
      <FAQ />
      <Why />
      <Footer />
    </div>
  );
};

export default MainComp;

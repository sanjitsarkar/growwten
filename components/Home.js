import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LoginModal from "../components/LoginModal";
import OurMissionSection from "../components/OurMissionSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import { LoginModalContext } from "../lib/store/LoginModalStore";

const Home = () => {
    const { showLoginModal, setShowLoginModal } = useContext(LoginModalContext);
  return (
    <>
      {showLoginModal && <LoginModal />}
      <Header />
      <HeroSection />
      <WhyUsSection />
      <OurMissionSection />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;

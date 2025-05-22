import Banner from "../components/events/Banner";
import NavBar from "../common/NavBar";
import Testimonials from "../components/events/Testimonials";
import JoinUs from "../components/events/JoinUs";
import Event from "../components/home/Event";
import Footer from "../common/Footer";
import FAQ from "../common/FAQ";
import { useEffect } from "react";
import VentsCom from "../components/events/VentsCom";

const Events = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavBar />
      <Banner />
      <VentsCom />
      <Testimonials />
      <JoinUs />
      <FAQ />
      <Event />
      <Footer />
    </>
  );
};

export default Events;

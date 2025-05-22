import Banner from "../components/events/Banner";
import NavBar from "../common/NavBar";
import Vents from "../components/events/vents";
import Testimonials from "../components/events/Testimonials";
import JoinUs from "../components/events/JoinUs";
import Event from "../components/home/Event";
import Footer from "../common/Footer";
import FAQ from "../common/FAQ";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavBar />
      <Banner />
      <Vents />
      <Testimonials />
      <JoinUs />
      <FAQ />
      <Event />
      <Footer />
    </>
  );
};

export default Events;

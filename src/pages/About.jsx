import NavBar from "../common/NavBarCom";
import Banner from "../components/about/Banner";
import History from "../components/about/History";
import Mv from "../components/about/Mv";
import Teams from "../components/about/Teams";
import Event from "../components/home/Event";
import Footer from "../common/FooterCom";
import FAQ from "../common/FAQ";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavBar />
      <Banner />
      <History />
      <Mv />
      <Teams />
      <FAQ />
      <Event />
      <Footer />
    </>
  );
};

export default About;

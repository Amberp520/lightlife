import { useEffect } from "react";
import Footer from "../common/FooterCom";
import NavBar from "../common/NavBarCom";
import Banner from "../components/home/Banner";
import Charity from "../components/home/Charity";
import Event from "../components/home/Event";
import Volunteers from "../components/home/Volunteers";
import WhatWeDo from "../components/home/WhatWeDo";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavBar />
      <Banner />
      <WhatWeDo />
      <Charity />
      <Volunteers />
      <Event />
      <Footer />
    </>
  );
};

export default Home;

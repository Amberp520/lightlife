import Footer from "../common/Footer";
import NavBar from "../common/NavBar";
import Banner from "../components/home/Banner";
import Charity from "../components/home/Charity";
import Event from "../components/home/Event";
import Volunteers from "../components/home/Volunteers";
import WhatWeDo from "../components/home/WhatWeDo";

const Home = () => {
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

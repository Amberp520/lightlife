import NavBar from "../common/NavBar";
import Banner from "../components/home/Banner";
import Charity from "../components/home/Charity";
import Events from "../components/home/Events";
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
      <Events />
    </>
  );
};

export default Home;

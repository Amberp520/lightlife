import NavBar from "../common/NavBar";
import Banner from "../components/about/Banner";
import History from "../components/about/History";
import Mv from "../components/about/Mv";
import Teams from "../components/about/Teams";
import Events from "../components/home/Events";
import Footer from "../common/Footer";
import FAQ from "../common/FAQ";

const About = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <History />
      <Mv/>
      <Teams/>
      <FAQ />
      <Events/>
      <Footer/>
    </>
  );
};

export default About;

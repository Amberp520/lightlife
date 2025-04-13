import { Link } from "react-router-dom";
import join from "../../assets/events/join2.png";

const JoinUs = () => {
  return (
    <>
      <div className="">
        <p className="text-[2rem] text-center font-bitter pt-[5rem] pb-[3rem]">
          Join <span className="text-green-900">Us</span> Today !
        </p>
        <div className="flex justify-between items-center relative overflow-hidden h-[400px] bg-gray-900 text-white">
          <img
            className="relative h-full hidden lg:block z-10 ml-20 translate-y-4 w-auto"
            src={join}
            alt=""
          />
          <div className="absolute -left-[170px] -bottom-[250px] -rotate-45 rounded-[70px] h-[500px] w-[500px] bg-primary" />
          <div className="absolute -right-[140px] -bottom-[100px] -rotate-45 rounded-[70px] h-[600px] w-[600px] bg-primary" />
          <div className="pl-20 lg:pl-0 w-[450px] pr-20">
            <h1 className="relative text-[22px] mb-5 font-bitter font-semibold">
              YOUR SUPPORT MAKES A DIFFERENCE
            </h1>
            <p className="relative mb-5">
              Join us in creating meaningful impact—your donation helps provide
              essential resources, support, and hope to those who need it most.
              Together, we can build a better tomorrow for every community.
            </p>
            <Link
              to="/donate"
              className="relative text-[14px] bg-white py-2 px-8 rounded-full text-black"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;

import Volunteers1 from "../../assets/home/Volunteers1.png";
import Volunteers2 from "../../assets/home/Volunteers3.png";
import Volunteers3 from "../../assets/home/Volunteers2.png";
import Volunteers4 from "../../assets/home/Volunteers4.png";
import line from "../../assets/home/lines/line4.svg";
import { Link } from "react-router-dom";

const Volunteers = () => {
  return (
    <div className="flex flex-col items-center mb-[210px]">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-5 w-full">
        <div className="relative hidden lg:flex h-[300px] w-fit items-center justify-center">
          <img
            className="relative z-10 h-[250px] w-[300px] object-cover rounded-lg"
            src={Volunteers1}
            alt="Volunteers"
          />
          <img
            className="absolute -top-4 -left-[15%] h-[90px]"
            src={Volunteers2}
            alt=""
          />
          <img
            className="absolute -top-3 -right-[15%] h-[100px]"
            src={Volunteers3}
            alt=""
          />
          <img
            className="absolute -bottom-3 h-[120px] -left-[15%]"
            src={Volunteers4}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <span className="text-[#CC9068]">_</span>Volunteers
          </p>
          <h1 className="text-xl font-bold text-gray-800">
            Unselfish love of one’s <br /> fellow men
          </h1>
          <p className="w-[350px] lg:w-full">
            Charity is the act of giving help to those in{" "}
            <br className="hidden lg:block" /> need of it. it is a humanitarian
            act. it <br className="hidden lg:block" /> involves giving money
            goods or time and <br className="hidden lg:block" /> effort to those
            who need it.
          </p>
        </div>
      </div>
      <div className="w-[60%] mb-5 py-20">
        <h1 className="text-2xl mb-2 font-bold text-gray-800">
          Highest form of love
        </h1>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row w-full justify-between items-center">
          <p className="text-[14px]">
            The practice of charity means the voluntary giving of help to{" "}
            <br className="hidden md:block" /> those in need, as a humanitairan
            act. There are a number of <br className="hidden md:block" />{" "}
            philosophies.
          </p>
          <Link to="/contact">
            <button className="w-full md:w-fit py-2 px-5 bg-primary rounded-md text-white">
              Send request
            </button>
          </Link>
        </div>
      </div>
      <div className="flex mb-10 gap-4 items-center">
        <p className="text-2xl mb-2 font-bold text-gray-800">Love</p>
        <img
          className="opacity-50 w-[300px] md:w-[600px] lg:w-[800px] xl:w-full"
          src={line}
          alt="line"
        />
        <p className="text-2xl mb-2 font-bold text-gray-800">Found</p>
      </div>
    </div>
  );
};

export default Volunteers;

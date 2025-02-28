import Volunteers1 from "../../assets/home/Volunteers1.png";
import Volunteers2 from "../../assets/home/Volunteers3.png";
import Volunteers3 from "../../assets/home/Volunteers2.png";
import Volunteers4 from "../../assets/home/Volunteers4.png";
import line from '../../assets/home/lines/line4.svg'

const Volunteers = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-5 w-full">
        <div className="relative h-[300px] flex items-center justify-center">
          <img
            className="relative opacity-90 z-10 h-[240px] w-[240px] object-cover rounded-lg"
            src={Volunteers1}
            alt="Volunteers"
          />
          <img
            className="absolute -top-3 left-[24%] h-[80px]"
            src={Volunteers2}
            alt=""
          />
          <img
            className="absolute -top-3 right-[24%] h-[100px]"
            src={Volunteers3}
            alt=""
          />
          <img
            className="absolute -bottom-3 h-[100px] left-[24%]"
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
          <p>
            Charity is the act of giving help to those in <br /> need of it. it
            is a humanitarian act. it <br /> involves giving money goods or time
            and <br /> effort to those who need it.
          </p>
        </div>
      </div>
      <div className="w-[60%] mb-5 py-20">
        <h1 className="text-2xl mb-2 font-bold text-gray-800">
          Highest form of love
        </h1>
        <div className="flex w-full justify-between items-center">
          <p className="text-[14px]">
            The practice of charity means the voluntary giving of help to <br />{" "}
            those in need, as a humanitairan act. There are a number of <br />{" "}
            philosophies.
          </p>
          <button className="py-2 px-5 bg-primary rounded-md text-white">
            Send request
          </button>
        </div>
      </div>
      <div className="flex mb-10 gap-4 items-center">
        <p className="text-2xl mb-2 font-bold text-gray-800">Love</p>
        <img src={line} alt="line" />
        <p className="text-2xl mb-2 font-bold text-gray-800">Found</p>
      </div>
    </div>
  );
};

export default Volunteers;

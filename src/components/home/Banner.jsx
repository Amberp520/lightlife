import hand from "../../assets/home/banner_hand.png";
import bubble1 from "../../assets/home/banner_bubble1.png";
import bubble2 from "../../assets/home/banner_bubble2.png";
import bubble3 from "../../assets/home/banner_bubble3.png";
import bubble4 from "../../assets/home/banner_bubble4.png";
import bubble5 from "../../assets/home/banner_bubble5.png";
import line from "../../assets/home/lines/line1.svg";

const Banner = () => {
  return (
    <div className="overflow-y-hidden flex items-center relative h-[90vh]">
      <div className="flex flex-col items-center lg:items-start w-full -translate-y-20 lg:pl-20">
        <p className="text-[24px] ">Small step to make a</p>
        <h1 className="text-[64px] font-bitter font-bold">Big Impact</h1>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <button className="py-2 px-5 bg-primary text-white text-[13px] rounded-full">
            DONATE NOW
          </button>
          <p>
            We are people who wish to make a big impact <br /> for society in
            needs
          </p>
        </div>
      </div>
      <img
        className="translate-y-[150px] rotate-12 bottom-0 absolute hidden xl:block object-cover h-[550px]"
        src={hand}
        alt="hand"
      />
      <img
        className="right-[420px] bottom-[180px] absolute hidden lg:block h-[90px] w-[90px] object-cover rounded-full"
        src={bubble1}
        alt="bubble"
      />
      <img
        className="right-[380px] bottom-[300px] object-top absolute hidden lg:block h-[130px] w-[130px] object-cover rounded-full"
        src={bubble2}
        alt="bubble2"
      />
      <img
        className="right-[250px] bottom-[210px] object-top absolute hidden lg:block h-[130px] w-[130px] object-cover rounded-full"
        src={bubble3}
        alt="bubble3"
      />
      <img
        className="right-[270px] bottom-[370px] object-top absolute hidden lg:block h-[90px] w-[90px] object-cover rounded-full"
        src={bubble4}
        alt="bubble4"
      />
      <img
        className="right-[120px] bottom-[310px] object-top absolute hidden lg:block h-[130px] w-[130px] object-cover rounded-full"
        src={bubble5}
        alt="bubble5"
      />
      <img
        className="opacity-50 absolute hidden lg:block -top-20 right-[30%] -z-10"
        src={line}
        alt=""
      />
    </div>
  );
};

export default Banner;

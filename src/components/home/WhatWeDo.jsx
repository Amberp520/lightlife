import child from "../../assets/home/what_we_do.png";
import line from "../../assets/home/lines/line2.svg";

const WhatWeDo = () => {
  return (
    <div className="relative flex flex-col gap-6 bg-[#F3F2E7] px-10 md:pl-[100px] xl:pl-[200px] py-16">
      <p className="relative z-2">
        <span className="text-primary">_</span>WHAT WE DO
      </p>
      <h1 className="relative max-w-[600px] lg:w-full z-20 text-[30px] font-bitter font-bold text-gray-800">
        Whatever it is that you care about, there <br className="hidden lg:block" /> will be a charity
        working on it. Charities <span className="underline">help</span>
        <br className="hidden lg:block" /> <span className="underline">in lots </span> of different ways
      </h1>
      <p className="z-20">
        The practice of charity means the voluntary <br /> giving of help to
        those in need, as a humanitairan <br /> act. There are a number of
        philosophies.
      </p> 
      <div className="absolute hidden lg:block -bottom-10 right-[30%] h-[230px] w-[230px]">
        <img
          src={child}
          alt=""
          className="relative rounded-lg z-[10] object-cover w-full h-full"
        />
          <div className="absolute top-4 -left-4 h-[230px] w-[230px] rounded-lg  border-primary/60 border-[3px]" />
      </div>
      <img className="absolute z-1 top-0 right-0 h-[400px] opacity-60" src={line} alt="line" />
    </div>
  );
};

export default WhatWeDo;

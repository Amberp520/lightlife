import child from "../../assets/home/what_we_do.png";
import line from "../../assets/home/lines/line2.svg";

const WhatWeDo = () => {
  return (
    <div className="relative flex flex-col gap-6 bg-[#F3F2E7] pl-[200px] py-16">
      <p>
        <span className="text-[#CC9068]">_</span>WHAT WE DO
      </p>
      <h1 className="text-[30px] font-bitter font-bold text-gray-800">
        Whatever it is that you care about, there <br /> will be a charity
        working on it. Charities <span className="underline">help</span>
        <br /> <span className="underline">in lots </span> of different ways
      </h1>
      <p>
        The practice of charity means the voluntary <br /> giving of help to
        those in need, as a humanitairan <br /> act. There are a number of
        philosophies.
      </p>
      <div className="absolute -bottom-10 right-[30%] h-[230px] w-[230px]">
        <img
          src={child}
          alt=""
          className="relative rounded-lg z-[10] object-cover w-full h-full"
        />
          <div className="absolute top-4 -left-4 h-[230px] w-[230px] rounded-lg  border-[#CFA284] border-[3px]" />
      </div>
      <img className="absolute top-0 right-0 h-[400px]" src={line} alt="line" />
    </div>
  );
};

export default WhatWeDo;

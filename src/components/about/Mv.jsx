import React from "react";
import kind from "../../assets/about/kind.jpg";
import hand from "../../assets/about/hand.jpg";
import donation from "../../assets/about/donations.jpg";
import aid from "../../assets/about/Aid.jpg";

const Mv = () => {
  return (
    <div className="py-20">
      <div className="h-full grid grid-cols-[50%_50%] place-items-center px-20 py-20">
        <div className="flex flex-col h-full justify-center w-[27rem]">
          <p className="text-[2rem] pb-3 font-bitter">Our Vision</p>
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            culpa assumenda suscipit fugit sint voluptates quidem tempore soluta
            illo doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Corrupti, ab. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus, nostrum.
          </p>
          <button className="py-2 px-5 bg-primary rounded-lg text-white">
            Learn More
          </button>
        </div>
        <div>
          <img className="w-[38rem] rounded-xl" src={kind} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-[50%_50%] px-20">
        <div className="grid grid-cols-2 gap-7">
          <div className="flex items-center h-full">
            <img
              className="h-[90%] object-cover rounded-[70px_0_70px_0]"
              src={aid}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-7 h-full">
            <img
              className="object-cover rounded-[50px_0_50px_0]"
              src={hand}
              alt=""
            />
            <img
              className="object-cover rounded-[0_50px_0_50px]"
              src={donation}
              alt=""
            />
          </div>
        </div>
        <div className=" h-full flex justify-center content-center">
          <div className="flex flex-col justify-center w-[27rem]">
            <p className="text-[2rem] pb-3 font-bitter">Our Mission</p>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              culpa assumenda suscipit fugit sint voluptates quidem tempore
              soluta illo doloremque? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Corrupti, ab. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ducimus, nostrum.
            </p>
            <button className="py-2 px-5 bg-primary rounded-lg text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mv;

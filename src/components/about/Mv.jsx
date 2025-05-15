import kind from "../../assets/about/kind.jpg";
import hand from "../../assets/about/hand.jpg";
import donation from "../../assets/about/donations.jpg";
import aid from "../../assets/about/Aid.jpg";
import children from "../../assets/about/children.jpg"

const Mv = () => {
  return (
    <div className="lg:py-20">
      <div className="h-full grid lg:grid-cols-[50%_48%] gap-[50px] place-items-center lg:px-20 py-20">
        <div className="block lg:hidden mb-7">
          <img
            className="w-full md:w-[38rem] h-[370px] lg:rounded-xl object-cover"
            src={kind}
            alt=""
          />
        </div>
        <div className="flex flex-col h-full justify-center lg:w-[27rem] px-5">
          <p className="text-[2rem] pb-3 font-bitter">Our Vision</p>
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            culpa assumenda suscipit fugit sint voluptates quidem tempore soluta
            illo doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Corrupti, ab. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus, nostrum.
          </p>
          <button className="py-2 px-5 bg-primary rounded-lg text-white">
            Donate Now
          </button>
        </div>
        <div className="hidden lg:block">
          <img
            className="w-[38rem] h-[370px] lg:rounded-xl object-cover"
            src={kind}
            alt=""
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-[48%_50%] gap-[50px] place-items-center lg:px-20">
        <div className="hidden grid-cols-2 gap-7">
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
        <div className="w-full block mb-7">
          <img
            className="w-full md:w-[38rem] h-[370px] object-cover lg:rounded-xl"
            src={children}
            alt=""
          />
        </div>
        <div className="flex flex-col h-full justify-center lg:w-[27rem] px-5">
          <p className="text-[2rem] pb-3 font-bitter">Our Mission</p>
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            culpa assumenda suscipit fugit sint voluptates quidem tempore soluta
            illo doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Corrupti, ab. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus, nostrum.
          </p>
          <button className="py-2 px-5 bg-primary rounded-lg text-white">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mv;

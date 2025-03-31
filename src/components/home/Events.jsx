import event1 from "../../assets/home/event1.png";
import event2 from "../../assets/home/event2.png";
import line from "../../assets/home/lines/line5.svg";

const Events = () => {
  return (
    <div className="absolute flex justify-center w-full translate-y-[-200px]">
      <div className="grid lg:grid-cols-2 lg:gap-[50px] px-10 lg:px-20 py-8 lg:h-[380px] w-[80%] bg-[#F3F2E7] shadow-lg rounded-lg">
        <div>
          <p className="text-[13px] mb-4">
            <span>_</span>EVENTS
          </p>
          <h2 className="text-2xl mb-4 font-bold text-gray-800">
            AMERICAN LEADERSHIP <br /> ON THE SDGS
          </h2>
          <p className="mb-7 text-[14px] text-justify">
            People across the U.S. are making the{" "}
            <br className="hidden lg:block" /> Sustainable Development Goals a
            local <br className="hidden lg:block" /> agenda. Explore how
            communities are <br /> implementing the SDGs across the country.
          </p>
          <button className="rounded-md text-[14px] py-2 px-5 bg-primary text-white">
            View event
          </button>
        </div>
        <div className="hidden lg:flex relative gap-5 h-full">
          <div className="flex items-start h-full">
            <img
              src={event1}
              alt="event1"
              className="relative z-10 h-[220px] w-[160px] object-cover rounded-lg"
            />
          </div>
          <img
            className="absolute top-14 right-[145px] h-[100px]"
            src={line}
            alt="line"
          />
          <div className="flex items-end h-full">
            <img
              src={event2}
              alt="event2"
              className="relative z-10 h-[220px] w-[160px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

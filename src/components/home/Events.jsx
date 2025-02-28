const Events = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-[40%_57%] gap-[50px] px-20 py-8 w-[80%] bg-[#F3F2E7] rounded-lg">
        <div>
          <p className="text-[13px] mb-4">
            <span>_</span>EVENTS
          </p>
          <h2 className="text-2xl mb-4 font-bold text-gray-800">
            AMERICAN LEADERSHIP <br /> ON THE SDGS
          </h2>
          <p className="mb-4 text-[14px]">
            People across the U.S. are making the <br /> Sustainable Development
            Goals a local <br /> agenda. Explore how communities are <br />{" "}
            implementing the SDGs across the country.
          </p>
          <button className="rounded-md text-[14px] py-2 px-4 bg-primary text-white">View event</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Events;

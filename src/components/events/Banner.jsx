import play from "../../assets/events/play.jpg";

const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh] relative mb-[4rem]">
        <img
          className="h-full w-full object-cover absolute top-0 left-0"
          src={play}
          alt=""
        />
        <div className="h-full w-full absolute bg-black top-0 opacity-60" />
        <div className="relative z-10">
          <p className="text-[21px] text-center text-white font-bitter">
            ~ Events
          </p>
          <p className="text-[45px] text-center text-white font-bitter">
            Discover Our New Updates & Charity <br /> News Content{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;

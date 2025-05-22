import NavBar from "../common/NavBar";
import img from "../assets/donate.jpg";
import Footer from "../common/Footer";
import Event from "../components/home/Event";
import { useEffect } from "react";

const Donate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="flex justify-center w-full mb-[260px] mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-lg h-[90dvh] w-[90%] rounded-lg overflow-x-hidden">
          <img
            className="hidden lg:block grayscale h-[90dvh] w-full object-cover"
            src={img}
            alt="donate image"
          />
          <div className="flex flex-col justify-center p-10">
            <h1 className="text-[28px] text-center font-bitter font-semibold">
              Make a Donation
            </h1>
            <p className="text-[14px] my-5">
              Every donation{" "}
              <span className="text-primary font-semibold">big</span> or{" "}
              <span className="text-primary font-semibold">small</span> makes a
              meaningful impact on our cause. Thank you for playing your part
              and helping us make a difference.
            </p>
            <form className="grid grid-cols-2 gap-5">
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-[14px] font-semibold">Your Name</label>
                <input
                  className="placeholder:text-black placeholder:text-[14px] w-full border-[1.5px] text-[15px] border-black rounded-md focus:outline-none p-2"
                  type="text"
                  placeholder="John Doe"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold">Your Email</label>
                <input
                  className="placeholder:text-black placeholder:text-[14px] w-full border-[1.5px] text-[15px] border-black rounded-md focus:outline-none p-2"
                  type="email"
                  placeholder="johndoe24@gmail.com"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold">Amount</label>
                <input
                  className="placeholder:text-black placeholder:text-[14px] w-full border-[1.5px] text-[15px] border-black rounded-md focus:outline-none p-2"
                  type="number"
                  placeholder="₦10,000"
                  list="naira"
                  name=""
                  id=""
                />
              </div>
              <button className="rounded-md col-span-2 py-3 text-center bg-primary text-white text-[14px] my-2">
                Submit Donate
              </button>
            </form>
          </div>
        </div>
      </div>
      <Event />
      <Footer />
    </div>
  );
};

export default Donate;

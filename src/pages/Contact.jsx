import { useEffect, useState } from "react";
import {
  // CiClock2,
  CiLocationOn,
  CiMail,
} from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import Event from "../components/home/Event";
import { Map } from "../utils/map";
import NavBar from "../common/NavBarCom";
import Footer from "../common/FooterCom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="mx-auto container mb-10">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 shadow-md lg:mx-12 lg:mt-12 p-5 lg:p-12">
          {/* Left Section */}
          <div>
            <div className="flex flex-col gap-4 mb-14">
              <p className="font-light text-[30px]">Address</p>
              <address className="flex items-center gap-2 not-italic">
                <CiLocationOn className="text-[25px]" />
                <p className="text-gray-500">No 5/6 km onitsha express way Enugu.</p>
              </address>
            </div>
            <div className="flex flex-col gap-4 mb-14">
              <p className="font-light text-[30px]">Phones</p>
              <div className="flex items-center gap-2">
                <PiPhoneThin className="text-[25px]" />
                <p className="text-gray-500">+234813820230</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-14">
              <p className="font-light text-[30px]">Email Address</p>
              <div className="flex items-center gap-2">
                <CiMail className="text-[25px]" />
                <a href="mailto:mathiasemenike@gmail.com" className="text-gray-500">mathiasemenike@gmail.com</a>
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 mb-14">
              <p className="font-light text-[30px]">Working Hours</p>
              <div className="flex items-center gap-2">
                <CiClock2 className="text-[25px]" />
                <p className="text-gray-500">Mon-Fri: 9:00AM - 5:00PM</p>
              </div>
            </div> */}
          </div>

          {/* Right Section */}
          <div>
            <p className="mb-10 font-light text-[30px]">Send Your Question</p>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text"
                    className="h-[50px] bg-transparent border border-gray-400 outline-none text-[18px] px-5"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="h-[50px] bg-transparent border border-gray-400 outline-none text-[18px] px-5"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    cols={50}
                    rows={10}
                    className="p-4 bg-transparent border border-gray-400 outline-none text-[18px]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${
                    isLoading ? "cursor-not-allowed" : "cursor-pointer"
                  } h-[50px] bg-transparent border border-black outline-none text-[18px] w-full px-5`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Map />
      <Event />
      <Footer />
    </div>
  );
};

export default Contact;

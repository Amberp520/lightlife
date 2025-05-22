import NavBar from "../common/NavBar";
import img from "../assets/donate.jpg";
import Footer from "../common/Footer";
import Event from "../components/home/Event";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Donate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const emailForm = {
      ...formData,
      description:
        formData.description.trim() === ""
          ? "User didn't add a donation description"
          : formData.description,
    };

    // Send auto-reply to user
    try {
      // Send auto-reply to user
      const result = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        emailForm,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log(result.status);
      toast.success(
        "Thank you for your donation! We have sent you a confirmation email."
      );
      setFormData({
        name: "",
        email: "",
        description: "",
        amount: "",
      });
    } catch (err) {
      console.error(err.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center w-full mb-[260px] mt-14">
        <div className="grid grid-cols-1 no_swiper lg:grid-cols-2 bg-white shadow-lg h-[100dvh] w-[90%] rounded-lg overflow-hidden">
          <img
            className="hidden lg:block grayscale h-[100dvh] w-full object-cover"
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
            <form onSubmit={sendEmail} className="grid grid-cols-2 gap-5">
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-[14px] font-semibold">Your Name</label>
                <input
                  className="placeholder:text-black placeholder:text-[14px] w-full border-[1.5px] text-[15px] border-black rounded-md focus:outline-none p-2"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  name=""
                  onChange={handleChange}
                  required
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold">Your Email</label>
                <input
                  className="placeholder:text-black placeholder:text-[14px] w-full border-[1.5px] text-[15px] border-black rounded-md focus:outline-none p-2"
                  type="email"
                  placeholder="johndoe24@gmail.com"
                  value={formData.email}
                  name=""
                  onChange={handleChange}
                  required
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold">Amount</label>
                <input
                  className="placeholder:text-black placeholder:text-[14px] w-full border-[1.5px] text-[15px] border-black rounded-md focus:outline-none p-2"
                  type="number"
                  placeholder="₦10,000"
                  value={formData.amount}
                  name=""
                  onChange={handleChange}
                  required
                  id="amount"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-[14px] font-semibold">
                  Reason for donation
                </label>
                <textarea
                  className="placeholder:text-black placeholder:text-[14px] w-full border-[1.5px] text-[15px] border-black rounded-md focus:outline-none p-2"
                  type="text"
                  placeholder="Enter reason for donation (optional)"
                  name=""
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  id="description"
                />
              </div>
              <button className="rounded-md col-span-2 py-3 text-center bg-primary text-white text-[14px] my-2">
                {isLoading ? "Sending..." : "Submit Donation"}
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

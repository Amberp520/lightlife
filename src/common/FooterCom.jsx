import { FaInstagram, FaLinkedin, FaMeta, FaTwitter } from "react-icons/fa6";
import logo from "../assets/logo2.png";

const Footer = () => {
  const footerInfo = [
    {
      title: "NEW YORK OFFICE",
      details: [
        "United Nations Foundation",
        "320 East 43rd Street, 3rd Floor",
        "New York, NY 10017",
        "Phone: 212.697.3315",
      ],
    },
    {
      title: "WHAT WE DO",
      details: ["Issues", "Initiatives", "Communities"],
    },
    {
      title: "WHY WE DO IT",
      details: ["Overview"],
    },
    {
      title: "WHO WE ARE",
      details: [
        "Our Approach",
        "Our Financials",
        "Our Mission and History",
        "Our Partners",
      ],
    },
    {
      title: "GET INVOLVED",
      details: ["Give", "Learn", "Act"],
    },
  ];

  return (
    <div className="flex items-end text-white bg-[#004f00] h-fit lg:h-[500px] py-7 px-10 lg:px-20">
      <div className="flex flex-col justify-between mt-[150px] lg:h-1/2 w-full">
        <div className="flex flex-wrap gap-10 justify-between w-full">
          {footerInfo.map((info, index) => (
            <div
              className="flex flex-col gap-3 w-[45%] md:w-[25%] lg:w-fit"
              key={index}
            >
              <h1 className="font-bitter text-[15px] opacity-70">
                {info.title}
              </h1>
              <div>
                {info.details.map((item, i) => (
                  <div key={i} className="text-[14px]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <img
            className="lg:hidden w-[150px] h-full object-cover relative right-6"
            src={logo}
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 py-5 lg:py-0 items-center justify-between">
          <img
            className="hidden lg:block w-[150px] h-full object-cover relative right-6"
            src={logo}
            alt=""
          />
          <div className="flex flex-wrap gap-10">
            <p className="text-[14px]">Privacy Policy</p>
            <p className="text-[14px]">Contact Us</p>
            <div className="h-[25px] w-[2px] bg-white" />
            <FaMeta className="text-[19px]" />
            <FaInstagram className="text-[19px]" />
            <FaLinkedin className="text-[19px]" />
            <FaTwitter className="text-[19px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

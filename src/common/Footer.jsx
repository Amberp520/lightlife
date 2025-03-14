import { FaInstagram, FaLinkedin, FaMeta, FaTwitter } from "react-icons/fa6";
import logo from "../assets/logo.svg";

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
    <div className="flex items-end text-white bg-primary h-[500px] py-7 px-20">
      <div className="flex flex-col justify-between h-1/2 w-full">
        <div className="flex justify-between w-full">
          {footerInfo.map((info, index) => (
            <div className="flex flex-col gap-3" key={index}>
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
        </div>
        <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="flex gap-10">
            <p className="text-[14px]">Privacy Policy</p>
            <p className="text-[14px]">Contact Us</p>
            <div className="h-[25px] w-[2px] bg-white"/>
            <FaMeta className="text-[19px]"/>
            <FaInstagram className="text-[19px]"/>
            <FaLinkedin className="text-[19px]"/>
            <FaTwitter className="text-[19px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

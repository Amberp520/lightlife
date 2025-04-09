import { useState } from "react";
import { faqItems } from "../utils/constant";
import FAQItem from "../utils/FAQItem";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full gap-10 lg:gap-0 px-5 justify-between mb-[260px] lg:px-20 py-[7rem]">
      <div className="flex flex-col h-full justify-center">
        <h1 className="mb-4 text-[22px] font-bitter font-semibold">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="mb-5 text-[14px]">
          At our foundation, we are committed to making a lasting impact on the <br />
          lives of widows, orphans, and underprivileged communities. To help you <br />
          understand our mission and how you can get involved, we&apos;ve answered <br />
          some of the most common questions below. If you have any additional <br />
          inquiries, feel free to reach out we&apos;re always here to help!
        </p>
        <Link
          to="/contact"
          className="relative w-fit text-[14px] bg-primary py-2 px-8 rounded-full text-white"
        >
          Support
        </Link>
      </div>
      <section id="faqs" className="w-full  h-full px-4 md:px-0">
        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <FAQItem
              key={i}
              isOpen={i === openIndex}
              onClick={() => toggleFAQ(i)}
              question={faq.word}
              answer={faq.description}
              Icon={faq.Icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;

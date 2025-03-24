import {
  FaHandHoldingHeart,
  FaUserShield,
  FaClinicMedical,
  FaHandHoldingUsd,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";

const faqItems = [
  {
    num: 1,
    word: "What causes does your foundation support?",
    description:
      "Our foundation focuses on providing healthcare assistance, supporting widows and orphans, offering educational aid, and helping underprivileged communities with essential needs.",
    Icon: FaHandHoldingHeart, // Heart in hand icon for charity and care
  },
  {
    num: 2,
    word: "How do you support widows and orphans?",
    description:
      "We provide financial assistance, vocational training, and emotional support to widows while ensuring orphans receive proper education, shelter, and healthcare.",
    Icon: FaUserShield, // Shield with a person icon for protection and care
  },
  {
    num: 3,
    word: "Do you offer medical aid?",
    description:
      "Yes, we support healthcare initiatives by organizing free medical camps, providing medications, and funding treatments for those in need.",
    Icon: FaClinicMedical, // Medical cross icon for healthcare support
  },
  {
    num: 4,
    word: "How can I donate to the foundation?",
    description:
      "You can donate through bank transfers, credit/debit cards, mobile payment platforms, or in person at our designated donation centers.",
    Icon: FaHandHoldingUsd, // Hand holding a dollar sign for donations
  },
  {
    num: 5,
    word: "How do you ensure donations reach those in need?",
    description:
      "We maintain transparency by providing regular reports on how funds are utilized and working closely with local communities to address urgent needs.",
    Icon: FaUsers, // Group of people icon for community and transparency
  },
  {
    num: 6,
    word: "Do you provide educational support?",
    description:
      "Yes, we offer scholarships, school supplies, and mentorship programs to help children from disadvantaged backgrounds get quality education.",
    Icon: FaBookOpen, // Open book icon for education and learning
  },
];

export { faqItems };

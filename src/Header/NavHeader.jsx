import { NavLink, Route, useNavigate } from "react-router-dom";
import dotProLogo from "../assets/Logo/dotProLogo.png";
import SearchIcon from "../assets/Icons/SearchIcon";
import Button from "../components/Button";
import PhoneIcon from "../assets/Icons/PhoneIcon";
import FeedbackIcon from "../assets/Icons/FeedbackIcon";
import MainWidthContainer from "../Layouts/MainWidthContainer";
import { RoutesLink } from "../Utilities/RoutesLink";
import HamburgerIcon from "../assets/Icons/HamburgerIcon";
import { useState } from "react";
import Modal from "../components/Modal";
import Feedbackform from "../components/Forms/FeedbackForm";
import CloseIcon from "../assets/Icons/CloseIcon";
const NavHeader = () => {
  const navigate = useNavigate(); // Updated line
  const [openFeedback, setOpenFeedback] = useState(false);
  const feedbackToggle = () => setOpenFeedback(!openFeedback);
  const [navMenu, setNavMenu] = useState(false);
  const HeaderArray = [{
    text: "About Us",
    link: RoutesLink?.aboutUs,
    count: ""
  }, {
    text: "Products",
    link: RoutesLink?.products,
    count: ""
  }, {
    text: "Facilities",
    link: RoutesLink?.facilities,
    number: ""
  }, {
    text: "Partners",
    link: RoutesLink?.partners,
    number: "03"
  }, {
    text: "Customers",
    link: RoutesLink?.customers,
    number: "10+"
  }, {
    text: "Case Study",
    link: RoutesLink?.CaseStudies,
    number: ""
  }
  ]
  return (

    <MainWidthContainer>
      <div className="flex justify-between items-center py-[8px] px-[12px] lg:px-[0px]">
        <div className="flex gap-[12px] ">
          <button
            onClick={() => setNavMenu(true)}
            className=" me-[8px] lg:hidden">
            <HamburgerIcon />
          </button>
          <img src={dotProLogo} alt="dot pro logo" onClick={() => navigate('/')} className="cursor-pointer w-[100px] h-[100px]" />
        </div>

        <nav>
          <ul className="hidden lg:flex lg:gap-[12px] 2xl:gap-[24px] list-none ">
            {HeaderArray?.map((header) => <li
              key={header?.text}
            >
              <NavLink
                to={header?.link}
                className="contact-text no-underline !font-[600] lg:!text-[12px] xl:!text-[14px] ">{header?.text}
                {header?.number && <span className="font-[700] lg:text-[12px] xl-text-[14px] leading-[20px] text-[#FFFFFF] bg-[#2B5592] rounded-[50px] px-[12px] py-[2px]">{header?.number}</span>}
              </NavLink>
            </li>)}
          </ul>
        </nav>
        <div className="flex gap-[32px] items-center">
          <SearchIcon />
          <div className="flex gap-[12px]">
            <Button varient="secondary" onClick={feedbackToggle}>
              <div className="flex items-center gap-[4px]">
                <FeedbackIcon /> <span className="hidden md:flex">Feedback</span>
              </div>
            </Button>
            <Button >
              <div className="flex items-center gap-[4px]">
                <PhoneIcon /> <span className="hidden md:flex">Contact</span>
              </div>
            </Button>
            {/* <Button text="Feedback" varient="secondary" icon={<FeedbackIcon />} /> */}
            {/* <Button text="Contact" icon={<PhoneIcon />} /> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 z-40 transition-opacity duration-300 ${navMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setNavMenu(false)}
      ></div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 left-0 h-full w-full  bg-white z-50  shadow-lg transform transition-transform duration-300 ${navMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-end items-center mb-6 me-[12px] mt-[12px]">
          <button onClick={() => setNavMenu(false)}>
            <CloseIcon />
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          {HeaderArray.map((header) => (
            <li key={header.text}>
              <NavLink
                to={header.link}
                onClick={() => setNavMenu(false)}
                className="block text-[14px] font-[600] text-[#14181F] hover:text-primary border-b-[1px] border-[#F3F4F5] p-[16px]"
              >
                {header.text}
                {header.number && (
                  <span className="ml-2 text-[12px] bg-[#2B5592] text-white rounded-full px-[10px] py-[2px]">
                    {header.number}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Modal isOpen={openFeedback} modalToggle={feedbackToggle} >
        <Feedbackform tagName="Valueble Feedback" title="Share your Valuable Feedback" desc="Your feedback is invaluable to us! It helps us enhance our products, improve quality, and better serve your needs. Share your thoughts and be a part of our journey towards excellence." submitText="Submit"
          modalToggle={feedbackToggle}
        />
      </Modal>
    </MainWidthContainer>
  )
}
export default NavHeader;
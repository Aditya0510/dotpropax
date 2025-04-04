import { NavLink, Route, useNavigate } from "react-router-dom";
import dotProLogo from "../assets/Logo/dotProLogo.png";
import SearchIcon from "../assets/Icons/SearchIcon";
import Button from "../components/Button";
import PhoneIcon from "../assets/Icons/PhoneIcon";
import FeedbackIcon from "../assets/Icons/FeedbackIcon";
import MainWidthContainer from "../Layouts/MainWidthContainer";
import { RoutesLink } from "../Utilities/RoutesLink";
const NavHeader = () => {
  const navigate = useNavigate(); // Updated line
  const HeaderArray = [{
    text: "About Us",
    link: "",
    count: ""
  }, {
    text: "Products",
    link: "",
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
    link: "",
    number: ""
  }
  ]
  return (

    <MainWidthContainer>
      <div className="flex justify-between items-center py-[8px]">
        <img src={dotProLogo} alt="dot pro logo" onClick={()=> navigate('/')} className="cursor-pointer"/>
        <nav>
          <ul className="flex gap-[24px] list-none ">
            {HeaderArray?.map((header) => <li
              key={header?.text}
            >
              <NavLink
                to={header?.link}
                className="contact-text no-underline !font-[600] !text-[14px] ">{header?.text}
                {header?.number && <span className="font-[700] text-[14px] leading-[20px] text-[#FFFFFF] bg-[#2B5592] rounded-[50px] px-[12px] py-[2px]">{header?.number}</span>}
              </NavLink>
            </li>)}
          </ul>
        </nav>
        <div className="flex gap-[32px] items-center">
          <SearchIcon />
          <div className="flex gap-[12px]">
            <Button text="Feedback" varient="secondary" icon={<FeedbackIcon />} />
            <Button text="Contact" icon={<PhoneIcon />} />
          </div>
        </div>
      </div>
    </MainWidthContainer>
  )
}
export default NavHeader;
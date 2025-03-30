import { NavLink } from "react-router-dom";
import dotProLogo from "../assets/Logo/dotProLogo.png";
import SearchIcon from "../assets/Icons/SearchIcon";
import Button from "../components/Button";
import PhoneIcon from "../assets/Icons/PhoneIcon";
import FeedbackIcon from "../assets/Icons/FeedbackIcon";
import MainWidthContainer from "../Layouts/MainWidthContainer";
const NavHeader = () => {
  const HeaderArray = [{
    text: "About Us",
    link: "",
    count:""
  },{
    text: "Products",
    link: "",
    count:""
  },{
    text: "Facilities",
    link: "",
    number:""
  },{
    text: "Partners",
    link: "",
    number:"03"
  },{
    text: "Customers",
    link: "",
    number:"10+"
  },{
    text: "Case Study",
    link: "",
    number:""
  }
      ]
  return (
    <div
    className="flex justify-center"
    > 
      <MainWidthContainer>
        <div className="flex justify-between items-center">
          <img src={dotProLogo} alt="dot pro logo" />
           <nav>
      <ul className="flex gap-[24px] list-none ">
        {HeaderArray?.map((header) => <li
        key={header?.text}
        >
          <NavLink className="contact-text no-underline !font-[600] !text-[16px] ">{header?.text}
           {header?.number&& <span className="font-[700] text-[14px] leading-[20px] text-[#FFFFFF] bg-[#2B5592] rounded-[50px] px-[12px] py-[2px]">{ header?.number}</span>}
          </NavLink>
      </li>)}
      </ul>
          </nav>
             <div className="flex gap-[32px]">  
      <SearchIcon />
      <div className="flex gap-[12px]">
        <Button text="Feedback" varient="secondary" icon={<FeedbackIcon/> }/>
        <Button text="Contact" icon={<PhoneIcon/>}/>
      </div>
    </div>
      </div>
      </MainWidthContainer>  
  </div>)
}
export default NavHeader;
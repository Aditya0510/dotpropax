import { Link } from "react-router-dom";
import FbIcon from "../assets/Icons/FbIcon";
import InstaIcon from "../assets/Icons/InstaIcon";
import LinkedInIcon from "../assets/Icons/LinkedInIcon";
import XIcon from "../assets/Icons/XIcon";
import MailIcon from "../assets/Icons/MailIcon";
import PhoneIcon from "../assets/Icons/PhoneIcon";
import MainWidthContainer from "../Layouts/MainWidthContainer";

const ContactHeader = () => {
  return (
    <div className="py-[12px] bg-[#F3F4F5]">
      <MainWidthContainer className="">
        <div className="flex justify-center sm:justify-between">
          <div className="flex gap-[8px]">
           <a href="tel:+918237026111" className="contact-text flex items-center gap-1">
      <PhoneIcon /> +91 8237 026 111
    </a>
    <span className="text-[#8B939F]">|</span>
    <a href="tel:+919423237300" className="contact-text flex items-center gap-1">
      <PhoneIcon /> +91 94232 37300
    </a>
    <span className="text-[#8B939F]">|</span>
    <a href="mailto:info@dotpropack.com" className="contact-text flex items-center gap-1">
      <MailIcon /> info@dotpropack.com
    </a>
          </div>
          <div className="hidden sm:flex gap-[12px] ">
            <Link><FbIcon />
            </Link>
            <Link><InstaIcon />
            </Link>
            <Link><LinkedInIcon />
            </Link>
            <Link><XIcon />
            </Link>
          </div>
        </div>
      </MainWidthContainer>
    </div>

  )
}
export default ContactHeader;
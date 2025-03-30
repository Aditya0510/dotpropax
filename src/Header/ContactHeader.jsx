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
    <div className="py-[8px] bg-[#F3F4F5] flex justify-center">
 <MainWidthContainer className="">
<div className="flex justify-between">      
<div className="flex gap-[8px]">
        <Link className="contact-text"><PhoneIcon/> +91 8237 026 111</Link>
        <span className="text-[#8B939F]">|</span>
       <Link className="contact-text"><MailIcon/> anil@dotpropack.com</Link>
    </div>
    <div className="flex gap-[12px]">
        <Link><FbIcon/>
        </Link>
        <Link><InstaIcon/>
        </Link>
         <Link><LinkedInIcon/>
        </Link>
         <Link><XIcon/>
        </Link>
    </div>
    </div>
    </MainWidthContainer>
    </div>
   
    )
}
export default ContactHeader;
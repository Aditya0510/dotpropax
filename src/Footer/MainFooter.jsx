import MainWidthContainer from "../Layouts/MainWidthContainer"
import FbIcon from "../assets/Icons/FbIcon"
import InstaIcon from "../assets/Icons/InstaIcon"
import LinkedInIcon from "../assets/Icons/LinkedInIcon"
import LocationIcon from "../assets/Icons/LocationIcon"
import XIcon from "../assets/Icons/XIcon"
import logo from "../assets/Logo/footerLogo.png"
const MainFooter = () => {
  const footerData = {
    productArr: [
      "Cast PE Non Breathable Film",
      "Cast PE Breathable Film",
      "Medical Films",
      "Adhesive Closure side Tapes",
      "Frontal Tape",
    ],
    legalArr: [
      "Terms of Service",
      "Privacy Policy",
      "Cookies Policy",
      "Disclaimer",
    ],
    contactArr: ["+91 8237 026 111", "anil@dotpropack.com"],
  }

  return (
    <div className="bg-[#14181F]">
      <div className="mt-[82px]">
        <MainWidthContainer>
          <div className="grid grid-cols-3 gap-[40px] md:gap-[150px]">
            <div className="col-span-3 md:col-span-1 flex flex-col">
              <div className="rounded-[4px] w-[100%]">
                <img src={logo} alt="logo" className="w-[50%] aspect-[3/2] object-contain" />
              </div>
              <p className=" mt-[12px] font-[400] text-[16px] leading-[28px] text-[#8B939F]">
                Effective progress tracking and milestone setting are critical
                components of.. Effective progress tracking and milestone
                setting
              </p>
            </div>
            <div className="col-span-3 
            md:col-span-2 gap-[12px]  grid justify-between grid-col-3 sm:grid-cols-6">
              <div className="col-span-3 lg:col-span-2">
                <h6 className="font-[700] text-[20px] leading-[24px] text-white">
                  Products
                </h6>
                {footerData?.productArr?.map((prod) => (
                  <p className=" mt-[12px] font-[400] text-[16px] leading-[28px] text-[#8B939F]">
                    {prod}
                  </p>
                ))}
              </div>
              <div className="col-span-3 lg:col-span-2">
                <h6 className="font-[700] text-[20px] leading-[24px] text-white">
                  Legal
                </h6>
                {footerData?.legalArr?.map((legal) => (
                  <p className=" mt-[12px] font-[400] text-[16px] leading-[28px] text-[#8B939F]">
                    {legal}
                  </p>
                ))}
              </div>
              <div className="col-span-3 lg:col-span-2">
                <h6 className="font-[700] text-[20px] leading-[24px] text-white">
                  Contact
                </h6>
                {footerData?.contactArr?.map((contact) => (
                  <p className=" mt-[12px] font-[400] text-[16px] leading-[28px] text-[#8B939F]">
                    {contact}
                  </p>
                ))}
                <div className="flex gap-[24px] ms-[8px] mt-[24px]">
                  <FbIcon className="text-white" />
                  <InstaIcon className="text-white" />
                  <XIcon className="text-white" />
                  <LinkedInIcon className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <hr className="border-0 bg-[#2A2E34] w-full my-[24px] h-[2px]" />
          <div className="flex gap-[4px] items-center">
            <LocationIcon className="mt-[4px]" />{" "}
            <p className=" mt-[12px] font-[400] text-[16px] leading-[28px] text-[#8B939F]">
              Plot No C/11 Part -B, Five Star Shendra MIDC, Dist
              Aurangabad-431007 Maharashtra India
            </p>
          </div>
        </MainWidthContainer>
        <hr className="border-0 bg-[#2A2E34] my-[24px] h-[2px]" />
        <p className="text-center font-[400] text-[16px] leading-[28px] text-[#8B939F] mb-[24px]">
          © DOT Propack Industries Private Limited
        </p>
      </div>
    </div>
  )
}
export default MainFooter

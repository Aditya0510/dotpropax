import ArrowIcon from "../../assets/Icons/ArrowIcon"
import BookOpenIcon from "../../assets/Icons/BookOpenIcon"
import CartIcon from "../../assets/Icons/CartIcon"
import ChromeIcon from "../../assets/Icons/ChromeIcon"
import ContainerIcon from "../../assets/Icons/ContainerIcon"
import CubeIcon from "../../assets/Icons/CubeIcon"
import Button from "../../components/Button"
import MainNavbar from "../../components/NavBars/MainNavbar"
import MainWidthContainer from "../../Layouts/MainWidthContainer"
import AnilImage from "../../assets/ProfileImages/Anil.png"
import NareshImage from "../../assets/ProfileImages/nareshsikchi.png"
import AnilKum from "../../assets/ProfileImages/anilkumawat.png"
import missionBanner from "../../assets/Banners/missionBanner.png"
import PlayButton from "../../assets/Icons/PlayButton"
import { Tags } from "../../components/Common"
const MissionComponent = () => {
  const NavArray = [
    {
      icon: <ContainerIcon />,
      label: "Complete Solutions",
    },
    {
      icon: <ChromeIcon />,
      label: "Quality Products",
    },
    {
      icon: <CartIcon />,
      label: "One Stop Shop",
    },
    {
      icon: <BookOpenIcon />,
      label: "Experience",
    },
    {
      icon: <CubeIcon />,
      label: "Unsurpassed Value",
    },
  ]

  const profiles = [
    {
      image: AnilImage,
      text: "Anil Mali",
      desc: "lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
    },
    {
      image: NareshImage,
      text: "Naresh Sikshi",
      desc: "lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
    },
    {
      image: AnilKum,
      text: "Anil Kumawat",
      desc: "lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
    },
  ]

  return (
    <div className="mt-[320px]">
      <MainWidthContainer>
        <h3 className="text-[#14181F] w-[50%]">
          High Quality hygiene films at effective price & On time delivery.
        </h3>
        <MainNavbar NavArray={NavArray} activeTab={2} />
        <div className="mt-[136px] grid grid-cols-2 gap-[24px]">
          <div className="relative rounded-[4px]">
            <img
              src={missionBanner}
              alt="mission banner"
              className="h-full w-full"
            />
            <div className="absolute bottom-40 right-40">
              <PlayButton />
            </div>
          </div>
          <div>
            <Tags title="Why DotpackPro is Best?" className="mb-[16px]" />
            <div className="flex flex-col gap-[24px] mt-[12px]">
              <h2 className="w-[57%] leading-[100%]"
              >
                Dot Propack Vision and Mission
              </h2>
              <p className="font-[700] text-[18px] leading-[24px] tracking-[0%]">
                Quality is what we Believe, Service is what we Give.<br/>
                Opportunity is what you Give, Satisfaction is what you Get
              </p>
              <p className="font-[400] text-[16px] leading-[28px] tracking-[0%] text-[#414750] ">
                Dot Propack Industries Pvt Ltd. deals in Plastic Packaging and
                Speciality films. DOT Propack is one of the leading
                manufacturers of Cast Polyethylene and Polypropylene Films, with
                facility of Central Impression Flexographic Printing machine
                upto Six Colors and Extrusion Lamination facility.
              </p>
              <div>
                <Button>
                  Read More <ArrowIcon />
                </Button>
              </div>
            </div>
            <div className="flex mt-[32px] gap-[16px] min-h-[217px]">
              {profiles?.map((prof) => (
                <div
                  className="relative w-[33.33%] h-auto cursor-pointer overflow-hidden group rounded-[4px]"
                  key={prof?.text}
                >
                  {/* Profile Image */}
                  <img
                    src={prof?.image}
                    alt={prof?.text}
                    className=" w-full
                h-full object-cover aspect-[4/5]"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                  <p
                    className="absolute bottom-4 w-full text-white text-center p-2 rounded-md 
      font-[600] text-[16px] opacity-100 transition-opacity duration-300 
      group-hover:opacity-0"
                  >
                    {prof.text}
                  </p>
                  {/* Description (Hidden Initially, Shown on Hover) */}
                  <div
                    className="absolute bottom-0 w-full h-full flex flex-col justify-end text-center text-white
      font-[600] text-[16px] leading-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
                  >
                    <p className="p-2 rounded-md">{prof.text}</p>
                    <p className="p-2 rounded-md font-[200]">{prof.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainWidthContainer>
    </div>
  )
}
export default MissionComponent

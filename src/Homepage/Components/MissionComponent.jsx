import ArrowIcon from "../../assets/Icons/ArrowIcon";
import BookOpenIcon from "../../assets/Icons/BookOpenIcon";
import CartIcon from "../../assets/Icons/CartIcon";
import ChromeIcon from "../../assets/Icons/ChromeIcon";
import ContainerIcon from "../../assets/Icons/ContainerIcon";
import CubeIcon from "../../assets/Icons/CubeIcon";
import Button from "../../components/Button";
import MainNavbar from "../../components/NavBars/MainNavbar";
import MainWidthContainer from "../../Layouts/MainWidthContainer";
import AnilImage from "../../assets/ProfileImages/Anil.png";
import NareshImage from "../../assets/ProfileImages/nareshsikchi.png";
import AnilKum from "../../assets/ProfileImages/anilkumawat.png";
import missionBanner from "../../assets/Banners/missionBanner.png";
import PlayButton from "../../assets/Icons/PlayButton";
const MissionComponent = () => {
  const NavArray = [
    {
      icon: <ContainerIcon />,
      label:"Complete Solutions"
    }, {
      icon: <ChromeIcon/>,
      label:"Quality Products"
    }, {
      icon: <CartIcon />,
      label:"One Stop Shop"
    }, {
      icon: <BookOpenIcon />,
      label:"Experience"
    }, {
      icon: <CubeIcon />,
      label:"Unsurpassed Value"
    }
  ]

  const profiles = [{
    image: AnilImage,
    text:"Anil Mali"
  },{
    image: NareshImage,
    text:"Naresh Sikshi"
  },{
    image: AnilKum,
    text:"Anil Kumawat"
  },]

  return (<div className="mt-[220px]">
        <MainWidthContainer>
      <h2 className="text-[#14181F] font-[700] text-[48px] tracking-[0%] w-[70%]">High Quality hygiene films at effective price & On time delivery.</h2> 
      <MainNavbar
        NavArray={NavArray}
        activeTab={2}
      />
      <div className="mt-[48px] grid grid-cols-2 gap-[24px]">
        <div className="relative">   
          <img
            src={missionBanner}
            alt="mission banner"
           className="h-full w-full"
          />
          <div className="absolute bottom-40 right-40">
            <PlayButton/>
          </div>
        </div>
        <div>
          <Button varient="tertiary" className="" text="Why DotpackPro is Best?" />
          <div className="flex flex-col gap-[12px] mt-[12px]">
 <h2 className="font-[700] text-[48px] leading-[100%] tracking-[0%]
          w-[71%]">Dot Propack
            Vision and Mission</h2>
          <p className="font-[700] text-[18px] leading-[24px] tracking-[0%] w-[90%]"> Quality is what we Believe, Service is what we Give.
              Opportunity is what you Give, Satisfaction is what you Get</p>
            <p className="font-[400] text-[16px] leading-[28px] tracking-[0%]">
              Dot Propack Industries Pvt Ltd. deals in Plastic Packaging and Speciality films. DOT Propack is one of the leading manufacturers of Cast Polyethylene and Polypropylene Films, with facility of Central Impression Flexographic Printing machine upto Six Colors and Extrusion Lamination facility. 
            </p>
            <div>
 <Button>
                    Read More <ArrowIcon/>
                    </Button>
            </div>
              
          </div>
          <div className="flex justify-between mt-[32px]">
            {profiles?.map((prof) => <div className="relative w-[165px] h-[217px]"
              
             key={prof?.text}
            >
              <img src={prof?.image} alt={prof?.text}
               className="h-full"
              />
              <div className="absolute w-full h-full bottom-0 bg-[#00000000] bg-gradient-to-b from-[#00000000] to-[#000000]"></div>
              <div className="absolute bottom-0 w-full text-center text-white
              font-[600] text-[16px] leading-[24px]
              ">{prof.text}</div>
           </div>)}
          </div> 
        </div>
      </div>
        </MainWidthContainer>
      </div>)
}
export default MissionComponent;
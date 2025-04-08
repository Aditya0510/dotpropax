// import MainWidthContainer from "../Layouts/MainWidthContainer";
import homepageBanner from "../../assets/Banners/homepageBanner.png"
import ArrowIcon from "../../assets/Icons/ArrowIcon"
import Button from "../../components/Button"
import tuvImage from "../../assets/Logo/tuvNord.png"
import profile1 from "../../assets/ProfileImages/profile1.jfif"
import profile2 from "../../assets/ProfileImages/profile2.jfif"
import profile3 from "../../assets/ProfileImages/profile3.jfif"
import MainWidthContainer from "../../Layouts/MainWidthContainer"
import StarIcon from "../../assets/Icons/StarIcon"
import rollPaper from "../../assets/Products/rollPaper.png"
import colorRollPaper from "../../assets/Products/colorRollPaper.png"
import designRollPaper from "../../assets/Products/designRollPaper.png"
import printedRollPaper from "../../assets/Products/printedRollPaper.png"
const HeroComponent = () => {
  const profileArray = [
    {
      image: profile1,
    },
    {
      image: profile2,
    },
    {
      image: profile3,
    },
  ]

  const ProductArray = [
    {
      image: rollPaper,
    },
    {
      image: colorRollPaper,
    },
    {
      image: designRollPaper,
    },
    {
      image: printedRollPaper,
    },
    {
      image: printedRollPaper,
    },
  ]

  return (
    <div className="relative">
      <img
        src={homepageBanner}
        alt="home banner"
        className=" inset-0 w-full h-[948px]"
      />
      <div className="absolute w-full h-full opacity-[1] bg-[#353836a1] bottom-0"></div>
      <div className="absolute bottom-0 w-full h-full">
        <MainWidthContainer className="pt-[120px]">
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="col-span-5 md:col-span-3  p-4 flex flex-col gap-[24px] ">
              <div>
                <Button varient="secondary">
                  <p className="drop-shadow-[0px_4px_4px_#00000040]">
                    Hey! Welcome to Dot propack <span className="hidden md:inline">Industries Pvt, Ltd</span>
                  </p>
                </Button>
              </div>

              <div className="relative">
                <h2 className="font-sans font-bold text-[48px] leading-[140%] tracking-[0%] text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,1)]">
                  Delivering World-Class Plastic Packaging and Speciality Films
                  for Hygiene and Health Care
                </h2>
                <div className="flex ms-[10%]">
                  <div className=" w-[52%] h-[6px] bg-white"></div>
                </div>
              </div>

              <p className="font-[700] text-[16px] text-white leading-[24px] tracking-[0%] w-[80%] drop-shadow-[0px_4px_4px_rgba(0,0,0,1)]">
                Serving since 2016 , we at always thrive to add highest value to
                our customers by continuously optimizing lead time and providing
                high quality output.
              </p>
              <div>
                <Button className="!border-2 !border-white">
                  Explore Products <ArrowIcon />
                </Button>
              </div>
              <div>
                <img src={tuvImage} alt="tuv image" />
                <p className="text-white">ISO 900:2015 Certified Company</p>
              </div>
            </div>

            <div className="hidden md:flex col-span-2  p-4   justify-end">
              <div>
                <div className="bg-[#FFFFFF26] p-[48px] flex gap-[12px] rounded-[4px]">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex">
                      <div className="flex items-center justify-center space-x-[-20px]">
                        {profileArray?.map((profile) => (
                          <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                            <img
                              src={profile?.image}
                              alt="Profile 1"
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <h3 className="text-white font-[700] text-[40px] leading-[56px] tracking-[0%] ms-[8px]">
                        10+
                      </h3>
                    </div>
                    <p className="font-[600] text-[#FBFBFB] text-[16px] leading-[24px] tracking-[0%]">
                      Satisfied Customer
                    </p>
                    <div className="flex gap-[10px]">
                      <div className="flex gap-[6px]">
                        {[1, 2, 3, 4, 5]?.map(() => (
                          <StarIcon />
                        ))}
                      </div>
                      <p className="text-white font-[400] text-[14px] leading-[20px] tracking-[-1%]">
                        4.9/5 Review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0px] w-[80dvw]  translate-y-[+50%] flex flex-row gap-2">
            {ProductArray?.map((prod) => (
              <div className="rounded-[4px] flex flex-1 p-[4px] bg-white">
                <img src={prod?.image} className="w-full aspect-square object-cover" />
              </div>
            ))}
          </div>
        </MainWidthContainer>
      </div>
    </div>
  )
}
export default HeroComponent

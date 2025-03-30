// import MainWidthContainer from "../Layouts/MainWidthContainer";
import homepageBanner from "../../assets/Banners/homepageBanner.png";
import ArrowIcon from "../../assets/Icons/ArrowIcon";
import Button from "../../components/Button";
import tuvImage from "../../assets/Logo/tuvNord.png";
import profile1 from "../../assets/ProfileImages/profile1.jfif";
import profile2 from "../../assets/ProfileImages/profile2.jfif";
import profile3 from "../../assets/ProfileImages/profile3.jfif";
import MainWidthContainer from "../../Layouts/MainWidthContainer";

const HeroComponent = () => {
  return ( <div className="relative">
  <img
    src={homepageBanner}
    alt="home banner"
    className=" inset-0 w-full"
        />
        <div className="absolute w-full h-full opacity-[1] bg-[#353836a1] bottom-0"></div>
        <div className="absolute bottom-0 w-full h-full">
          <div className="flex justify-center">
 <MainWidthContainer className="pt-[120px]">
          <div className="grid grid-cols-5 gap-4 w-full">
                <div className="col-span-3  p-4 flex flex-col gap-[24px] ">
                  <div>
<Button
                    varient="secondary"
                   
                
                    >
                      <p  className="drop-shadow-[0px_6px_2px_#00000040]">Hey! Welcome to Dot propack Industries Pvt, Ltd</p>
                      </Button>
                  </div>
                  
                 
                  <h2 className="font-sans font-bold text-[48px] leading-[140%] tracking-[0%] text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,1)]">
                    Delivering World-Class Plastic Packaging and Speciality Films for Hygiene and Health Care
                  </h2>
                  <p className="font-[700] text-[16px] text-white leading-[24px] tracking-[0%] w-[80%] drop-shadow-[0px_4px_4px_rgba(0,0,0,1)]">Serving since 2016 , we at always thrive to add highest value to our customers by continuously optimizing lead time and providing high quality output.</p>
                  <div>
                  <Button className="!border-1" >
                    Explore Products <ArrowIcon/>
                    </Button>
                    
                  </div>  
                  <div>
                    <img
                      src={tuvImage}
                      alt="tuv image"
                    />
                    <p className="text-white">ISO 900:2015 Certified Company</p>
                  </div>
  </div>

                <div className="col-span-2  p-4 flex justify-end">
                  <div>
                    <div className="bg-[#FFFFFF26] p-[48px] flex gap-[12px] rounded-[4px]">
                    <div className="flex items-center justify-center space-x-[-20px]">
 
  <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
    <img src={profile1} alt="Profile 1" className="w-full h-full rounded-full object-cover" />
  </div>
  <div className="w-[48px] h-[48px]  rounded-full flex items-center justify-center shadow-lg border-2 border-white">
    <img src={profile2} alt="Profile 2" className="w-full h-full rounded-full object-cover" />
                        </div>
                          <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
    <img src={profile3} alt="Profile 2" className="w-full h-full rounded-full object-cover" />
  </div>
</div>
    </div>
               </div>        
  </div>
</div>
        </MainWidthContainer>
          </div>

        </div> 
</div>)
}
export default HeroComponent;
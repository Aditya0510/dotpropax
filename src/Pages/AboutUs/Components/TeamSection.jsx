import { Tags } from "../../../components/Common";
import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import AnilMali from "../../../assets/ProfileImages/Anil.png";
import Naresh from "../../../assets/ProfileImages/nareshsikchi.png";

import AnilKum from "../../../assets/ProfileImages/anilKumawat.png";
import { useState } from "react";
const profileArray = [
  {
    image: AnilMali,
    name: "Anil Mali",
    desg: "Director",
    desc: "Anil Mali is the co- founder and Director of DOT Propack Industries Pvt Ltd.Anil already has a unit named Som AutoTech Pvt.Ltd.which deals in Aluminium diecasting, with this experience he is shaping up the organization as future centre of excellence in automotive components.His area of responsibility included commercial functions and finance."
  }, {
    image: Naresh,
    name: "Naresh Sikchi",
    desg: "Director",
    desc: "Naresh Sikchi is the co- founder and Director of DOT Propack Industries Pvt Ltd.Anil already has a unit named Som AutoTech Pvt.Ltd.which deals in Aluminium diecasting, with this experience he is shaping up the organization as future centre of excellence in automotive components.His area of responsibility included commercial functions and finance."
  }, {
    image: AnilKum,
    name: "Anil Kumawat",
    desg: "Technical Director",
    desc: "Anil Kumawat is the co- founder and Director of DOT Propack Industries Pvt Ltd.Anil already has a unit named Som AutoTech Pvt.Ltd.which deals in Aluminium diecasting, with this experience he is shaping up the organization as future centre of excellence in automotive components.His area of responsibility included commercial functions and finance."

  }, {
    image: AnilKum,
    name: "Ajay Sikchi",
    desg: "Technical Director",
    desc: "Ajay Sikchi is the co- founder and Director of DOT Propack Industries Pvt Ltd.Anil already has a unit named Som AutoTech Pvt.Ltd.which deals in Aluminium diecasting, with this experience he is shaping up the organization as future centre of excellence in automotive components.His area of responsibility included commercial functions and finance."
  }
]
const TeamSection = () => {
  const [activeProfile, setActiveProfile] = useState(profileArray[0]);

  return (<div className="mt-[100px] mb-[50px]">
    <MainWidthContainer>
      <div className="flex flex-col gap-[96px]">
        <div className="flex flex-col items-center">
          <Tags title="Our Team" />
          <h2 className="text-center w-[70%]">The steadfast strength and unity of our team.</h2>
        </div>
        <div className="grid grid-cols-2 gap-[32px]">
          <div className="grid grid-cols-2 gap-[32px] ">
            {profileArray?.map((prof) =>
              <div
                key={prof.name}
                onClick={() => setActiveProfile(prof)}
                className="w-full aspect-square cursor-pointer"
              ><img
                  src={prof.image} alt="anil"
                  className="w-full h-full rounded-[4px]"
                />
                <h5 className="font-[700] text-[24px] leading-[32px] mt-[16px]" >{prof?.name}</h5>
                <p className="font-[400] text-[16px] leading-[28px] text-[#414750] mt-[10px]">{prof?.desg}</p>
                <p></p>
              </div>
            )}
          </div>
          <div className="relative w-full aspect-[7/8] rounded-[4px] overflow-hidden">
            <img
              src={activeProfile?.image}
              alt="active profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-full bg-[#00000080] bg-opacity-50" />
            <div className="absolute bottom-[32px] text-white px-[32px] ">
              <h3 className="mb-[32px] text-white font-[700] text-[40px] leading-[56px] ">{activeProfile?.name}</h3>
              <p className=" font-[400] text-[16px] leading-[28px]">{activeProfile?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </MainWidthContainer>
  </div>)
}
export default TeamSection;
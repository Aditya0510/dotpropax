import MainWidthContainer from "../../Layouts/MainWidthContainer";
import proofImage from "../../assets/Banners/proofImage.png";
import proofImage2 from "../../assets/Banners/proofImage2.png";
const PerformanceProofComponent = () => {
  const mileArray = [{
    number: "08+",
    text: "Years of Experience"
  }, {
    number: "03+",
    text: "Valued Partners"
  }, {
    number: "10+",
    text: "Satisfied Customer"
  }, {
    number: "04+",
    text: "Certificates & Awards"
  }]
  return (<div className="bg-[#F3F8FF]">
    <MainWidthContainer>
      <div className="grid grid-cols-5 py-[100px] gap-[24px]">
        <div className="col-span-5 md:col-span-3 flex flex-col gap-[24px]">
          <div>
            <button className="bg-white text-[#2B5592] font-[700] text-[14px]
          leading-[22.4px] py-[8px] px-[16px]">Milestones</button>
          </div>

          <h2 className="font-[700] text-[48px] leading-[100%] w-[88%]">Proof in Performance – Discover Our Achievements</h2>
          <p className="font-[400] text-[16px] leading-[28px] w-[80%]  text-[#414750]">Effective progress tracking and milestone setting are critical components of.. Effective progress tracking and milestone setting</p>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-[24px]">
            {mileArray?.map((miles) => <div
              key={miles?.number}
              className="bg-[#FFFFFF] w-[124px] h-[122px] flex flex-col items-center p-[20px] rounded-[4px] gap-[12px]">
              <h4 className="font-[700] text-[28px] leading-[32px] text-[#2B5592]">{miles?.number}</h4>
              <p className="text-center font-[600] text-[14px] leading-[20px] text-[#565E69]">{miles?.text}</p>
            </div>)}
          </div>
        </div>
        <div className="col-span-5 md:col-span-2 relative mt-[180px] md:mt-0">
          <img
            src={proofImage}
            className="w-full h-[400px] rounded-[4px]"
          />
          <div className="absolute bottom-0 translate-y-[-140%] translate-x-[20%]
          md:translate-y-[-40%] md:translate-x-[-10%] xl:translate-y-[10%] bg-white p-[4px]">
            <img
              src={proofImage2}
              className="w-[256px] h-[200px] rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </MainWidthContainer>
  </div>)
}
export default PerformanceProofComponent;
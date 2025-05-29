import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import statImage from "../../../assets/Banners/statImage.png";

const SalesPerformanceSection = ({ refData }) => {
  const mileArray = [{
    number: "6M+",
    text: "Revenue per year"
  }, {
    number: "30+",
    text: "Valued Partners"
  }, {
    number: "25+",
    text: "Satisfied Customer"
  }, {
    number: "03+",
    text: "New Customers this year"
  }]
  return (<div className="bg-[#F3F8FF]">
    <MainWidthContainer>
      <div
        ref={refData?.current["Sales Performance"] ?? null}
        className="grid grid-cols-5 py-[100px] gap-[32px] 2xl:gap-[177px]">
        <div className="col-span-5 md:col-span-3 flex flex-col gap-[24px]">
          <div>
            <button className="bg-white text-[#2B5592] font-[700] text-[14px]
          leading-[22.4px] py-[8px] px-[16px]">Milestones</button>
          </div>

          <h2 className="font-[700] text-[48px] leading-[100%] w-[88%]">Sales Performance</h2>
          <p className="font-[400] text-[16px] leading-[28px] w-[80%]  text-[#414750]">Effective progress tracking and milestone setting are critical components of Dot Propack's Top Management</p>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-[24px] md:mr-[20px]">
            {mileArray?.map((miles) => <div
              key={miles?.number}
              className="bg-[#FFFFFF] flex flex-col w-full items-center p-[20px] rounded-[4px] gap-[12px]">
              <h4 className="font-[700] text-[28px] leading-[32px] text-[#2B5592]">{miles?.number}</h4>
              <p className="text-center font-[600] text-[14px] leading-[20px] text-[#565E69]">{miles?.text}</p>
            </div>)}
          </div>
        </div>
        <div className="col-span-5 md:col-span-2 relative">
          <img
            src={statImage}
            alt="stat image"
            className="w-full aspect-[6/5]  rounded-[4px]"
          />
        </div>
      </div>
    </MainWidthContainer>
  </div>)
}
export default SalesPerformanceSection;
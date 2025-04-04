import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import PlayButton from "../../../assets/Icons/PlayButton";
import mainSliderImage2 from "../../../assets/sliderImages/mainSliderImage2.png";
const InfrastructureComponent = () => {
  return (<div className="mt-[100px]">
    <MainWidthContainer>
      <div className="flex justify-between gap-[50px]">
          <h2 className="flex flex-grow-1">Infrastructure/Facilities <br/> @DOT Propack</h2>
        <div className="flex flex-col gap-[15px] max-w-[50%]">
          <p className="font-[400] text-[16px] leading-[28px] text-[#414750] ">Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc
            Laboratory Set up. : Tensile and Elongation strength tester, COF, Dart Impact, Muffle Furnace, Densitometer, Opacity, MFI, Corona Dyne Testing, Oven, GSM</p>
          <h5 className="font-[700] text-[24px] leading-[32px]">- CEO of Dot Pro Pack</h5>
        </div>
      </div>
      <div className="mt-[50px] relative">
        <img src={mainSliderImage2} alt="slider image" className="w-full h-[516px]" />
        <div className="absolute bottom-20 w-full">
          <div className="flex justify-center">
            <PlayButton />
          </div>

        </div>
      </div>
    </MainWidthContainer>
  </div>)
}
export default InfrastructureComponent;
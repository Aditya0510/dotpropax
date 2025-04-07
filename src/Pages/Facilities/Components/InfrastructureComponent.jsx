import { useRef, useState } from "react";
import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import PlayButton from "../../../assets/Icons/PlayButton";
import mainSliderImage2 from "../../../assets/sliderImages/mainSliderImage2.png";
const InfrastructureComponent = () => {


  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };
  return (<div className="mt-[100px]">
    <MainWidthContainer>
      <div className="flex justify-between gap-[50px]">
        <h2 className="flex flex-grow-1">Infrastructure/Facilities <br /> @DOT Propack</h2>
        <div className="flex flex-col gap-[15px] max-w-[50%]">
          <p className="font-[400] text-[16px] leading-[28px] text-[#414750] ">Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc
            Laboratory Set up. : Tensile and Elongation strength tester, COF, Dart Impact, Muffle Furnace, Densitometer, Opacity, MFI, Corona Dyne Testing, Oven, GSM</p>
          <h5 className="font-[700] text-[24px] leading-[32px]">- CEO of Dot Pro Pack</h5>
        </div>
      </div>
      <div className="mt-[50px]  relative">
        {/* <img src={mainSliderImage2} alt="slider image" className="w-full h-[516px]" /> */}
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          className="w-full h-[516px] object-cover"
          controls={false} // hide default controls if using a custom play button
          poster={mainSliderImage2}
          muted
          // thumbna
          loop={false}
          preload="metadata"
          ref={videoRef}
        />
        <div className="absolute bottom-0 translate-x-[+150%] translate-y-[-30%] z-[30]">
          {!isPlaying && (
            <button className="" onClick={handlePlay}>
              <PlayButton />
            </button>
          )}
        </div>
        {!isPlaying && <div className="absolute bottom-0 w-full h-full bg-[#00000050]"></div>}
      </div>
    </MainWidthContainer >
  </div >)
}
export default InfrastructureComponent;
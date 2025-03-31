import ArrowIcon from "../../assets/Icons/ArrowIcon";

const MainImageSlider = ({sliderArray=[]}) => {
  return(<div className="flex flex-col gap-[24px]">
        <div>
      <div className="relative flex gap-[32px]">
        {sliderArray?.map((prof) => <div className="relative w-[437px] h-[621px]"
             key={prof?.text}
            >
              <img src={prof?.image} alt={prof?.text}
               className="h-full"
              />
              <div className="absolute w-full h-full bottom-0 bg-[#00000000] bg-gradient-to-b from-[#00000000] to-[#000000]"></div>
              <div className="absolute bottom-0 w-full py-[24px] ps-[24px] pe-[46px] text-white
              font-[600] text-[16px] leading-[24px]
              ">{prof.text}</div>
           </div>)}
        

          </div>
    </div>
    <div className="flex gap-[10px]">
      <button className="rounded-[4px] border-2 p-[8px] border-[#2B5592] text-[#2B5592]">
          <ArrowIcon className="rotate-180"/>
      </button>
      <button className="rounded-[4px] border-2 p-[8px] border-[#2B5592] text-[#2B5592]">
          <ArrowIcon/>
      </button>
    </div>
      </div>)
}
export default MainImageSlider;
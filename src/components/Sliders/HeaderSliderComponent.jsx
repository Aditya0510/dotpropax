import MainWidthContainer from "../../Layouts/MainWidthContainer"
import Button from "../Button"
import PageHeaderImageSlider from "../PageHeaderImageSlider"

const HeaderSliderComponent = ({
  heading,
  text,
  buttons = [],
  SliderData = [],
}) => {
  return (
    <div className="bg-[#F3F8FF] pb-[42px]">
      <MainWidthContainer>
        <div className="flex flex-col justify-center text-center items-center">
          <h1 className="font-[700] text-[58px] leading-[80px] text-center mt-[64px] ">
            {heading}
          </h1>
          <p className="text-center  mt-[20px] font-[400] text-[16px] leading-[28px] text-[#414750] max-w-[80%]">
            {text}
          </p>
          <div className="flex justify-center gap-[12px] my-[40px]">
            {buttons?.map((btn) => (
              <Button varient="quarternary" text={btn?.text} className="!font-[400]"/>
            ))}
          </div>
        </div>
      </MainWidthContainer>

      <div>
        <PageHeaderImageSlider imageList={SliderData} />
      </div>
    </div>
  )
}
export default HeaderSliderComponent

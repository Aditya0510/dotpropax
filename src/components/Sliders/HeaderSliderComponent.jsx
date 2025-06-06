import ArrowIcon from "../../assets/Icons/ArrowIcon"
import MainWidthContainer from "../../Layouts/MainWidthContainer"
import Button from "../Button"
import PageHeaderImageSlider from "../PageHeaderImageSlider"

const HeaderSliderComponent = ({
  heading,
  text,
  buttons = [],
  buttonText = "",
  SliderData = [],
  descriptionStyle = '',
  scrollToYear
}) => {
  return (
    <div className="bg-[#F3F8FF] pb-[42px]">
      <MainWidthContainer>
        <div className="flex flex-col justify-center text-center items-center">
          <h1 className="font-[700] text-[58px] leading-[80px] text-center mt-[120px] md:mt-[64px] ">
            {heading}
          </h1>
          <p className="text-center  mt-[20px] font-[400] text-[16px] leading-[28px] text-[#414750] max-w-[95%]  md:max-w-[80%]">
            {text}
          </p>
          {buttonText && <Button className="mt-[40px]">
            {buttonText}<ArrowIcon />
          </Button>}
          {<div className="flex flex-wrap md:flex-row justify-center gap-[12px] my-[40px]">
            {buttons?.map((btn) => (
              <div key={btn.text}>
                <Button varient="quarternary"
                  onClick={() => scrollToYear(btn?.text)}
                  text={btn?.text} className="!font-[400]" />
              </div>
            ))}
          </div>}
        </div>
      </MainWidthContainer>
      <div>
        <PageHeaderImageSlider imageList={SliderData} descriptionStyle={descriptionStyle} />
      </div>
    </div>
  )
}
export default HeaderSliderComponent

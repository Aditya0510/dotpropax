import Button from "../../components/Button"
import MainWidthContainer from "../../Layouts/MainWidthContainer"
import TestimonialSlider from "../../components/Sliders/TestimonialSlider"

const FeedbackComponent = ({ containerClass = '', refData }) => {
  return (
    <div className={`mt-[82px] ${containerClass}`}>
      <MainWidthContainer>
        <div
          ref={refData?.current["Testimonials"] ?? null}
          className="grid grid-cols-5">
          <div className="col-span-5 md:col-span-2 flex flex-col justify-center gap-[24px]">
            <div>
              <Button varient="tertiary" text="Testimonials" />
            </div>
            <h2 className="font-[700] text-[48px] leading-[100%] mb-[24px] md:mb-0">
              What Our Customer Says
            </h2>
          </div>
          <div className="col-span-5 md:col-span-3 flex gap-[24px]">
            <TestimonialSlider />
          </div>
        </div>
      </MainWidthContainer>
    </div>
  )
}
export default FeedbackComponent

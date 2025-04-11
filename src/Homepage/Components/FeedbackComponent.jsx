import Button from "../../components/Button"
import MainWidthContainer from "../../Layouts/MainWidthContainer"
import TestimonialSlider from "../../components/Sliders/TestimonialSlider"

const FeedbackComponent = ({ containerClass = '' }) => {
  return (
    <div className={`mt-[82px] ${containerClass}`}>
      <MainWidthContainer>
        <div className="grid grid-cols-5">
          <div className="col-span-5 md:col-span-2 flex flex-col justify-center gap-[24px]">
            <div>
              <Button varient="tertiary" text="Testimonials" />
            </div>
            <h2 className="font-[700] text-[48px] leading-[100%]">
              What Our Customer Says
            </h2>
          </div>
          <div className="col-span-5 md:col-span-3 flex gap-[24px]">
            <TestimonialSlider />
            {/* <div className="flex flex-col justify-center items-center w-[60%] gap-[12px]">
  <img
            src={testimonial1}
            className="h-[364px] w-[364px]"
          />
             <div className="flex gap-[4px] justify-end">
                  <span className="w-[12px] h-[12px] bg-gray-400 rounded-full" />
                  <span className="w-[12px] h-[12px] bg-gray-400 rounded-full" />
                  <span className="w-[12px] h-[12px] bg-[#2B5592] rounded-full" />
                  <span className="w-[12px] h-[12px] bg-gray-400 rounded-full" />
                   <span className="w-[12px] h-[12px] bg-gray-400 rounded-full"/>
                </div>
          </div>
       
          <div className="flex flex-col gap-[24px] w-[40%]">
             <QuoteIcon/>
            <p className="font-[700] text-[14px] leading-[20px]">Unmatched Quality and Consistency!</p>
<p className="font-[400] text-[16px] leading-[28px]">
One of the biggest challenges in the hygiene industry is supply reliability. Dotpropack has never let us down. Their prompt deliveries and well-managed logistics make them a valuable partner.
            </p>
            <div className="flex gap-[14px] items-center" >
         
 <img
                src={testimonial1}
                className="rounded-full h-[80px] w-[80px]"
                />
               
      
             <div>
                <p className="text-[#F6821F] font-[400] text-[12px] leading-[18px]">Customer</p>
                <p className="">Mr Ramesh Mehta</p>
              </div>
            </div>
          </div>
          */}
          </div>
        </div>
      </MainWidthContainer>
    </div>
  )
}
export default FeedbackComponent

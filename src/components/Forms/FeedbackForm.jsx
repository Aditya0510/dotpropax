import ArrowIcon from "../../assets/Icons/ArrowIcon";
import Button from "../Button";
import { Tags } from "../Common";
import PrimaryInput from "../Inputs/PrimaryInput";
import TextArea from "../Inputs/TextArea";
import formBanner from "../../assets/Banners/formBanner.png";

const Feedbackform = ({ tagName = "", title = "", desc = "", submitText = "" }) => {
  return (<div className="flex flex-col gap-[24px] ">
    <div className="flex flex-col justify-center items-center">
      <Tags title={tagName} />
      <h2 className="font-[700] text-[48px] leading-[100%] mt-[12px]">{title}</h2>
      <p className="font-[400] text-[#414750] mt-[24px] text-[16px] leading-[28px] w-[70%] text-center">{desc}</p>
    </div>
    <div className="grid grid-cols-2">
      <div>
        <img src={formBanner} className="" />
      </div>
      <form className="flex flex-col gap-[16px] bg-[#F3F8FF] p-[40px] rounded-[4px]">
        <select
          className="bg-[#FFFFFF] border-2 rounded-[8px] px-[20px] py-[12px] text-[#565E69]"
          placeholder="Select a product"
        >
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
        </select>
        <PrimaryInput placeholder="Your Name" />
        <PrimaryInput placeholder="Email Address" />
        <PrimaryInput placeholder="Phone number" type="number" />
        <TextArea placeholder="Comment" />
        <div className="mt-[24px]">
          <Button>
            {submitText} <ArrowIcon />
          </Button>
        </div>

      </form>
    </div>

  </div>)
}
export default Feedbackform;
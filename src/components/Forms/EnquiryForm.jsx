import ArrowIcon from "../../assets/Icons/ArrowIcon";
import Button from "../Button";
import PrimaryInput from "../Inputs/PrimaryInput";
import TextArea from "../Inputs/TextArea";

const EnquiryForm = () => {
  return (<div className="flex flex-col gap-[24px]">
    <h2 className="font-[700] text-[48px] leading-[100%]">Leave Us Your Info</h2>
    <p className="font-[400] text-[16px] leading-[24px] md:leading-[48px] ">Seamless Hygiene Solutions Begin with a Conversation – Contact Us!</p>
    <form className="flex flex-col gap-[16px]">
      <PrimaryInput placeholder="Your Name" />
      <PrimaryInput placeholder="Email Address" />
      <PrimaryInput placeholder="Your Name" />
      <TextArea placeholder="Comment" />
      <div className="flex gap-[4px]">
        <PrimaryInput type="checkbox" id="privacyCheck" />
        <label
          for="privacyCheck"
          className="text-[#565E69] font-[400] text-[14px] md:text-[16px] leading-[12px] md:leading-[28px]">You agree to our friendly <span className="font-[400] text-[16px] leading-[28px] text-[#F6821F]">privacy policy.</span></label>
      </div>
      <div className="mt-[24px]">
        <Button>
          Submit <ArrowIcon />
        </Button>
      </div>

    </form>
  </div>)
}
export default EnquiryForm;
import EnquiryForm from "../../components/Forms/EnquiryForm";
import EnquiryBanner from "../../assets/Banners/EnquiryBanner.png";
const EnquiryComponent = () => {
  return (<div className="grid grid-cols-2 mt-[120px]">
    <div className="col-span-2 md:col-span-1 relative">
      <img
        src={EnquiryBanner}
        className="h-full w-full"
        alt="enquiry banner"
      />
      <div className="absolute w-full h-full bottom-0 bg-[#00000000] bg-gradient-to-b from-[#00000000] to-[#000000]"></div>
    </div>
    <div className="col-span-2 md:col-span-1 px-[20px] md:px-[100px] py-[40px] bg-[#F3F8FF]">
      <EnquiryForm />
    </div>
  </div>)
}
export default EnquiryComponent;
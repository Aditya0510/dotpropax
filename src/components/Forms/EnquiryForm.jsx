import { useState } from "react";
import ArrowIcon from "../../assets/Icons/ArrowIcon";
import Button from "../Button";
import PrimaryInput from "../Inputs/PrimaryInput";
import TextArea from "../Inputs/TextArea";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newError = {};
    if (!formData?.name) {
      newError.name = "name is required."
    } if (!formData?.email) {
      newError.email = "email is required."
    } if (!formData?.comment) {
      newError.comment = "comment is required"
    } if (!formData?.privacy) {
      newError.privacy = "privacy policy is required"
    }
    if (Object.keys(newError).length > 0) {
      setErrors(newError); // ✅ Show errors
      return;
    }

  }

  return (<div className="flex flex-col gap-[24px]">
    <h2 className="font-[700] text-[48px] leading-[100%]">Leave Us Your Info</h2>
    <p className="font-[400] text-[16px] leading-[24px] md:leading-[48px] ">Seamless Hygiene Solutions Begin with a Conversation – Contact Us!</p>
    <form className="flex flex-col gap-[16px]"
      onSubmit={submitHandler}
    >
      <PrimaryInput
        placeholder="Your Name"
        errors={errors?.name}
        name="name"
        value={formData.name}
        onChange={handleChange} // ✅ Controlled input
      />
      <PrimaryInput
        placeholder="Email Address"
        errors={errors?.email}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextArea placeholder="Comment"
        errors={errors?.comment}
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      />
      <div className="flex gap-[4px]">
        <PrimaryInput type="checkbox" id="privacyCheck"
          name="privacy"
          value={formData.privacy}
          onChange={handleChange}
        />
        <label
          for="privacyCheck"
          className="text-[#565E69] font-[400] text-[14px] md:text-[16px] leading-[12px] md:leading-[28px]">You agree to our friendly <span className="font-[400] text-[16px] leading-[28px] text-[#F6821F]">privacy policy.</span></label>
      </div>
      <div>
        <p className="text-red-600">{errors?.privacy}</p>
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
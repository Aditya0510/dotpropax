import ArrowIcon from "../../assets/Icons/ArrowIcon";
import Button from "../Button";
import { Tags } from "../Common";
import PrimaryInput from "../Inputs/PrimaryInput";
import TextArea from "../Inputs/TextArea";
import formBanner from "../../assets/Banners/formBanner.png";
import CloseIcon from "../../assets/Icons/CloseIcon";
import { useState } from "react";
import SelectOptions from "../Inputs/SelectOption";

const Feedbackform = ({ tagName = "", title = "", desc = "", submitText = "", modalToggle }) => {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    phone: "",
    comment: "",
  })
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};
    if (!formData?.name) {
      newError.name = "name is required."
    } if (!formData?.email) {
      newError.email = "email is required."
    } if (!formData?.comment) {
      newError.comment = "comment is required"
    } if (!formData?.product) {
      newError.product = "Product is required"
    } if (!formData?.phone) {
      newError.phone = "phone number is required"
    }
    if (Object.keys(newError).length > 0) {
      setErrors(newError); // ✅ Show errors
      return;
    }

  }

  return (<div className="flex flex-col gap-[24px]">
    <div className="flex justify-end me-[4px]">
      <button
        onClick={modalToggle}
      >
        <CloseIcon />
      </button>
    </div>
    <div className="max-h-[80vh] overflow-y-auto">
      <div className="flex flex-col justify-center items-center ">
        <Tags title={tagName} />
        <h2 className="font-[700] text-[24px] xl:text-[48px] leading-[28px] xl:leading-[100%] mt-[12px] text-center px-[4px] md:px-0">{title}</h2>
        <p className="font-[400] text-[#414750] mt-[24px] text-[16px] leading-[28px] md:w-[70%] text-center px-[4px] md:px-0">{desc}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <div className="hidden lg:block">
          <img src={formBanner} className="" />
        </div>
        <form
          className="flex flex-col gap-[16px] bg-[#F3F8FF] p-[40px] rounded-[4px]"
          onSubmit={handleSubmit}
        >
          <SelectOptions
            placeholder="Select a product"
            options={[{ value: "Cast PE Non Breathable Film", label: "Cast PE Non Breathable Film" }, { value: "Cast PE Non Breathable Film", label: "Cast PE Non Breathable Film" }, { value: "Cast PE Non Breathable Film", label: "Cast PE Non Breathable Film" }, { value: "Cast PE Non Breathable Film", label: "Cast PE Non Breathable Film" }]}
            value={formData?.product}
            name="product"
            errors={errors?.product}
            onChange={handleChange}
          />
          <PrimaryInput placeholder="Your Name"
            value={formData?.name}
            name="name"
            errors={errors?.name}
            onChange={handleChange}
          />
          <PrimaryInput
            placeholder="Email Address"
            value={formData?.email}
            name="email"
            errors={errors?.email}
            onChange={handleChange}
          />
          <PrimaryInput
            placeholder="Phone number"
            type="number"
            value={formData?.phone}
            name="phone"
            errors={errors?.phone}
            onChange={handleChange}
          />
          <TextArea placeholder="Comment"
            value={formData?.comment}
            name="comment"
            errors={errors?.comment}
            onChange={handleChange}
          />
          <div className="mt-[24px]">
            <Button>
              {submitText} <ArrowIcon />
            </Button>
          </div>

        </form>
      </div>
    </div>


  </div>)
}
export default Feedbackform;
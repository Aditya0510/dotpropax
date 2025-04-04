import React from "react"
import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent"
import MainLayout from "../../Layouts/MainLayout"
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png"
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png"
import CustomerComponent from "../../Homepage/Components/CustomerComponent"
import PerformanceProofComponent from "../../Homepage/Components/PerformanceProofComponent"
import FeedbackComponent from "../../Homepage/Components/FeedbackComponent"

const HeaderSliderData = {
  heading: "Dot Propack Valuable Customers",
  text: "Deals in Plastic Packaging and Speciality films. DOT Propack is one of the leading manufacturers of Cast Polyethylene and Polypropylene Films, with facility of Central Impression Flexographic Printing machine upto Six Colors and Extrusion Lamination facility. ",
  buttons: [
    {
      text: "Trust",
    },
    {
      text: "Testimonials",
    },
  ],

  SliderData: [
    {
      id: 1,
      src: mainSliderImage1,
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
    {
      id: 2,
      src: mainSliderImage2,
      description:
        "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc",
    },
    {
      id: 3,
      src: mainSliderImage2,
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
  ],
}
const Customers = () => {
  return (
    <>
      <MainLayout>
        <HeaderSliderComponent {...HeaderSliderData} />
        <CustomerComponent />
        <PerformanceProofComponent />
        <FeedbackComponent containerClass="mb-[100px]"/>
      </MainLayout>
    </>
  )
}

export default Customers

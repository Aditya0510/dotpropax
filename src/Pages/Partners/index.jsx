import React from "react"
import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent"
import MainLayout from "../../Layouts/MainLayout"
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png"
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png"
import RelianceLogo from "../../assets/Logo/relianceLogo.jpg";
import indianOilLogo from "../../assets/Logo/indianOilLogo.png";
import PolmannLogo from "../../assets/Logo/PolmannLogo.png";
import DowLogo from "../../assets/Logo/DowLogo.png";
import LybLogo from "../../assets/Logo/LybLogo.png";
import CustomerComponent from "../../Homepage/Components/CustomerComponent"

const HeaderSliderData = {
  heading: "Partners",
  text: "We collaborate with industry-leading partners who share our commitment to innovation, reliability, and excellence. Their expertise and support enable us to deliver seamless solutions and exceptional value to our customers. Together, we drive growth, efficiency, and success across every project we undertake.",
  buttons: [],

  SliderData: [
    {
      id: 1,
      src: RelianceLogo,
      title: "Reliance Industries Ltd.",
      // description:
      //   "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
    {
      id: 2,
      src: indianOilLogo,
      title: "Indian Oil",
      // description:
      //   "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc",
    },
    {
      id: 3,
      src: PolmannLogo,
      title: "Polamann India Ltd.",
      // description:
      //   "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },{
      id: 4,
      src: DowLogo,
      title: "Dow Chemicals",
    },{
      id:5,
      src: LybLogo,
      title: "Lyondel Basell",
    }
  ],
}
const Partners = () => {
  return (

    <MainLayout>
      <HeaderSliderComponent {...HeaderSliderData} buttonText={"Want to be our partners?"} />
      <CustomerComponent />
    </MainLayout>

  )
}

export default Partners

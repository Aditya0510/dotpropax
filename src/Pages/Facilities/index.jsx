import PageHeaderImageSlider from "../../components/PageHeaderImageSlider";
import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent";
import MainLayout from "../../Layouts/MainLayout";
import { FacilitySlider } from "../../Utilities/dummyFacilityHeaderSlider";
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png";
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png";
import InfrastructureComponent from "./Components/InfrastructureComponent";
import InfrastructureSection from "../../AboutUs/InfrastructureSection";
import MainWidthContainer from "../../Layouts/MainWidthContainer";
import TestingEquipmentsSection from "../../AboutUs/TestingEquipmentsSection";
import InfrastructureDetail from "./Components/InfrastructureDetail";



const Facilities = () => {
  const HeaderSliderData = {
    heading: "Dot Propack Facilities",
    text: "Deals in Plastic Packaging and Speciality films. DOT Propack is one of the leading manufacturers of Cast Polyethylene and Polypropylene Films, with facility of Central Impression Flexographic Printing machine upto Six Colors and Extrusion Lamination facility. ",
    buttons: [{
      text: "Better Infrastructure"
    }, {
      text: "Testing Equipment"
    }],

    SliderData: [
      { id: 1, src: mainSliderImage1, description: "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc" },
      { id: 2, src: mainSliderImage2, description: "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc" },
      { id: 3, src: mainSliderImage2, description: "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc" },
    ]

  }
  return (<MainLayout>
    <HeaderSliderComponent {...HeaderSliderData} />
    <InfrastructureComponent />
    <InfrastructureDetail />
    <MainWidthContainer className="my-[140px] ">
      <TestingEquipmentsSection />
    </MainWidthContainer>
  </MainLayout>)
}
export default Facilities;
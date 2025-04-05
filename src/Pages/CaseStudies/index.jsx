
import MainLayout from "../../Layouts/MainLayout";
import CaseStudiesSlider from "./Components/CaseStudiesSlider";
import InnovationSection from "./Components/InnovationSection";
import TimeLineSection from "./Components/TimeLineSection";


const CaseStudies = () => {

  return (<MainLayout>
    <CaseStudiesSlider />
    <InnovationSection />
    <TimeLineSection />
  </MainLayout>)
}
export default CaseStudies;
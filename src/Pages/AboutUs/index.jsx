
import MainLayout from "../../Layouts/MainLayout";
import AboutUsSlider from "./Components/AboutUsSlider";
import CompleteSolutionSection from "./Components/CompleteSolutionSection";
import MissionVisionComponent from "./Components/MissionVisionSection";
import SalesPerformanceSection from "./Components/SalesPerformanceSection";
import TeamSection from "./Components/TeamSection";

const AboutUs = () => {



  return (<MainLayout>
    <AboutUsSlider />
    <CompleteSolutionSection />
    <MissionVisionComponent />
    <TeamSection />
    <SalesPerformanceSection />
  </MainLayout>)
}
export default AboutUs;
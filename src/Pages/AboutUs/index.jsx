
import { useRef } from "react";
import MainLayout from "../../Layouts/MainLayout";
import AboutUsSlider from "./Components/AboutUsSlider";
import CompleteSolutionSection from "./Components/CompleteSolutionSection";
import MissionVisionComponent from "./Components/MissionVisionSection";
import SalesPerformanceSection from "./Components/SalesPerformanceSection";
import TeamSection from "./Components/TeamSection";

const AboutUs = () => {
  const refs = useRef({});
  const scrollToContent = (year) => {
    const node = refs.current[year]?.current;
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (<MainLayout>
    <AboutUsSlider scrollToContent={scrollToContent} refData={refs} />
    <CompleteSolutionSection refData={refs} />
    <MissionVisionComponent refData={refs} />
    <TeamSection refData={refs} />
    <SalesPerformanceSection refData={refs} />
  </MainLayout>)
}
export default AboutUs;
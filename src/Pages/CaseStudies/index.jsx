
import { useRef } from "react";
import MainLayout from "../../Layouts/MainLayout";
import CaseStudiesSlider from "./Components/CaseStudiesSlider";
import InnovationSection from "./Components/InnovationSection";
import TimeLineSection from "./Components/TimeLineSection";


const CaseStudies = () => {
  const refs = useRef({});

  const scrollToYear = (year) => {
    const node = refs.current[year]?.current;
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (<MainLayout>
    <CaseStudiesSlider scrollToYear={scrollToYear} />
    <InnovationSection />
    <TimeLineSection refsObj={refs} />
  </MainLayout>)
}
export default CaseStudies;
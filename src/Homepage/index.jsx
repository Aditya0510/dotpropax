import MainLayout from "../Layouts/MainLayout";
import CustomerComponent from "./Components/CustomerComponent";
import EnquiryComponent from "./Components/EnquiryComponent";
import FeedbackComponent from "./Components/FeedbackComponent";
import HeroComponent from "./Components/HeroComponent";
import MissionComponent from "./Components/MissionComponent";
import PerformanceProofComponent from "./Components/PerformanceProofComponent";
import QualityComponent from "./Components/QualityComponent";

const Homepage = () => {
  return (
    <MainLayout >
      <HeroComponent />
      <MissionComponent />
      <QualityComponent />
      <CustomerComponent />
      <PerformanceProofComponent />
      <FeedbackComponent />
      <EnquiryComponent />
    </MainLayout>
  )
}
export default Homepage;
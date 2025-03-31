import MainLayout from "../Layouts/MainLayout";
import MainWidthContainer from "../Layouts/MainWidthContainer";
import CustomerComponent from "./Components/CustomerComponent";
import FeedbackComponent from "./Components/FeedbackComponent";
import HeroComponent from "./Components/HeroComponent";
import MissionComponent from "./Components/MissionComponent";
import PerformanceProofComponent from "./Components/PerformanceProofComponent";
import QualityComponent from "./Components/QualityComponent";

const Homepage = () => {
  return (
    <MainLayout>
      <HeroComponent />
      <MissionComponent />
      <QualityComponent />
      <CustomerComponent />
      <PerformanceProofComponent />
      <FeedbackComponent/>
    </MainLayout>
  )
}
export default Homepage;
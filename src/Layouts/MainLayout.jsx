import Modal from "../components/Modal";
import MainFooter from "../Footer/MainFooter";
import MainHeader from "../Header/MainHeader";

const MainLayout = ({ children }) => {
  return (<div className="flex flex-col">
    <MainHeader />
    {children}
    <MainFooter />

  </div>)
}
export default MainLayout;
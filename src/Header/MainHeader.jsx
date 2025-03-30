import ContactHeader from "./ContactHeader";
import NavHeader from "./NavHeader";

const MainHeader = () => {
  return (<div className="flex flex-col">
    <ContactHeader />
    <NavHeader/>
  </div>)
}
export default MainHeader;
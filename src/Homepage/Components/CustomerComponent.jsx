import MainWidthContainer from "../../Layouts/MainWidthContainer"
import ramson from "../../assets/Customers/ramson.png";
import bella from "../../assets/Customers/bella.png";
import millenium from "../../assets/Customers/millenium.png";
import noble from "../../assets/Customers/noble.png";
import panhealth from "../../assets/Customers/panhealth.png";
const CustomerComponent = () => {
  const customerList = [
    {
      image: ramson,
      className:"w-[170px] h-[45px]"
      
    },  {
      image: millenium,
     className:"w-[180px] h-[80px]"
      
    },  {
      image: panhealth,
      className:"w-[300px] h-[45px]"
      
    },{
      image: bella,
      className:"w-[168px] h-[80px]"
      
    },{
      image: noble,
      className:"w-[100px] h-[80px]"
      
    },
  ]
  return (<div className="mt-[180px] mb-[60px]">
    <MainWidthContainer>
      <h2 className="font-[700] text-[48px] text-center">Trusted by beloved customer</h2>
      <div className="flex gap-[42px] justify-center items-center mt-[48px] ">
        {customerList?.map((cust, index) => <img
          key={index}
           className={`${cust?.className} mix-blend-luminosity grayscale`}
          src={cust?.image} />)}
      </div>
    </MainWidthContainer>
  </div>)
}
export default CustomerComponent;
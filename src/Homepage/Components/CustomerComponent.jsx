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
      className: ""

    }, {
      image: millenium,
      className: ""

    }, {
      image: panhealth,
      className: ""

    }, {
      image: bella,
      className: ""

    }, {
      image: noble,
      className: ""

    },
  ]
  return (<div className="mt-[180px] mb-[60px]">
    <MainWidthContainer>
      <h2 className="font-[700] text-[48px] text-center">Trusted by beloved customer</h2>
      <div className="grid grid-cols-5 justify-between items-center mt-[48px] w-full">
        {customerList?.map((cust, index) =>
          <div className={`items-end ${index === customerList.length - 1 ? "col-start-5 justify-self-end" : ""}`}>
            <img
              key={index}
              className={`${cust?.className} h-[70px] w-full object-contain mix-blend-luminosity  grayscale`}
              src={cust?.image} />
          </div>
        )}
      </div>
    </MainWidthContainer>
  </div>)
}
export default CustomerComponent;
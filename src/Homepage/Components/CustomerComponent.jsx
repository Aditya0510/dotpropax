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
      <div className="flex flex-row justify-between items-center mt-[48px] w-full overflow-auto hide-scrollbar">
        {customerList?.map((cust, index) =>
          <div className={``}>
            <img
              key={index}
              className={`${cust?.className} h-[70px] w-full min-w-[300px]
              lg:min-w-[150px] object-contain mix-blend-luminosity  grayscale hover:grayscale-0 hover:mix-blend-normal`}
              src={cust?.image} />
          </div>
        )}
      </div>
    </MainWidthContainer>
  </div>)
}
export default CustomerComponent;
import { Tags } from "../../../components/Common";
import GreenTickText from "../../../components/Texts/GreenTickText";
import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import bannerImage from "../../../assets/Banners/missionBanner.png";

const CompleteSolutionSection = ({ refData }) => {
  const tickTexts = ["Complete solution provider for Speciality Films.",
    "One-stop-shop model from conception to completion",
    "Exceptional quality & Unsurpassed value",
    "Professional Team, Experience, Creativity & Technical ability",
    "Successful track record of High-profile development",
    "Local knowledge & International experience"
  ]
  return (<div className="mt-[100px] mb-[50px]">
    <MainWidthContainer>
      <div
        ref={refData?.current["Why Choose Us"] ?? null}
        className="grid grid-cols-1 md:grid-cols-2  gap-[32px] 3xl:gap-[103px]"
      >
        <div className="flex flex-col gap-[24px]">
          <div>
            <Tags title="Why Choose Dot Propack?" />
            {/* <h2 className="font-[700] text-[48px]">Dot Propack</h2> */}
          </div>
          <p className="font-[400] text-[16px] leading-[28px] text-[#565E69]">
          <span className="font-[700] text-[16px] leading-[24px] text-[#414750]">
            DOT PROPACK INDUSTRIES PVT LTD.
          </span> 
       LTD. was founded in 2016 in Chh.
Sambhajinagar (Aurangabad), Five Star Shendra MICD Area, in Maharashtra State in India. Extending an area of 45000 sqft. DPIPL provide PE cast film (Breathable & Non-Breathable), Frontal Film, Adhesive Clouser Side tapes &
Outer Packing Film in India as well as Other Country. Dot Propack is a leading manufacturers of highest quality PE Cast Film materials in India.
Since its beginning, Dot Propack is growing steadily, expanding and diversifying from extrusion to slitting and printing, over the years. we've became a great competitor in the speedy growing market for Hygiene Film.
The company has very well-trained staff of employees, engineers, technicians, quality control team and labours. In high tech manufacturing, the only tolerance is zero defects. We understand the importance of prompt quote response, quality manufacturing and on time delivery. Dot Propack Industries has achieved customer loyalty by practicing a policy of strong communication and working closely with customers to deliver to their exact specifications.
Nowadays, consumers are demanding higher levels of softness, comfort, skincare and fluid management in baby diapers, adult incontinence and feminine hygiene products. By doing extensive studies we have go to know global consumer preferences which allows us to provide the hygiene product manufacturer with unique products to satisfy there consumer needs.
Our innovations are driving improvements in the performance of feminine hygiene, baby diaper, and adult incontinence products.
          </p>
          {/* <p className="font-[400] text-[16px] leading-[28px] text-[#565E69]">We mainly cater Hygiene product manufacturers by supplying them PE back sheet, PE laminated with non-woven film. We also cater to flexible packaging industry.</p>
          <p className="font-[700] text-[16px] leading-[24px] text-[#414750]">
            Our plant is situated in Five Star Shendra MIDC in Chh. Sambhajinagar, Maharashtra, India near Mumbai Jawaharlal Nehru Port Trust, India.
          </p>
          <p className="font-[400] text-[16px] leading-[28px] text-[#565E69]">Our product ranges are manufactured according to international specification at the state of art manufacturing plant with area of 17000 sqft. The manufacturing area is fully enclosed and having positive air pressure system which keeps the area dust free, clean and cool.
            Nowadays, consumers are demanding higher levels of softness, comfort, skincare and fluid management in baby diapers, adult incontinence and feminine hygiene products. By doing extensive studies we have go to know global consumer preferences which allows us to provide the hygiene product manufacturer with unique products to satisfy there consumer needs. Our innovations are driving improvements in the performance of feminine hygiene, baby diaper, and adult incontinence products.
            </p> */}
          <div className="flex flex-col gap-[12px]">
            {tickTexts?.map((text) => <GreenTickText text={text} />)}
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={bannerImage} className="w-full h-[602px] rounded-[4px]" alt="banner" />
            <div
              style={{ boxShadow: "-100px 100px 150px #3440541F" }}
              className="absolute bottom-[0px] translate-x-[+6%] w-[90%]  translate-y-[+60%] bg-[rgb(255,255,255)] p-[24px] rounded-[4px] flex flex-col gap-[40px]">
              <h5 className=" font-[700] text-[24px] leading-[32px]">Become a complete solution provider for hygiene industry</h5>
              <p className="text-[#565E69] font-[400] text-[16px] leading-[28px]">Dot Propack aims to create long lasting values for its Employees, Share-holders, Business partners, Customers and the Society by Excellence, Competitiveness and Sustainability.</p>
            </div>
          </div>
        </div>
      </div>
    </MainWidthContainer>
  </div>)
}
export default CompleteSolutionSection;
import { Tags } from "../../../components/Common"
import MainWidthContainer from "../../../Layouts/MainWidthContainer"

const InnovationSection = () => {
  return (<div className="mt-[150px] mb-[50px] ">
    <MainWidthContainer>
      <div className="flex flex-col justify-center items-center mb-[60px] gap-[12px]">
        <Tags title="Dotpropack - Recent Innovation" />
        <h2 className="font-[700] text-[48px]">The Latest Innovation</h2>
      </div>
      <div className="border-[#D6D6D6] border-[1px] rounded-[4px] px-[48px] py-[60px]">
        <h6 className="font-[700] text-[20px] leading-[24px] mb-[32px]">Bio-Degradable Film</h6>
        <p className="text-[#414750] font-[400] text-[16px] leading-[28px]">Nowadays we hear about garbage problems and menace it has created. Under the campaign of Swachbharat, Govt has started to look how the waste can be disposed. The plastic waste is most critical to component in this. Polythene or polyethylene film / bags will naturally fragment and Degrade, but it can take as many as 5 centuries to degrade. To solve this problem we have done extensive research and have developed an additive which when added to PE material modifies the carbon chain of polyethylene to improve its degradability and become Biodegradable; without affecting its other properties.</p>
        <p className="text-[#414750] font-[400] text-[16px] leading-[28px] mt-[24px]">Dotpropack offers environmentally responsible packaging and materials protection technologies. We are proud to introduce high performance, certified biodegradable film and packaging material, completely biodegradable and compostable with unparalleled performance characteristics.</p>
      </div>
    </MainWidthContainer>
  </div>)
}
export default InnovationSection;
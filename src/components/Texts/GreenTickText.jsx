import GreenTick from "../../assets/Icons/greenTickIcon.png";
const GreenTickText = ({ text }) => {
  return (<div className="flex gap-[10px]"
    key={text}
  >
    <img src={GreenTick} alt="green tick" className="w-[24px] h-[24px]" />
    <p className="font-[600] text-[16px] leading-[24px] text-[#14181F]">{text}</p>
  </div>)
}
export default GreenTickText;
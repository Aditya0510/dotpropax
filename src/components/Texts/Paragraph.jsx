const Paragraph = ({ text, variant }) => {
  const classObj = {
    contact:"font-normal text-[#14181F] text-[14px] leading-[20px] tracking-[-1%] no-underline flex gap-1 my-0"
  }
  return (<p className={`${classObj[variant]}`}>{ text }</p>)
}
export default Paragraph;
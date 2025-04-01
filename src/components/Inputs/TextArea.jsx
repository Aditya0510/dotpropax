const TextArea = ({className="" ,placeholder=""}) => {
  return(<textarea className={`bg-[#FFFFFF] border-2 rounded-[8px] px-[20px] py-[12px] ${className}`} placeholder={placeholder}></textarea>)
}
export default TextArea;
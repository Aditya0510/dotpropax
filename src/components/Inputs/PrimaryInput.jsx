const PrimaryInput = ({type="text",className="" ,placeholder="",id=""}) => {
  return (<input type={type}
    id={id}
    className={`bg-[#FFFFFF] border-2 rounded-[8px] px-[20px] py-[12px] ${className}`} placeholder={placeholder} />)
}
export default PrimaryInput;
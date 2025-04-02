const Button = ({ text = "", varient = "primary" , icon=null,children,className="" }) => {
  const buttonType = {
    primary: "bg-[#2B5592]",
    secondary: "bg-[#F6821F]",
    tertiary: "bg-[#F3F8FF] !text-[#2B5592]",
    quarternary:"bg-[#FFFFFF] !text-[#14181F] rounded-[50px] px-[24px] py-[8px]"
  }
  return (
    <button
      className={`font-[700] border-none px-[12px] py-[8px] text-[16px] rounded-[4px] ${buttonType[varient]} text-[#ffffff] flex gap-[8px] ${className}`}
    >
      {children ? children : <>
        {icon}  
      {text}
      </>   
      }
    </button>
  )
}
export default Button;
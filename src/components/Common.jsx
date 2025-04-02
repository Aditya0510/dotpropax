export const Tags = ({ title = "", className = "" }) => {
  return (
    <span
      className={`bg-[#F3F8FF] font-[700] text-[14px] text-[#2B5592] px-[16px] py-[6px] rounded-[4px] ${className}`}
    >
      {title}
    </span>
  )
}

export const IconWithTextDescription = ({ icon,title,description, container, className = "" }) => {
  return (
    <div
    className={`flex flex-col flex-start text-left  ${container}`}
  >
    <div className="flex flex-row items-center">
      <img
        src={icon}
        alt="right-icon"
        className="w-[20px] h-[20px]"
      />
      <h6 className="ml-[10px]">{title}</h6>
    </div>
    <p className="leading-[28px] font-[16px] text-[#565E69] mt-[10px]">
      {description}
    </p>
  </div>)
}
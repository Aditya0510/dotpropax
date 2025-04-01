export const Tags = ({ title = "", className = "" }) => {
  return (
    <span
      className={`bg-[#F3F8FF] font-[700] text-[14px] text-[#2B5592] px-[16px] py-[6px] rounded-[4px] ${className}`}
    >
      {title}
    </span>
  )
}

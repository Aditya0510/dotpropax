const MainNavbar = ({ NavArray }) => {
  return (
    <div className="flex gap-[24px] justify-between mt-[43px] md:mt-[73px] items-center  overflow-x-auto py-[30px] hide-scrollbar">
      {NavArray?.map((nav) => (
        <div
          key={nav?.text}
          className="border-2  flex flex-col flex-1 justify-center items-center rounded-[4px] transition-all duration-300  min-w-[180px] aspect-[150/100] lg:aspect-[230/150]  hover:bg-[#F3F8FF] hover:border-[#2B5592]  hover:text-[#2B5592]   cursor-pointer  hover:scale-y-110"
        >
          <span className="text-[#7B8493] hover:text-[#2B5592]">
            {nav?.icon}
          </span>
          <p className="text-[#14181F] hover:text-[#2B5592] font-[600] text-[16px] leading-[24px] mt-[24px]">{nav?.label}</p>
        </div>
      ))}
    </div>
  )
}

export default MainNavbar

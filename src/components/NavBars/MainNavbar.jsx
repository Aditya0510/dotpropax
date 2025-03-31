const MainNavbar = ({NavArray,activeTab}) => {
  return (<div className="flex justify-between mt-[24px] items-center">
    {NavArray?.map((nav,index) => <div
      key={nav?.text}
      className={`border-2 flex flex-col p-[24px] gap-[24px] justify-center items-center
      w-[230px] h-[136px] ${activeTab==index+1&&"bg-[#F3F8FF] text-[#2B5592] h-[186px]"} `}
    >
      <span>
  {nav?.icon}
      </span>
    
      <p>{ nav?.label }</p>
    </div>)}
  </div>)
}
export default MainNavbar;
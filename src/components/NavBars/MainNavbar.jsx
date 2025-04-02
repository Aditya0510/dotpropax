const MainNavbar = ({ NavArray }) => {
  return (
    <div className="flex justify-between mt-[24px] items-center ">
      {NavArray?.map((nav, index) => (
        <div
          key={nav?.text}
          className="border-2 flex flex-col p-[24px] gap-[24px] justify-center items-center
            w-[18%] h-[136px] transition-all duration-300 
            hover:bg-[#F3F8FF] hover:text-[#2B5592] hover:scale-125 cursor-pointer"
        >
          <span className="text-[#7B8493] hover:text-[#2B5592]" >{nav?.icon}</span>
          <p>{nav?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MainNavbar;

const MainWidthContainer = ({ children, className = "" }) => {
  return (
    <div className="flex justify-center">
      <div className={`w-[90%] lg:w-[85%]  3xl:w-[65%] ${className}`}>
        {children}
      </div>
    </div>
  )
}
export default MainWidthContainer;
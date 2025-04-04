const MainWidthContainer = ({ children, className = "" }) => {
  return (
    <div className="flex justify-center">
      <div className={`w-[90%] xl:w-[85%]  2xl:w-[80%] ${className}`}>
        {children}
      </div>
    </div>
  )
}
export default MainWidthContainer;
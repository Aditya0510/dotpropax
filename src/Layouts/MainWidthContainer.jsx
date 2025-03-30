const MainWidthContainer = ({children,className=""}) => {
  return (<div className={`w-[80%] ${className}`}>
    {children}
  </div>)
}
export default MainWidthContainer;
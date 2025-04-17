const PrimaryInput = ({ type = "text", className = "", placeholder = "", id = ""
  , errors = "", value = "", onChange, name
}) => {
  return (<>
    <input type={type}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      className={`bg-[#FFFFFF] border-2 rounded-[8px] px-[20px] py-[12px] ${className}`}
      placeholder={placeholder}
    />
    <p className="text-red-600">{errors}</p>
  </>)
}
export default PrimaryInput;
const TextArea = ({ className = "", placeholder = "", errors = "", name, value, onChange }) => {
  return (
    <>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-[#FFFFFF] border-2 rounded-[8px] px-[20px] py-[12px] ${className}`} placeholder={placeholder}></textarea>
      <p className="text-red-600">{errors}</p>
    </>
  )
}
export default TextArea;
const SelectOptions = ({ id = "", required = "", className = "", placeholder = "", errors = "", options = [], onChange = () => { }, value, name }) => {
  return (<>
    <select
      id={id}
      required={required}
      name={name}
      className={`w-full p-2 border rounded-lg text-sm ${className}`}
      // {...register}
      onChange={onChange}
      value={value}
    >
      <option value="" disabled selected className="hidden text-gray-400">
        {placeholder}
      </option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {errors && <p className="text-red-700">{errors}</p>}
  </>
  )
}

export default SelectOptions;
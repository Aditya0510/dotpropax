import React from "react"
import { IconWithTextDescription, Tags } from "../components/Common"
import SelectedIcon from "../../src/assets/Icons/right-icon.png"
const infrastructure = [
  {
    title: "Total Space",
    description:
      "17,000 total space 10,000 Sqft fully enclosed production area",
  },
  {
    title: "Dosing system",
    description:
      "European Gravimetric dosing system and Online extrusion lamination facility",
  },
  {
    title: "Extrusion Lamination",
    description: "Online extrusion lamination facility",
  },
  {
    title: "Extrusion Coating",
    description: "Extrusion coating facility",
  },
  {
    title: "Slitting",
    description: "Slitting facility",
  },
  {
    title: "Pouching",
    description: "Pouching facility",
  },
]

const InfrastructureSection = ({ infrastructureArray = infrastructure }) => {
  return (
    <div
      className="grid grid-cols-3 gap-[24px] lg:gap-[32px]"
    >
      {/* First column */}
      <div className="col-span-3 md:col-span-2 ">
        <Tags title="Facilities" />
        <h2>Infrastructure and Facilities</h2>
      </div>
      {/* Second column */}
      <div className="col-span-3 md:col-span-4 lg:col-span-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {infrastructureArray.map((item, index) => (
            <IconWithTextDescription
              key={index}
              title={item.title}
              icon={SelectedIcon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfrastructureSection

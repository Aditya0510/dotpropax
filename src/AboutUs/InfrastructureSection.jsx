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
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "32px" }}>
      {/* First column */}
      <div>
        <Tags title="Facilities" />
        <h2>Infrastructure and Facilities</h2>
      </div>
      {/* Second column */}
      <div>
        <div className="grid grid-cols-2 gap-[32px]">
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

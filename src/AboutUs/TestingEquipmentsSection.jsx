import React from "react"
import { IconWithTextDescription, Tags } from "../components/Common"
import RightIcon from "../assets/Icons/right-icon.png"
import TestingThumbnail from "../assets/Testing/testing.png"

const TestingEquipmentData = [
  {
    title: "Tensile Testing Machine",
    description:
      "A Universal Testing Machine (UTM), also known as a universal tester, is used to test the tensile strength, Peel Strength & Elongation of materials at Crosshead Speed.",
  },
  {
    title: "Coefficient of Friction",
    description:
      "A coefficient of friction is a value that shows the relationship between the force of friction between two objects and the normal reaction between the objects that are involved. It is a value that is sometimes used in physics to find an object's normal force or frictional force when other methods are unavailable.",
  },
  {
    title: "Opacity Tester",
    description:
      "Opacity is an important attribute for packaging materials. The opacity tester is used in Hygiene & packaging industry to check and verification  of transparency of the film",
   }, {
    title: "WTR Tester",
    description:
      "A Water Vapor Transmission Rate (WVTR) tester used to determination of Water vapour transmission rate through Breathable Film. It determines how much water vapor passes through a material over a specific period.",
  },{
    title:"Spectrophotometer",
    description:"The spectrophotometer is a device designed to measure the amount of light absorbed by a solution at various wave lengths and determine the transmitted light. By using this device we can easily measure & Verify the Colour shade variation in the printed Sample as compare with Standard.",
  }
  // {
  //   title: "Muffle furnace",
  //   description: "An Ash test is used to determine if a material is filled.",
  // },
  // {
  //   title: "Hot Air oven",
  //   description:
  //     "Hot air ovens are electrical devices which use dry heat to sterilize. They were originally developed by Pasteur. Generally, they can be operated from 50 to 300 °C, using a thermostat to control the temperature.",
  // },
]
const TestingEquipmentsSection = ({ refData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">

      <div className="" ref={refData?.current["Testing Equipment"] ?? null}>
        <Tags title="Testing Equipments" />
        <h2 className="mb-[32px]">Testing Equipments</h2>
        {TestingEquipmentData.map((item, index) => (
          <IconWithTextDescription
            key={index}
            title={item.title}
            icon={RightIcon}
            description={item.description}
            container={`${index !== 0 ? "mt-[48px]" : ""}`}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col max-md:w-[100%]">
          <img
            src={TestingThumbnail}
            alt="testing-equipments"
            className="w-[100%] lg:w-[256px] aspect-[3/4]  object-cover"
          />
          <img
            src={TestingThumbnail}
            alt="testing-equipments"
            className="w-[100%] lg:w-[256px] aspect-[3/4]  object-cover mt-[20px]"
          />
        </div>
        <div className="flex max-md:mt-[20px] max-md:w-[100%]  md:ml-[32px]">
          <img
            src={TestingThumbnail}
            alt="testing-equipments"
            className="w-[100%] lg:w-[256px] aspect-[3/4]  object-cover"
          />
        </div>
      </div>

    </div>
  )
}

export default TestingEquipmentsSection

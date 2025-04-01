import React from "react"
import { Tags } from "../components/Common"
import RightIcon from "../assets/Icons/right-icon.png"
import TestingThumbnail from "../assets/Testing/testing.png"

const TestingEquipmentData = [
  {
    title: "Tensile Testing Machine",
    description:
      "A universal testing machine (UTM), also known as a universal tester, materials testing machine or materials test frame, is used to test the tensile strength and compressive strength of materials.",
  },
  {
    title: "Coefficient of Friction",
    description:
      "A coefficient of friction is a value that shows the relationship between the force of friction between two objects and the normal reaction between the objects that are involved. It is a value that is sometimes used in physics to find an object's normal force or frictional force when other methods are unavailable.",
  },
  {
    title: "Opacity Tester",
    description:
      "Opacity is an important attribute for packaging materials. The opacity tester is used in packaging industry to check the opacity of packaging materials so that proper type of printing could be used on the materials. Proper detection of opacity can save a lot of money on inks and other expenses.",
  },
  {
    title: "Dart impact Tester",
    description:
      "Falling dart impact is a traditional method for evaluating the impact strength or toughness of a plastic film. This test uses a single dart configuration and a single drop height, while varying the weight of the dart. Test results can be used either as a quality control evaluation or for end use comparisons.",
  },
  {
    title: "Muffle furnace",
    description: "An Ash test is used to determine if a material is filled.",
  },
  {
    title: "Hot Air oven",
    description:
      "Hot air ovens are electrical devices which use dry heat to sterilize. They were originally developed by Pasteur. Generally, they can be operated from 50 to 300 °C, using a thermostat to control the temperature.",
  },
]
const TestingEquipmentsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
      <div className="">
        <Tags title="Testing Equipments" />
        <h2 className="">Testing Equipments</h2>
        {TestingEquipmentData.map((item, index) => (
          <div
            className={`flex flex-col flex-start text-left ${
              index !== 0 ? "mt-[48px]" : ""
            }`}
          >
            <div className="flex flex-row items-center">
              <img
                src={RightIcon}
                alt="right-icon"
                className="w-[20px] h-[20px]"
              />
              <h6 className="ml-[10px]">{item?.title}</h6>
            </div>
            <p className="leading-[28px] font-[16px] text-[#565E69] mt-[10px]">
              {item?.description}
            </p>
          </div>
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

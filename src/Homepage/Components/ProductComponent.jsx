import React, { useState } from "react"
import ImageSlider from "../../components/Slider/Index"
import { productSampleData } from "../../Utilities/dummyProductData"
import MainWidthContainer from "../../Layouts/MainWidthContainer"
import { Tags } from "../../components/Common"
import DownloadIcon from "../../assets/Icons/DownloadIcon"
import SendIcon from "../../assets/Icons/sendIcon"
import RequestSampleIcon from "../../assets/Icons/RequestSampleIcon"


const ProductComponent = ({
  product = productSampleData,
  isReverse = false,
}) => {
  return (
    <div
      className={`min-h-[100dvh] ${
        isReverse ? "bg-[#F3F8FF]" : "bg-white"
      } flex justify-center items-center py-[32px]`}
    >
      <MainWidthContainer>
        <div className=" p-4">
          <div
            className={`lg:gap-[66px] gap-[33px] flex max-lg:flex-col ${
              isReverse ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Tags
                  title="Hygiene Film"
                  className={`${isReverse ? "!bg-white" : ""}`}
                />
                <button className="flex items-center text-[#F6821F] hover:text-orange-600 font-[700] text-[16px] leading-[24px]">
                  <DownloadIcon size={16} className="mr-[10px]" />
                  <span className="ml-[10px]">Download Brochure</span>
                </button>
              </div>

              <h3 className="mb-[10px]">{product?.name}</h3>

              <div className="mb-6">
                <h3 className="font-[700] text-[16px] leading-[24px]">
                  Features
                </h3>
                <ul className="mt-[16px]">
                  {product?.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-[#414750] leading-7">
                        {feature}{" "}
                        <span className="text-[#2B5592]">Read more...</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-[16px] leading-[24px] mb-2 text-[#252C32]">
                  Specification
                </h3>
                <ul className="mt-[16px]">
                  {product?.specifications.map((spec, index) => (
                    <li
                      key={index}
                      className="flex text-[#414750] text-[16px] leading-[24px] mb-[4px]"
                    >
                      <span className=" text-base mr-2">•</span>
                      <span className="font-[600]">{spec?.title}</span>
                      <span> : {spec?.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center">
                  <SendIcon />
                  <span className="ml-[10px]">Get a Quote</span>
                </button>
                <button className="bg-[#2B5592] hover:bg-[#2B5592] text-white px-4 py-2 rounded flex items-center">
                  <RequestSampleIcon />
                  <span className="ml-[10px]">Request a Sample</span>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div >
              <ImageSlider imageList={product?.thumbnails} />
            </div>
          </div>
        </div>
      </MainWidthContainer>
    </div>
  )
}

export default ProductComponent

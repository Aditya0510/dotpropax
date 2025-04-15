import React, { useState } from "react"
import ImageSlider from "../../components/Slider/Index"
import { productSampleData } from "../../Utilities/dummyProductData"
import MainWidthContainer from "../../Layouts/MainWidthContainer"
import { Tags } from "../../components/Common"
import DownloadIcon from "../../assets/Icons/DownloadIcon"
import SendIcon from "../../assets/Icons/sendIcon"
import RequestSampleIcon from "../../assets/Icons/RequestSampleIcon"
import Modal from "../../components/Modal"
import Feedbackform from "../../components/Forms/FeedbackForm"


const ProductComponent = ({
  product = productSampleData,
  isReverse = false,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modaltype, setModalType] = useState("");
  const modalToggle = () => setModalOpen(!modalOpen);
  const openModalhandler = (type) => {
    modalToggle();
    setModalType(type);
  }
  return (
    <div
      className={`min-h-[100dvh] ${isReverse ? "bg-[#F3F8FF]" : "bg-white"
        } flex justify-center items-center py-[32px]`}
    >
      <MainWidthContainer>
        <div className=" p-4">
          <div
            className={`lg:gap-[66px] gap-[33px] flex max-lg:flex-col ${isReverse ? "flex-row-reverse" : ""
              }`}
          >
            <div className="order-2 md:order-1 flex flex-col">
              <div className="flex flex-wrap items-center justify-between mb-4 gap-[32px]">
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

              <div className="flex flex-wrap gap-[32px] md:space-x-3">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center"
                  onClick={() => openModalhandler("quote")}
                >
                  <SendIcon />
                  <span className="ml-[10px]">Get a Quote</span>
                </button>
                <button
                  onClick={() => openModalhandler("sample")}
                  className="bg-[#2B5592] hover:bg-[#2B5592] text-white px-4 py-2 rounded flex items-center gap-[14px]">
                  <RequestSampleIcon />
                  <span className="inline md:hidden"

                  >Get Sample</span>
                  <span className="hidden md:inline md:ml-[10px]">Request a Sample</span>
                </button>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className="order-1 md:order-2">
              <ImageSlider imageList={product?.thumbnails} />
            </div>
          </div>
        </div>
      </MainWidthContainer>
      <Modal isOpen={modalOpen} modalToggle={modalToggle} >
        <Feedbackform tagName={modaltype == "sample" ? "Request Product Sample" : "Quotation about product"} title={modaltype == "sample" ? "Request a Sample" : "Get a Quote"} desc="Your feedback is invaluable to us! It helps us enhance our products, improve quality, and better serve your needs. Share your thoughts and be a part of our journey towards excellence." submitText="Submit"
          modalToggle={modalToggle}
        />
      </Modal>

    </div>
  )
}

export default ProductComponent

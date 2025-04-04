import React from "react"
import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent"
import MainLayout from "../../Layouts/MainLayout"
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png"
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png"
import CustomerComponent from "../../Homepage/Components/CustomerComponent"
import ProductComponent from "../../Homepage/Components/ProductComponent"
import { productSampleData } from "../../Utilities/dummyProductData"
import MainWidthContainer from "../../Layouts/MainWidthContainer"

const HeaderSliderData = {
  heading: "Products",
  text: "We collaborate with industry-leading Products who share our commitment to innovation, reliability, and excellence. Their expertise and support enable us to deliver seamless solutions and exceptional value to our customers. Together, we drive growth, efficiency, and success across every project we undertake.",
  buttons: [],

  SliderData: [
    {
      id: 1,
      src: mainSliderImage1,
      title:"Reliance Industries Limited",
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
    {
      id: 2,
      src: mainSliderImage2,
      title:"Reliance Industries Limited",
      description:
        "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc",
    },
    {
      id: 3,
      src: mainSliderImage2,
      title:"Reliance Industries Limited",
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
  ],
}
const Products = () => {
  return (
    <>
      <MainLayout>
        <HeaderSliderComponent {...HeaderSliderData} />
        <ProductComponent product={productSampleData} />
        <ProductComponent product={productSampleData} isReverse={true} />
        <ProductComponent product={productSampleData} />
        <ProductComponent product={productSampleData} isReverse={true} />
        <ProductComponent product={productSampleData} />
        <ProductComponent product={productSampleData} isReverse={true} />
        <ProductComponent product={productSampleData} />
        <ProductComponent product={productSampleData} isReverse={true} />
      </MainLayout>
    </>
  )
}

export default Products

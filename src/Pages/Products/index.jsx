import React from "react"
import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent"
import MainLayout from "../../Layouts/MainLayout"
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png"
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png"
import ProductComponent from "../../Homepage/Components/ProductComponent"
import { productSampleData } from "../../Utilities/dummyProductData"

const HeaderSliderData = {
  heading: "Products",
  text: "Dot Propack always commited to provide superior Quality Products and on time delivery to our Consumers. With the help of Highly experienced team and state of the art machinery, we are delivering seamless solutions and exceptional value to our cusumers.",
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

import React, { useState } from 'react'
import ImageSlider from '../../components/Slider/Index';
import {productSampleData} from '../../Utilities/dummyProductData'
const Download  =()=> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"/>

const ProductComponent = ({product=productSampleData}) => {

    return (
        <div className=" p-4">
          {/* Tab Buttons */}
         
    
          {/* Product Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Product Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm text-blue-600 font-medium">Hygiene Film</h2>
                <button className="flex items-center text-orange-500 hover:text-orange-600 text-sm">
                  <Download size={16} className="mr-1" />
                  Download Brochure
                </button>
              </div>
              
              <h1 className="text-2xl font-bold mb-6">{product?.name}</h1>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Features</h3>
                <ul className="space-y-2">
                  {product?.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className='text-[#414750] leading-7'>{feature} <span className='text-blue-500'>Read more...</span></span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Specification</h3>
                <ul className="space-y-2">
                  {product?.specifications.map((spec, index) => (
                    <li key={index} className="flex text-[#414750]">
                      <span className="text-blue-500 text-base mr-2">•</span>
                      <span className='font-bold'>{spec?.title}</span><span> : {spec?.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center">
                  Get a Quote
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
                  Get Sample
                </button>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className=''>
             <ImageSlider imageList={product?.thumbnails}/>
             </div>
                
          </div>
        </div>
      );
}

export default ProductComponent
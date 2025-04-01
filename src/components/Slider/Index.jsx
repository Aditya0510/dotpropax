import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const ImageSlider = ({imageList=[]}) => {
    const [activeImage, setActiveImage] = useState(imageList[0]);
    const [images, setImages] = useState(imageList);
    const sliderRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          const firstImage = updatedImages.shift(); // Remove first image
          updatedImages.push(firstImage); // Add it to the end
          return updatedImages;
        });
      }, 2000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="slider-container">
        {/* Main Image Display */}
        <div className="main-image">
          <img src={activeImage.src} alt="Selected" />
        </div>
        
        {/* Auto-scrolling Thumbnail Slider */}
        <div className="thumbnail-slider-wrapper">
          <div className="thumbnail-slider" ref={sliderRef}>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt="Thumbnail"
                className={activeImage.id === image.id ? "active-thumb" : ""}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageSlider;
  
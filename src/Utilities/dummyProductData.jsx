import SliderImage from "../assets/Banners/homepageBanner.png";
import Slider2 from "../assets/ProfileImages/profile1.jfif";
export const productSampleData =   {
    id: 1,
    name: "Cast PE Non Breathable Film",
    features: [
      "We use cast extrusion technology to make PE Embossed films for our hygiene industry customers. Our Embossed films ensure good mechanical properties, excellent product process attributes, and a natural feeling. Consistent processability and minimum machine set-up time are our quality standards.",
    ],
    specifications: [
      { title: "Film OGM", value: "10-100 gsm" },
      { title: "Color Options", value: "Plain or printed (up to 8 colors with reverse printing, various substrate)" },
      { title: "Permeability (MVTR)", value: "Ranging from 1000 to 7000 g/m2/24hr" },
      { title: "Core Diameter", value: "3\" & 6\"" },
      { title: "Max Roll Diameter", value: "800 mm" },
      { title: "Finished width", value: "2200 mm max" }
    ],
    thumbnails: [
      { id: 1, src: SliderImage },
      { id: 2, src: Slider2 },
      { id: 3, src: SliderImage },
      { id: 4, src: Slider2 },
      { id: 5, src: SliderImage },
      { id: 6, src: Slider2 },
      { id: 7, src: SliderImage },
      { id: 8, src: Slider2 },
      { id: 9, src: SliderImage },
      { id: 10, src: Slider2 },
    ],
    isBreathable: false
  }
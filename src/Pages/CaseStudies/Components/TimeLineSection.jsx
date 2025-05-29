import timeline1 from "../../../assets/Banners/timeLine1.png";
import timeline2 from "../../../assets/Banners/timeLine2.png";
import orangeTick from "../../../assets/Icons/orangeTick.png";
import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import mainSliderImage1 from "../../../assets/sliderImages/mainSliderImage1.png";
import { Tags } from "../../../components/Common";
import React, { useRef } from "react";

const DescriptionComponent = ({ event }) => {
  return (<div className="col-span-2 flex flex-col pr-6">
    <h5 className="text-[24px] font-[700] leading-[32px] text-[#1d1d1f] ">
      {event.year}
    </h5>
    <p className="text-[16px] font-[400] leading-[28px] text-[#414750] ">{event.description}</p>
  </div>)
}

const ImageComponent = ({ event }) => {
  return (<div className="col-span-2 flex justify-start">
    <img
      src={event.image}
      alt={`Timeline ${event.year}`}
      className="w-[100%] h-[230px] rounded-[10px] shadow-md"
    />
  </div>)
}
const RoundedTick = () => {
  return (<div className="col-span-1 flex justify-center">
    <div className="w-8 h-8 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center z-10">
      <img src={orangeTick} />
    </div>
  </div>)
}
const TimeLineSection = ({ refsObj }) => {
  // const refs = useRef({});
  const events = [
    {
      year: "2016",
      description:
        "Established one Cast extrusion machine with printing facilities to supply non breathable film printed & non printed.",
      image: timeline1,
    },
    {
      year: "2017",
      description:
        "Developed Frontal Tapes for adult diaper manufacturing & it is import alternative.",
      image: timeline2,
    },
    {
      year: "2018",
      description:
        "Diversified with state of the art facility... to produce breathable & NON Breathable hygiene film, printed or non printed.",
      image: mainSliderImage1,
    },
    {
      year: "2019",
      description:
        "Developed Magic hook tape &  Adhesive Closure side Tape manufacturing & it is import alternative.",
      image: timeline1,
    }, {
      year: "2020",
      description:
        "Diversified with state of the art facility... to produce breathable & NON Breathable hygiene film, printed or non printed.",
      image: mainSliderImage1,
    },
    {
      year: "2021",
      description:
        "Developed Magic hook tape &  Adhesive Closure side Tape manufacturing & it is import alternative.",
      image: timeline1,
    }, {
      year: "2022",
      description:
        "Diversified with state of the art facility... to produce breathable & NON Breathable hygiene film, printed or non printed.",
      image: mainSliderImage1,
    },
    {
      year: "2023",
      description:
        "Developed Magic hook tape &  Adhesive Closure side Tape manufacturing & it is import alternative.",
      image: timeline1,
    },
  ];

  events.forEach(event => {
    if (!refsObj.current[event.year]) {
      refsObj.current[event.year] = React.createRef();
    }
  });

  return (
    <MainWidthContainer className="mb-[150px]">
      <div className="flex flex-col justify-center items-center mb-[60px] gap-[12px]">
        <Tags title="History" />
        <h2 className="font-[700] text-[48px]">Dot Propack</h2>
      </div>
      <div className="relative md:px-4 py-16  mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-20 h-[85%] w-[4px] bg-[#5239bf] transform -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-16 relative z-10">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex gap-[12px] flex-wrap md:grid md:grid-cols-5  ${isEven ? "" : "md:flex-row-reverse"
                  }`}
                ref={refsObj.current[event.year]}
              >
                {/* Left Content */}
                {isEven ? (
                  <>
                    <div className="order-2 md:order-1 md:col-span-2 w-[80%] md:w-fit">
                      <DescriptionComponent event={event} />
                    </div>
                    <div className=" order-3 md:order-3 md:col-span-2 justify-center ms-[48px] md:ms-0 w-full">
                      <ImageComponent event={event} />
                    </div>
                    <div className=" order-1 md:order-2 md:col-span-1 flex md:justify-center">
                      <RoundedTick />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 w-[70%] md:w-fit md:col-span-2 md:order-3">
                      <DescriptionComponent event={event} />
                    </div>
                    <div className="order-3 ms-[48px] md:ms-0 w-full md:col-span-2 md:order-1">
                      <ImageComponent event={event} />
                    </div>
                    <div className="md:col-span-1 order-1 md:order-2 flex  md:justify-center">
                      <RoundedTick />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MainWidthContainer>
  );
}
export default TimeLineSection;
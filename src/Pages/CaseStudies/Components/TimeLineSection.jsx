import timeline1 from "../../../assets/Banners/timeLine1.png";
import timeline2 from "../../../assets/Banners/timeLine2.png";
import orangeTick from "../../../assets/Icons/orangeTick.png";
import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import mainSliderImage1 from "../../../assets/sliderImages/mainSliderImage1.png";
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
const TimeLineSection = () => {
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
        "Developed frontal tapes for adult diaper manufacturing & it is import alternative.",
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
        "Developed Magic hook tape & PP Adhesive closure tape manufacturing & it is import alternative.",
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
        "Developed Magic hook tape & PP Adhesive closure tape manufacturing & it is import alternative.",
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
        "Developed Magic hook tape & PP Adhesive closure tape manufacturing & it is import alternative.",
      image: timeline1,
    },
  ];

  return (
    <MainWidthContainer className="mb-[150px]">
      <div className="relative px-4 py-16  mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-20 h-[85%] w-[4px] bg-[#5239bf] transform -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-16 relative z-10">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-5  ${isEven ? "" : "flex-row-reverse"
                  }`}
              >
                {/* Left Content */}
                {isEven ? (
                  <>
                    <DescriptionComponent event={event} />
                    <RoundedTick />
                    <ImageComponent event={event} />
                  </>
                ) : (
                  <>
                    <ImageComponent event={event} />
                    <RoundedTick />
                    <DescriptionComponent event={event} />
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
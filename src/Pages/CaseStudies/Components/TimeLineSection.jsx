import timeline1 from "../../../assets/Banners/timeLine1.png";
import timeline2 from "../../../assets/Banners/timeLine2.png";
import orangeTick from "../../../assets/Icons/orangeTick.png";
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
      image: timeline1,
    },
    {
      year: "2018",
      description:
        "Diversified with state of the art facility... to produce breathable & NON Breathable hygiene film, printed or non printed.",
      image: timeline1,
    },
    {
      year: "2019",
      description:
        "Developed Magic hook tape & PP Adhesive closure tape manufacturing & it is import alternative.",
      image: timeline1,
    },
  ];

  return (
    <div className="relative px-4 py-16 max-w-6xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-40 h-[70%] w-[4px] bg-[#5239bf] transform -translate-x-1/2 z-0" />

      <div className="flex flex-col gap-16 relative z-10">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`grid grid-cols-3 items-center ${isEven ? "" : "flex-row-reverse"
                }`}
            >
              {/* Left Content */}
              {isEven ? (
                <>
                  <div className="flex flex-col items-end pr-6 text-right">
                    <h5 className="text-xl font-bold text-[#1d1d1f]">
                      {event.year}
                    </h5>
                    <p className="text-gray-600 max-w-[280px]">{event.description}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center z-10">
                      <img src={orangeTick} />
                    </div>
                  </div>
                  <div className="flex justify-start pl-6">
                    <img
                      src={event.image}
                      alt={`Timeline ${event.year}`}
                      className="w-[220px] h-auto rounded-lg shadow-md"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-end pr-6">
                    <img
                      src={event.image}
                      alt={`Timeline ${event.year}`}
                      className="w-[220px] h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center z-10">
                      <img src={orangeTick} />
                    </div>
                  </div>
                  <div className="flex flex-col items-start pl-6 text-left">
                    <h5 className="text-xl font-bold text-[#1d1d1f]">
                      {event.year}
                    </h5>
                    <p className="text-gray-600 max-w-[280px]">{event.description}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TimeLineSection;
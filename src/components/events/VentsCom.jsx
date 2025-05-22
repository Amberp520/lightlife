import { eventsOptions } from "../../utils/constant";

const VentsCom = () => {
  return (
    <>
      <div className="h-fit mb-20">
        <p className="text-[1.2rem] pl-20 text-green-800 font-bitter">
          Upcoming Events ~
        </p>
        <p className="pb-20 pl-20 text-[0.9rem] font-bitter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, facere.
        </p>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[3rem] w-[80%]">
            {eventsOptions.map((item, i) => (
              <div key={i} className="w-full h-[29rem] rounded-xl shadow-xl">
                <div className="w-full h-[50%] rounded-[20px]">
                  <img
                    className="object-cover h-full w-full rounded-[20px_20px_0_0]"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col h-[50%] p-8 items-center justify-center">
                  <p className="font-bold text-[1rem] pb-3">{item.title}</p>
                  <p className="text-[0.9rem]">{item.writeup}</p>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default VentsCom;

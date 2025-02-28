import line from "../../assets/home/lines/line3.svg";

const Charity = () => {
  const boxes = [
    { title: "People", desc: "Prevention of Crueity", num: 15 },
    { title: "Society", desc: "Direct relief", num: 145 },
    { title: "Project", desc: "Research hospital", num: 50 },
  ];

  return (
    <div className="mb-5 py-20">
      <div className="relative text-xl mb-8 text-center font-bold text-gray-800 mt-10">
        <h1 className="relative z-10">
          Whatever it is that you care about, there <br /> will be a charity
          working on it
        </h1>
        <img
          className="absolute h-[100px] -top-14 right-[56%]"
          src={line}
          alt=""
        />
      </div>
      <div className="flex justify-center w-full">
        <div className="w-[70%] flex gap-5">
          {boxes.map((box, i) => (
            <div
              key={i}
              className="basis-1/3 rounded-lg flex gap-2 bg-[#F3F2E7] items-center justify-center py-7"
            >
              <p className="font-bitter text-[#C07746] text-[33px] font-semibold">
                {box.num}k+
              </p>
              <div>
                <p>{box.title}</p>
                <p className="text-[13px] font-semibold">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charity;

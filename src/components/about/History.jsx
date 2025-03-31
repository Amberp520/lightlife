import caprisun from "../../assets/about/caprisun.jpg";
import child from "../../assets/about/child.jpg";

const History = () => {
  return (
    <>
      <div className="grid lg:grid-cols-[40%_55%] gap-28 py-10 lg:py-28 px-10 overflow-hidden">
        <div className="hidden lg:block h-[500px] relative">
          <img
            className="h-full w-full absolute object-cover rounded-xl top-0 left-0"
            src={caprisun}
            alt=""
          />
          <img
            className="h-[90%] w-[75%] absolute object-cover rounded-xl -bottom-[250px] -right-20 border-[8px] border-white"
            src={child}
            alt=""
          />
        </div>
        <div>
          <p className="text-[1.4rem] font-bitter text-primary mb-4">History</p>
          <p className="text-[1.6rem] lg:text-[2.8rem] font-bitter mb-4 lg:mb-8">
            Welcome to Light <br className="hidden lg:block" /> and life Human
            Development <br className="hidden lg:block" /> Foundation
          </p>
          <p className="lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit
            minima ratione porro nemo et similique voluptate amet officia dicta
            repellendus suscipit, hic nulla ut a possimus assumenda eaque?
            Incidunt consequatur laboriosam provident optio magnam aliquam
            veritatis, veniam minus totam.
          </p>
        </div>
      </div>
    </>
  );
};

export default History;

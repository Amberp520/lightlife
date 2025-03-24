import pastor from "../../assets/about/pastor.jpg";
import priest from "../../assets/about/priest.jpg";

const Teams = () => {
  return (
    <>
      <div className="h-fit mb-20">
        <p className="text-[2rem] text-center font-bitter py-[5rem]">
          Meet Our Team
        </p>

        <div className="h-full flex justify-center content-center">
          <div className="flex flex-row justify-center w-[75rem] gap-20">
            <div className="h-[30rem] w-[20.1rem] rounded-lg shadow-lg">
              <div className="h-[20rem] w-[20rem] bg-white rounded-lg">
                <img
                  className="h-full w-full object-cover rounded-t-lg"
                  src={pastor}
                  alt=""
                />
                <p className="text-[0.8rem] px-11 py-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque velit quod odio perferendis optio nisi architecto
                  magnam voluptates aperiam atque.
                </p>
              </div>
            </div>

            <div>
              <p className="pt-[9rem] text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque iure deleniti tenetur praesentium voluptatibus! Odio
                reprehenderit maxime non ducimus aliquam! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Iste, excepturi!
              </p>
              <div className="flex justify-center w-full">
                <button className="py-2 px-5 bg-primary rounded-lg text-white mt-12 content-center text-[0.9rem]">
                  Volunteer Now
                </button>
              </div>
            </div>

            <div className="h-[30rem] w-[20.1rem] rounded-lg shadow-lg">
              <div className="h-[20rem] w-[20rem] bg-white rounded-lg">
                <img
                  className="h-full w-full object-cover rounded-t-lg"
                  src={priest}
                  alt=""
                />
                <p className="text-[0.8rem] px-11 py-8">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque velit quod odio perferendis optio nisi architecto
                  magnam voluptates aperiam atque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;

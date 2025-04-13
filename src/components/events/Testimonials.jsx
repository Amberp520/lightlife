import priest from "../../assets/about/priest.jpg";
import pastor from "../../assets/about/pastor.jpg";
import children from "../../assets/about/children.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Tinibu Bola",
      image: pastor,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque molestias odio sit. Doloremque obcaecati blanditiis libero molestias quam. Molestias, assumenda? Laborum ex quae quod! Quis ex harum earum, tenetur ipsa magnam saepe iure omnis ducimus, assumenda, perspiciatis voluptatem eum?",
    },
    {
      name: "Ahmed Tinibu Bola",
      image: children,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque molestias odio sit. Doloremque obcaecati blanditiis libero molestias quam. Molestias, assumenda? Laborum ex quae quod! Quis ex harum earum, tenetur ipsa magnam saepe iure omnis ducimus, assumenda, perspiciatis voluptatem eum?",
    },
    {
      name: "Ahmed Tinibu Bola",
      image: priest,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque molestias odio sit. Doloremque obcaecati blanditiis libero molestias quam. Molestias, assumenda? Laborum ex quae quod! Quis ex harum earum, tenetur ipsa magnam saepe iure omnis ducimus, assumenda, perspiciatis voluptatem eum?",
    },
  ];

  return (
    <>
      <div className="h-fit bg-[#F3F2E7] flex justify-center items-center p-10">
        <div className="grid lg:grid-cols-[35%_65%] gap-10 xl:gap-0 ">
          <div className="pl-5">
            <p className="text-green-900 pb-3">Testimonials ~</p>
            <p className="text-[1.9rem] pb-5">
              Reviews On The <br /> Foundation
            </p>
            <p className="text-[0.9rem] w-[20rem] pb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In atque
              amet, nesciunt voluptates quam mollitia consequatur explicabo
              vitae omnis vel! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repudiandae, unde.
            </p>
            <button className="text-[14px] text-center bg-primary cursor-pointer text-white py-2 px-6 rounded-sm">
              Add Reviews
            </button>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // 980: {
              //   slidesPerView: 2,
              // },
              // 1280: {
              //   slidesPerView: 3,
              // },
            }}
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 0, // Continuous movement
              disableOnInteraction: false, // Do not stop autoplay on interaction
              // pauseOnMouseEnter: true, // Pause autoplay when hovering
            }}
            speed={2500} // Adjust speed for smooth scrolling
            // allowTouchMove={false} // Disable dragging
            className="flex gap-11 w-full swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className={`!flex flex-col justify-center items-center py-5 h-[24rem] w-[20rem] shadow-xl ${
                  index === 1 ? "bg-primary" : "bg-white"
                } rounded-xl`}
              >
                <div className="rounded-full border-[2px] border-green-400 h-[70px] w-[70px]">
                  <img
                    className="object-cover h-full w-full rounded-full"
                    src={testimonial.image}
                    alt=""
                  />
                </div>
                <p className={`p-3 font-bold ${
                    index === 1 && "text-slate-200"
                  } text-gray-700`}>
                  {testimonial.name}
                </p>
                <p
                  className={`${
                    index === 1 && "text-white"
                  } py-3 px-5 text-center text-[0.9rem]`}
                >
                  {testimonial.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

import React from "react";
import priest from "../../assets/about/priest.jpg";
import pastor from "../../assets/about/pastor.jpg";
import children from "../../assets/about/children.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="h-[30rem] bg-[#F3F2E7] flex justify-center items-center ]">
        <div className="grid grid-cols-[35%_65%]">
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

          <div className="flex gap-11">
            <div className="h-[24rem] w-[20rem] shadow-xl bg-white rounded-xl">
              <div className="rounded-[50rem] h-[50px] w-[50px] relative bottom-6 left-8 border-green-400 border-[3px]">
                <img
                  className="object-cover h-full w-full rounded-[50rem]"
                  src={pastor}
                  alt=""
                />
              </div>
              <p className="p-3 font-bold text-gray-700">Ahmed Tinibu Bola</p>
              <p className="p-3 text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                neque molestias odio sit. Doloremque obcaecati blanditiis libero
                molestias quam. Molestias, assumenda? Laborum ex quae quod! Quis
                ex harum earum, tenetur ipsa magnam saepe iure omnis ducimus,
                assumenda, perspiciatis voluptatem eum?
              </p>
            </div>

            <div className="h-[24rem] w-[20rem] shadow-xl bg-primary rounded-xl">
              <div className="rounded-[50rem] h-[50px] w-[50px] bg-slate-900 relative bottom-6 left-8 border-green-400 border-[3px]">
                <img
                  className="object-cover h-full w-full rounded-[50rem]"
                  src={children}
                  alt=""
                />
              </div>
              <p className="p-3 font-bold text-white">Ahmed Tinibu Bola</p>
              <p className="p-3 text-white text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                neque molestias odio sit. Doloremque obcaecati blanditiis libero
                molestias quam. Molestias, assumenda? Laborum ex quae quod! Quis
                ex harum earum, tenetur ipsa magnam saepe iure omnis ducimus,
                assumenda, perspiciatis voluptatem eum?
              </p>
            </div>

            <div className="h-[24rem] w-[20rem] shadow-xl bg-white rounded-xl">
              <div className="rounded-[50rem] h-[50px] w-[50px] bg-slate-900 relative bottom-6 left-8  border-green-400 border-[3px]">
                <img
                  className="object-cover h-full w-full rounded-[50rem]"
                  src={priest}
                  alt=""
                />
              </div>
              <p className="p-3 font-bold text-gray-700">Ahmed Tinibu Bola</p>
              <p className="p-3 text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                neque molestias odio sit. Doloremque obcaecati blanditiis libero
                molestias quam. Molestias, assumenda? Laborum ex quae quod! Quis
                ex harum earum, tenetur ipsa magnam saepe iure omnis ducimus,
                assumenda, perspiciatis voluptatem eum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

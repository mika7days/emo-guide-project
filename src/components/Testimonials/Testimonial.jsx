import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "In many respects a teenage girl's home is more important to her than at any time since she was a small child. din She also needs emotional support and protection from the most corrosive cultural forces that seek to exploit her when she is least able to resist.",
    },
    {
      img: profilePic2,
      review:
        "A lot of emotional stress that people go through, some people figure out a way to handle it. They have a strong enough support system to keep going and keep moving forward. And some people, they feel like they don't have that outlet.",
    },
    {
      img: profilePic3,
      review:
        "I can be happy or unhappy in all situations. I am sure of it, because I have been. I have felt distraught and joyful in situations of abundance as well as poverty, in situations of popularity and anonymity, in situations of success and failure. The difference was never based on..",
    },
    {
      img: profilePic4,
      review:
        "The practical success of an idea, irrespective of its inherent merit, is dependent on the attitude of the contemporaries. If timely it is quickly adopted; if not, it is apt to fare like a sprout lured out of the ground by warm sunshine, only to be injured and retarded in its growth by the succeeding frost.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Each client of us get </span>
        <span>Individual care </span>
        <span>from us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

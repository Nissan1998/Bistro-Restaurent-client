import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination } from "swiper";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const Category = () => {
  return (
    <div>
      <SectionHeader
        title1={"From 11'00am to 10'00pm"}
        title={"ORDER ONLINE"}
      ></SectionHeader>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">SALADS</p>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">PIZZA</p>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">SOUPS</p>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">DESERTS</p>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">SALADS</p>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">SALADS</p>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">PIZZA</p>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className="-mt-12">
          <p className="text-4xl text-center font-extrabold">SOUPS</p>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

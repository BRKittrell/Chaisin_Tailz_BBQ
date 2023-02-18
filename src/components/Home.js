import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

//import images
import Brisket_Cut from "../images/Brisket_Cut.jpg"
import Brisket from "../images/Brisket.JPG"
import Burgers from "../images/Burgers.jpeg"
import Chicken from "../images/Chicken.jpg"
import Full_Smoker from "../images/Full_Smoker.jpg"
import Guys from "../images/Guys.JPG"
import Jake from "../images/Jake.JPG"
import LC_Boil_1 from "../images/LC_Boil_1.jpg"
import LC_Boil_2 from "../images/LC_Boil_2.jpg"
import Nachos from "../images/Nachos.png"
import Rib_Racks from "../images/Rib_Racks.JPG"
import Ribs from "../images/Ribs.jpeg"
import Smoker from "../images/Smoker.JPG"
import Together from "../images/Together.JPG"

const Home = () => {
  return (
    <div className="component_container">
       <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Brisket} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Brisket_Cut} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Together} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Burgers} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Chicken} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Full_Smoker} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Jake} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={LC_Boil_1} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={LC_Boil_2} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Guys} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Rib_Racks} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Ribs} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Nachos} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={Smoker} alt=''></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

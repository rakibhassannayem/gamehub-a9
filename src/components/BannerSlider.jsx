import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const BannerSlider = ({ data }) => {
  return (
    <div className="carousel w-full mt-5">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={data[0].coverPhoto}
          className="w-full h-[60vh] object-cover rounded-xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="animate-bounce">
            <FaRegArrowAltCircleLeft size={50} color="white" />
          </a>
          <a href="#slide2" className="animate-bounce">
            <FaRegArrowAltCircleRight size={50} color="white" />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={data[1].coverPhoto}
          className="w-full h-[60vh] object-cover rounded-xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="animate-bounce">
            <FaRegArrowAltCircleLeft size={50} color="white" />
          </a>
          <a href="#slide3" className="animate-bounce">
            <FaRegArrowAltCircleRight size={50} color="white" />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={data[2].coverPhoto}
          className="w-full h-[60vh] object-cover rounded-xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="animate-bounce">
           <FaRegArrowAltCircleLeft size={50} color="white" />
          </a>
          <a href="#slide4" className="animate-bounce">
            <FaRegArrowAltCircleRight size={50} color="white" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default BannerSlider;

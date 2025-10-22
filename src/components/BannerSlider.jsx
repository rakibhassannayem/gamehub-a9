import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const BannerSlider = ({ data }) => {
  return (
    <div className="carousel w-full">
      {data.map((game, index) => {
        let prevIndex = index - 1;
        let nextIndex = index + 1;

        if (prevIndex < 0) prevIndex = data.length - 1;
        if (nextIndex >= data.length) nextIndex = 0;

        return (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <img
              src={game.coverPhoto}
              className="w-full h-[70vh] object-cover rounded-xl"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${prevIndex + 1}`} className="animate-bounce">
                <FaRegArrowAltCircleLeft size={50} color="white" />
              </a>
              <a href={`#slide${nextIndex + 1}`} className="animate-bounce">
                <FaRegArrowAltCircleRight size={50} color="white" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BannerSlider;

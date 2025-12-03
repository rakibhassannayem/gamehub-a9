import { BiStar } from "react-icons/bi";
import { Link } from "react-router";

const GamesCard = ({ game }) => {
  if (!game) return null;

  return (
    <Link
      to={`/game-details/${game.id}`}
      className="relative card bg-base-100 image-full shadow-sm cursor-pointer group hover:scale-105 transition text-white"
    >
      {/* Background Image */}
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="brightness-50 group-hover:brightness-100 h-full rounded-xl"
      />

      {/* HOVER OVERLAY */}
      <div
        className="
          absolute inset-0 
          bg-black bg-opacity-60 
          flex items-center justify-center 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
          rounded-xl
          z-20            /* overlay should be top */
        "
      >
        <span className="text-white text-2xl font-semibold">
          See Details
        </span>
      </div>

      {/* Card Body – ensure it stays above image, but below overlay */}
      <div className="card-body relative z-10">
        <h2 className="font-bold text-xl">{game.title}</h2>

        <div className="card-actions items-center justify-end mt-auto">
          <BiStar size={28} />
          <span className="text-2xl">{game.ratings}</span>
        </div>
      </div>
    </Link>
  );
};

export default GamesCard;

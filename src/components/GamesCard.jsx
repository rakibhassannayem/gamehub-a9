import { BiStar } from "react-icons/bi";
import { Link } from "react-router";

const GamesCard = ({ game }) => {
  if (!game) return null;

  return (
    <Link
      to={`/game-details/${game.id}`}
      className="relative card bg-base-100 image-full shadow-sm cursor-pointer group hover:scale-105 transition text-white"
    >
      {/* Game Cover */}
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="brightness-50 group-hover:brightness-100 h-full rounded-xl"
      />

      <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
        <span className="text-white text-2xl font-semibold">See Details</span>
      </div>

      <div className="card-body">
        <h2 className="font-bold text-xl">{game.title}</h2>

        <div className="card-actions items-center justify-end">
          <BiStar size={28} />
          <span className="text-2xl">{game.ratings}</span>
        </div>
      </div>
    </Link>
  );
};

export default GamesCard;

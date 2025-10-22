import { BiStar } from "react-icons/bi";
import { Link } from "react-router";

const GamesCard = ({ game }) => {
  if (!game) return null;

  return (
    <Link
      to={`/game-details/${game.id}`}
      className="card bg-base-100 image-full shadow-sm cursor-pointer group hover:scale-105 transition text-white"
    >
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="brightness-50 group-hover:brightness-100 h-full rounded-xl"
      />

      <div className="card-body ">
        <h2 className="font-bold text-2xl">{game.title}</h2>
        <p></p>
        <div className="card-actions items-center justify-end">
          <BiStar size={32} />
          <span className="text-3xl">{game.ratings}</span>
        </div>
      </div>
    </Link>
  );
};

export default GamesCard;

import { BiStar } from "react-icons/bi";
import GamesCard from "./GamesCard";

const PopularGames = ({ data }) => {
  const topRated = [...data].sort((a, b) => b.ratings - a.ratings).slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold my-3 text-white">Popular Games</h2>
      <div className="flex flex-col md:flex-row justify-between gap-2 text-white">
        {topRated.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default PopularGames;

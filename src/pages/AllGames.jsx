import { useLoaderData } from "react-router";
import GameCard from "../components/GameCard";

const AllGames = () => {
  const games = useLoaderData();

  return (
    <div className="space-y-4 my-3">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default AllGames;

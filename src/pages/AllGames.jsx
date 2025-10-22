import { useLoaderData } from "react-router";
import GamesCard from "../components/GamesCard";

const AllGames = () => {
  const games = useLoaderData();

  return (
    <div className="my-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {games.map((game) => (
        <GamesCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default AllGames;

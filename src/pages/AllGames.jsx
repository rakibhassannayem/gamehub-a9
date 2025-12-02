import { useLoaderData } from "react-router";
import GamesCard from "../components/GamesCard";

const AllGames = () => {
  const games = useLoaderData();

  return (
    <div className="my-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <title>Gamehub-All Games</title>
      {games.map((game) => (
        <GamesCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default AllGames;

import { useLoaderData } from "react-router";
import GamesCard from "../components/GamesCard";
import { useState } from "react";

const AllGames = () => {
  const gamesData = useLoaderData();
  const [games, setGames] = useState(gamesData);

  const handleSort = (e) => {
    const value = e.target.value;
    let sortedGames = [...games];

    if (value === "Ascending") {
      sortedGames.sort((a, b) => a.ratings - b.ratings);
    } else if (value === "Descending") {
      sortedGames.sort((a, b) => b.ratings - a.ratings);
    }

    setGames(sortedGames);
  };

  return (
    <div>
      <title>Gamehub-All Games</title>
      <h2 className="text-white font-bold text-4xl">All Games</h2>

      <select
        onChange={handleSort}
        defaultValue="Sort By Rating"
        className="select text-white border bg-slate-900"
      >
        <option disabled={true}>Sort By Rating</option>
        <option value={"Ascending"}>Low to High</option>
        <option value={"Descending"}>High to Low</option>
      </select>

      <div className="my-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {games.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;

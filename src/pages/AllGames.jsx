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

  const handleFilter = (e) => {
    const selected = e.target.value;

    if (selected === "Filter By Category" || selected === "All") {
      setGames(gamesData);
      return;
    }

    const filtered = gamesData.filter((game) => {
      const cat = game.category || "";
      return cat.toLowerCase() === selected.toLowerCase();
    });

    setGames(filtered);
  };

  return (
    <div>
      <title>Gamehub-All Games</title>

      <div className="heading flex flex-col gap-2 sm:flex-row justify-between">
        <h2 className="flex-1 text-white font-bold text-4xl">All Games</h2>

        <div className="flex-1 flex flex-col sm:flex-row gap-3 max-w-xl">
          {/* SORT */}
          <select
            onChange={handleSort}
            defaultValue="Sort By Rating"
            className="select text-white border bg-slate-900"
          >
            <option disabled>Sort By Rating</option>
            <option value="Ascending">Low to High</option>
            <option value="Descending">High to Low</option>
          </select>

          {/* FILTER */}
          <select
            onChange={handleFilter}
            defaultValue="Filter By Category"
            className="select text-white border bg-slate-900"
          >
            <option disabled>Filter By Category</option>
            <option value="All">All</option>
            <option value="Racing">Racing</option>
            <option value="Strategy">Strategy</option>
            <option value="Platformer">Platformer</option>
            <option value="Stealth">Stealth</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Mech Combat">Mech Combat</option>
          </select>
        </div>
      </div>

      <div className="my-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {games.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;

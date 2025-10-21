import { BiStar } from "react-icons/bi";

const PopularGames = ({ data }) => {
  const topRated = [...data].sort((a, b) => b.ratings - a.ratings).slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold my-3">Popular Games</h2>
      <div className="flex justify-between gap-2 text-white">
        {topRated.map((game) => (
          <div className="card bg-base-100 image-full shadow-sm cursor-pointer group hover:scale-105 transition">
            <img
              src={game.coverPhoto}
              alt="Shoes"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;

{
  /* <div
          key={game.id}
          className="card bg-base-10 shadow-s cursor-pointer "
        >
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="h-full brightness-50 hover:brightness-100"
          />

          <div className="flex justify-between items-baseline-last text-2xl font-semibold">
            <div className="bg-black/55 w-full flex justify-between p-3">
              <h2 className="">{game.title}</h2>
              <div className="flex items-center gap-1">
                <BiStar size={18} />
                {game.ratings}
              </div>
            </div>
          </div>
        </div> */
}

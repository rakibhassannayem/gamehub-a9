import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";
import { BiStar } from "react-icons/bi";

const GameDetails = () => {
  const games = useLoaderData();
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    const gameDetails = games.find((singleGame) => singleGame.id == id);
    setGame(gameDetails);
  }, [games, id]);

  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;

  return (
    <div className="bg-gray-800 min-h-screen pb-3">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto my-4 text-white">
        <div className="card bg-base-100 image-full shadow-sm rounded-xl">
          <figure className="w-full md:h-[80vh]">
            <img
              src={coverPhoto}
              className="w-full h-full object-cover"
              alt={title}
            />
          </figure>
          <div className="card-body flex flex-col justify-end">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
              <div className="space-y-1 font-semibold">
                <h2 className="text-5xl font-semibold mb-2 text-center md:text-start">{title}</h2>
                <p className="text-lg max-w-3/4">
                  <span className="font-bold text-yellow-400">Category: </span>
                  {category}
                </p>
                <p className="text-lg max-w-3/4">
                  <span className="font-bold text-yellow-400">Developer: </span>
                  {developer}
                </p>
                <p className="text-lg md:max-w-3/4">
                  <span className="font-bold text-yellow-400">
                    Description:{" "}
                  </span>
                  {description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-2xl font-bold flex justify-center md:justify-end items-center text-yellow-300">
                  {ratings} / 5 <BiStar className="ml-1" />
                </div>
                <a
                  href={downloadLink}
                  target="_blank"
                  className="btn btn-primary text-purple-500 py-6"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default GameDetails;

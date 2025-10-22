import React from "react";

const NewsLatter = () => {
  return (
    <div className="flex items-center justify-center my-5 min bg-linear-to-br from-purple-700 to-purple-900 py-20 rounded-xl  text-center">
      <div className="flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-semibold">
          Stay in the Game — Get the Latest Indie Drops!
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2/3">
          Subscribe to our newsletter and never miss out on exclusive releases,
          developer spotlights, and gaming updates.
        </p>
        <div className="join mt-12 w-full flex justify-center">
          <input
            type="text"
            className="input join-item border text-lg"
            placeholder="Enter your email"
          />
          <button className="btn join-item text-xl">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;

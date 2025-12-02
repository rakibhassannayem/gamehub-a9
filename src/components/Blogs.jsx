const Blogs = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary">
        Latest Blogs
      </h1>

      <p className="max-w-2xl text-gray-300 mb-10">
        Explore insights, gaming tips, developer stories, and the latest trends from the world of gaming.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Blog 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Top 10 FPS Games of 2025
          </h3>
          <p className="text-gray-300 text-sm">
            A curated list of the most engaging and competitive FPS titles dominating the gaming world.
          </p>
        </div>

        {/* Blog 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Behind the Scenes of Game Development
          </h3>
          <p className="text-gray-300 text-sm">
            Learn how developers bring your favorite games to life through creativity and innovation.
          </p>
        </div>

        {/* Blog 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Upcoming Game Releases
          </h3>
          <p className="text-gray-300 text-sm">
            Stay updated with all the exciting new titles releasing soon across all platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

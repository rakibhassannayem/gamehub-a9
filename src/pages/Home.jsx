import { useLoaderData } from "react-router";
import BannerSlider from "../components/BannerSlider";
import PopularGames from "../components/PopularGames";
import NewsLatter from "../components/NewsLatter";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="py-2">
      <title>Gamehub-Home</title>
      <BannerSlider data={data} />
      <PopularGames data={data} />
      <NewsLatter />
    </div>
  );
};

export default Home;

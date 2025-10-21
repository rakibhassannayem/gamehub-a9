import { useLoaderData } from "react-router";
import BannerSlider from "../components/BannerSlider";
import PopularGames from "../components/PopularGames";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="mb-5">
      <BannerSlider data={data} />
      <PopularGames data={data} />
    </div>
  );
};

export default Home;

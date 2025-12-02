import { useLoaderData } from "react-router";
import BannerSlider from "../components/BannerSlider";
import PopularGames from "../components/PopularGames";
import NewsLatter from "../components/NewsLatter";
import Blogs from "../components/Blogs";
import OfferSection from "../components/OfferSection";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="py-2 space-y-12">
      <title>Gamehub-Home</title>
      <BannerSlider data={data} />
      <PopularGames data={data} />
      <Blogs />
      <OfferSection />
      <NewsLatter />
    </div>
  );
};

export default Home;

import { useLoaderData } from "react-router";
import BannerSlider from "../components/BannerSlider";

const Home = () => {

  const data = useLoaderData()

  return (
    <div>
      <BannerSlider data={data}/>
    </div>
  );
};

export default Home;

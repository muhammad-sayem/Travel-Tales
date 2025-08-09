import Banner from "@/app/components/Banner";
import LatestBlogs from "./components/LatestBlogs";
import TravelTips from "./components/TravelTips";
import Toolkits from "./components/Toolkits";
import TravelTypes from "./components/TravelTypes";

export default function Home() {
  return (
    <div>
      <Banner />
      <LatestBlogs />
      <TravelTips />
      <Toolkits />
      <TravelTypes />
    </div>
  );
}

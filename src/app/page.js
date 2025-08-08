import Banner from "@/app/components/Banner";
import LatestBlogs from "./components/LatestBlogs";
import TravelTips from "./components/TravelTips";

export default function Home() {
  return (
    <div>
      <Banner />
      <LatestBlogs />
      <TravelTips />
    </div>
  );
}

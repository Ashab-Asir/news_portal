import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div
      className="flex gap-2 items-center bg-base-200
    p-2 mt-3"
    >
      <p className="bg-[#d72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee className="space-x-5" pauseOnHover={true}>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;

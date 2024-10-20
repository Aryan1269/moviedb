import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

const Toprated = () => {
  return (
    <>
      <Navbar />
      <Cards url={"https://api.themoviedb.org/3/movie/top_rated"} />
    </>
  );
};

export default Toprated;

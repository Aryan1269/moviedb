import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Cards url={"https://api.themoviedb.org/3/movie/popular"} />
    </>
  );
};

export default Homepage;

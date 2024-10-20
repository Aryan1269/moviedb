import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
const Upcoming = () => {
  return (
    <>
      <Navbar />
      <Cards url={"https://api.themoviedb.org/3/movie/upcoming"} />
    </>
  );
};

export default Upcoming;

import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

const MovieSearch = () => {
  const { query } = useParams();
  return (
    <>
      <Navbar />
      <br />
      <p style={{
        fontSize : "2rem",
        fontWeight : "bold",
        padding  : "1em 1.5em",
      }}>Showing results for: " {query} "</p>
      <Cards url={"https://api.themoviedb.org/3/search/movie"} query={query}/>
    </>
  );
};

export default MovieSearch;

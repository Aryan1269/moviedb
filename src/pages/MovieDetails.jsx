import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import icon from "../assets/noImage.jpg";
import "../components/css/moviedetail.css";

const MovieDetails = () => {
  const [products, setProducts] = useState({});
  const [cast, setCast] = useState([]);
  const { moviename } = useParams();

  async function getData() {
    try {
      let movie = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviename}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );

      let credits = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviename}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setCast(credits.data.cast);
      setProducts(movie.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData();
    return () => {
      setProducts({});
      setCast([]);
    };
  }, [moviename]);
  return (
    <>
      <Navbar />
      <main>
        <div className="movie-details">
          <div className="left">
            <div className="movie-poster">
              <img
                height="180"
                src={
                  products.poster_path
                    ? `https://image.tmdb.org/t/p/original/${products.poster_path}`
                    : icon
                }
                alt={products.title || "No poster available"}
              />
              <div className="info">
                <h2>{products.title}</h2>
                <p className="rating">Rating: {products.vote_average}</p>
                <div className="gener">
                  <span>{products.runtime} min</span>
                  {products.genres && products.genres.length > 0 && (
                    <div className="genres">
                      {products.genres.map((g) => (
                        <p key={g.id}>{g.name},</p>
                      ))}
                    </div>
                  )}
                </div>
                <p className="release">Release Date: {products.release_date}</p>
              </div>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              <p>{products.overview}</p>
            </div>
          </div>
          <div
            className="right"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${products.backdrop_path})`,
            }}
          ></div>
        </div>
        <div className="credits">
          <h1>Cast</h1>
          <div className="cast">
            {cast.map((c) => (
              <div className="cast_card">
                <img
                  height={"250"}
                  src={
                    c.profile_path
                      ? `https://image.tmdb.org/t/p/original/${c.profile_path}`
                      : icon
                  }
                  alt=""
                />
                <p>{c.name}</p>
                <p>{c.character}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieDetails;

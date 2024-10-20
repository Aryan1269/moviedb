import axios from "axios";
import "./css/card.css";
import { useEffect, useRef, useState } from "react";
import icon from "../assets/noImage.jpg";
import { Link } from "react-router-dom";

const Cards = ({ url, query }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const total_pages = useRef(1);

  async function getData() {
    try {
      let movie = await axios.get(
        `${url}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}&query=${query}`
      );
      total_pages.current = movie.data.total_pages;
      setProducts(movie.data.results);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData();

    return () => setProducts([]);
  }, [page]);

  return products ? (
    <>
      <section className="card">
        {products.length > 0 &&
          products.map((p, i) => {
            return (
              <Link to={`/details/${p.id}`} key={i}>
                <div className="image_container">
                  <img
                    height="300"
                    loading="lazy"
                    src={
                      p.poster_path
                        ? `https://image.tmdb.org/t/p/original/${
                            p.poster_path || p.backdrop_path
                          }`
                        : icon
                    }
                    alt="poster"
                  />
                </div>
                <div className="card_content">
                  <h2>{p.title || p.original_title}</h2>
                  <span>Rating : {p.vote_average.toFixed(2)}</span>
                </div>
              </Link>
            );
          })}
      </section>

      <div className="pagination">
        <button
          onClick={() => {
            setPage((prev) => Math.max(prev - 1, 1));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          prev
        </button>
        {page} of {total_pages.current}
        <button
          onClick={() => {
            setPage((prev) => Math.min(prev + 1, total_pages.current));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          next
        </button>
      </div>
    </>
  ) : (
    <p>loading...</p>
  );
};

export default Cards;

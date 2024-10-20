import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Upcoming from "./pages/Upcoming";
import Toprated from "./pages/Toprated";
import MovieDetails from "./pages/MovieDetails";
import MovieSearch from "./pages/MovieSearch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/toprated" element={<Toprated />} />
      <Route path="/details/:moviename" element={<MovieDetails />} />
      <Route path="/search/:query" element={<MovieSearch />} />
    </Routes>
  );
};

export default App;

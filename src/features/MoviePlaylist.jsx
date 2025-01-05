import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button";
import { movies } from "../assets/moviesJSON";
import { addMovie, removeMovie } from "../store";

export default function MoviePlaylist() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies);

  const handleAddMovie = () => {
    const movie = movies[Math.floor(Math.random() * 10)]?.Title;
    dispatch(addMovie(movie));
  };

  const deleteMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h1>Movies Playlist</h1>
      <Button primary onClick={handleAddMovie}>
        Add a random movie
      </Button>
      <ul>
        {movieList?.map((movie, index) => (
          <li className="flex" key={index}>
            {movie}
            <Button
              className="ml-2"
              danger
              onClick={() => deleteMovie(index)}
            >
              x
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

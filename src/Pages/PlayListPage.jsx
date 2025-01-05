import { useDispatch } from "react-redux";
import Button from "../Components/Button";
import MoviePlaylist from "../features/moviePlaylist";
import SongsPlaylist from "../features/SongsPlaylist";
import { reset } from "../store/index.jsx";

export default function PlayListPage() {
const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(reset())
  }

  return (
    <div>
      <Button secondary onClick={resetAll}>Reset playlist</Button>
      <MoviePlaylist />
      <SongsPlaylist />
    </div>
  );
}

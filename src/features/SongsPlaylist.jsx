import { songs } from "../assets/songsJSON";
import { addSong, removeSongs } from "../store";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";

export default function SongsPlaylist() {
  const dispatch = useDispatch();
  const songList = useSelector((state) => {
    return state.songs;
  });

  const addNewSong = () => {
    console.log('add new')
    dispatch(addSong(songs[Math.floor(Math.random() * 10)]?.title));
  };

  const deleteSong = (id) => {
    dispatch(removeSongs(id));
  };

  return (
    <div>
      <h1>Songs Playlist</h1>
      <Button primary onClick={addNewSong}>
        Add a random song
      </Button>
      <ul>
        {songList.map((song, index) => (
          <li className="flex" key={index}>
            {song}{" "}
            <Button
              danger
              className="ml-2"
              onClick={() => deleteSong(index)}
            >
              x
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

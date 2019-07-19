import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "song1", duration: "3:00" },
    { title: "song2", duration: "4:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

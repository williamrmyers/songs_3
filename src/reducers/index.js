import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "I need a chick",
      duration: "3:00"
    },
    {
      title: "Pacific Coast Highway",
      duration: "3:30"
    },
    {
      title: "Happy When it Rains",
      duration: "4:30"
    },
    {
      title: "Anti Pope",
      duration: "4:00"
    }
  ];
};

const selectedSongreducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }
  return { selectedSong };
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongreducer
});

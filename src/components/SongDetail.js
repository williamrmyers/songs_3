import React from "react";
import { connect } from "react-redux";

const SongList = ({ song }) => {
  // console.log(props);
  console.log(song);
  if (!song) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h1>Details For:</h1>
      <p>
        Title: {song.title}
        <br />
        duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongList);

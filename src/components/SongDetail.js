import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>select a song</div>;
  }
  //aconsole.log(title);
  return <div>{selectedSong.title}</div>;
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

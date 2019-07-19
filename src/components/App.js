import React from "react";
import SongsList from "./SongsList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="cloumn eight wide">
          <SongsList />
        </div>
        <div className="cloumn eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;

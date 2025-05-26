import React from "react";
import Profile from "./profile.jsx";
import Statistics from "./statistics.jsx";
import userData from "./user.json";

const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <Statistics title="Upload Stats" />
    </div>
  );
};

export default App;

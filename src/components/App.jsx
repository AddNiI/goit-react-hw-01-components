import React from "react";
import Profile from "./profile.jsx";
import Statistics from "./statistics.jsx";
import FriendList from "./friendList.jsx"; 
import userData from "./user.json";
import friendsData from "./friends.json"; 

const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <Statistics title="Upload Stats" />
      <FriendList friends={friendsData} />
    </div>
  );
};

export default App;

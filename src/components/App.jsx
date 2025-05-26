import React from "react";
import userData from "./user.json";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <img src={avatar} alt={`${username}'s avatar`} className="profile-avatar" />
      <h2 className="profile-username">{username}</h2>
      <p className="profile-tag">@{tag}</p>
      <p className="profile-location">{location}</p>
      <div className="profile-stats">
        <p>Followers: {stats.followers}</p>
        <p>Views: {stats.views}</p>
        <p>Likes: {stats.likes}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;

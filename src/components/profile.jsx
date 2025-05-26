import React from "react";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <img src={avatar} alt={`${username}'s avatar`} />
      <h2>{username}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
      <div>
        <p>Followers: {stats.followers}</p>
        <p>Views: {stats.views}</p>
        <p>Likes: {stats.likes}</p>
      </div>
    </div>
  );
};

export default Profile;

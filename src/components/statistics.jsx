import React from "react";

const statisticsData = [
  { id: "id-1", label: ".docx", percentage: 4 },
  { id: "id-2", label: ".mp3", percentage: 14 },
  { id: "id-3", label: ".pdf", percentage: 41 },
  { id: "id-4", label: ".mp4", percentage: 12 },
  { id: "id-4", label: ".psd", percentage: 47 }
];

const Statistics = ({ title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title || "Upload stats"}</h2>
      <ul className="stat-list">
        {statisticsData.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
/*Я устал прокидывать костыли что бы это хотя б как-то работало */
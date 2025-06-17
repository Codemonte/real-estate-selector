
import React from "react";
import "./TowerCard.css";

interface Tower {
  id: string;
  name: string;
  thumbnail: string;
}

const TowerCard = ({ tower }: { tower: Tower }) => {
  return (
    <div className="tower-card">
      <img src={tower.thumbnail} alt={tower.name} className="tower-thumbnail" loading="lazy" />
      <h1>{tower.name}</h1>
    </div>
  );
};

export default TowerCard;

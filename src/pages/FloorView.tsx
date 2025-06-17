import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { floors } from '../data/mockData';
import BackButton from '../components/BackButton';
import './FloorView.css';

const FloorView = () => {
  const { towerId } = useParams();

  return (
    <div className="page-container">
      <BackButton />
      <h2 className="page-title">Select a Floor</h2>
      <div className="grid-container">
        {floors.map((floor) => (
          <Link
            key={floor}
            to={`/tower/${towerId}/floor/${floor}`}
            className="grid-item"
          >
            Floor {floor}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FloorView;

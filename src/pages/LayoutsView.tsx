import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { layouts } from '../data/mockData';
import BackButton from '../components/BackButton';
import './LayoutsView.css';

const LayoutsView = () => {
  const { towerId, floorNumber } = useParams();

  return (
    <div className="page-container">
      <BackButton />
      <h2 className="page-title">Available Layouts</h2>
      <div className="layout-grid">
        {layouts.map((layout) => (
          <Link
            key={layout.id}
            to={`/tower/${towerId}/floor/${floorNumber}/layout/${layout.id}`}
            className="layout-card"
          >
            <div className="layout-thumbnail-wrapper">
              <img src={layout.image} alt={layout.unitType} loading="lazy" />
            </div>
            <div className="layout-info">
              <p><strong>Area:</strong> {layout.area} sqm</p>
              <p><strong>Type:</strong> {layout.unitType}</p>
              <p><strong>Rooms:</strong> {layout.roomCount}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LayoutsView;

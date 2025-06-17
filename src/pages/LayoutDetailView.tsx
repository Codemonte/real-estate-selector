import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { layouts } from '../data/mockData';
import BackButton from '../components/BackButton';
import './LayoutDetailView.css';

const LayoutDetailView = () => {
  const { layoutId } = useParams();
  const [visible, setVisible] = useState(false);
  const layout = layouts.find((item) => item.id.toString() === layoutId);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50); // triggers fade-in
  }, []);

  if (!layout) return <div className="page-container">Layout not found.</div>;

  return (
    <div className={`page-container fade-in ${visible ? 'visible' : ''}`}>
      <BackButton />
      <h2 className="page-title">Layout Details</h2>
      <div className="layout-detail-card">
        <img src={layout.image} alt="Layout" className="layout-detail-image" />
        <div className="layout-detail-info">
          <p><strong>Area:</strong> {layout.area} sqm</p>
          <p><strong>Unit Type:</strong> {layout.unitType}</p>
          <p><strong>Room Count:</strong> {layout.roomCount}</p>
        </div>
      </div>
    </div>
  );
};

export default LayoutDetailView;

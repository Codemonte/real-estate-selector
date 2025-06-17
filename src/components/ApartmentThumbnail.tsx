import React from "react";

type Props = {
  layout: {
    id: string;
    area: string;
    type: string;
    rooms: number;
    image: string;
  };
};

const ApartmentThumbnail = ({ layout }: Props) => (
  <div className="thumbnail-container">
    <img src={layout.image} alt="apartment layout" />
    <div className="meta">
      <p>{layout.area}</p>
      <p>{layout.type}</p>
      <p>{layout.rooms} Rooms</p>
    </div>
  </div>
);

export default ApartmentThumbnail;

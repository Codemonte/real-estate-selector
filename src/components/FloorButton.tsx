import React from "react";

type Props = {
  floor: number;
};

const FloorButton = ({ floor }: Props) => (
  <div className="card">
    Floor {floor}
  </div>
);

export default FloorButton;

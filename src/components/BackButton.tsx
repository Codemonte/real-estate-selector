// src/components/BackButton.tsx
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="back-button-wrapper">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
    </div>
  );
};

export default BackButton;

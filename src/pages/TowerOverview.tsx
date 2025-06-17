import { Link } from "react-router-dom";
import { towers } from "../data/mockData";
import TowerCard from "../components/TowerCard";

const TowerOverview = () => (

 <div className="container fade-in">
  <h1>Select a Tower</h1>
    <div className="grid" style={{ marginTop: "20px" }}>
      {towers.map((tower) => (
  <Link key={tower.id} to={`/tower/${tower.id}`}>
    <TowerCard tower={tower} />
  </Link>
  ))}
    </div>
  </div>
);

export default TowerOverview;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TowerOverview from "./pages/TowerOverview";
import FloorView from "./pages/FloorView";
import LayoutsView from "./pages/LayoutsView";
import LayoutDetailView from "./pages/LayoutDetailView";
import Header from "./components/Header";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><TowerOverview /></PageWrapper>} />
        <Route path="/tower/:towerId" element={<PageWrapper><FloorView /></PageWrapper>} />
        <Route path="/tower/:towerId/floor/:floorNumber" element={<PageWrapper><LayoutsView /></PageWrapper>} />
        <Route path="/tower/:towerId/floor/:floorNumber/layout/:layoutId" element={<PageWrapper><LayoutDetailView /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="fade-wrapper"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

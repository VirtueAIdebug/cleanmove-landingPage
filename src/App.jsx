import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import RoutesPage from "./pages/RoutesPage";
import TrucksPage from "./pages/TrucksPage";
import MapPage from "./pages/MapPage";
import CoveragePage from "./pages/CoveragePage";
import MarketsPage from "./pages/MarketsPage";
import CollectionPointsPage from "./pages/CollectionPointsPage";
import ReportPage from "./pages/ReportPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/trucks" element={<TrucksPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/coverage" element={<CoveragePage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/collection-points" element={<CollectionPointsPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

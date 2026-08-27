import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#f4faf6] text-slate-900 dark:bg-[#07100c] dark:text-white">
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}

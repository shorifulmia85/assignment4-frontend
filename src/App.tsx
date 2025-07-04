import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/custom/ScrollTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <div className="mb-32">
        <Navbar />
      </div>
      <ScrollToTop />
      <main className="min-h-screen flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;

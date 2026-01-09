import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/Layout/LoadingScreen";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import AIInsightsPage from "./pages/AIInsightsPage";
import DashboardPage from "./pages/DashboardPage"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Show loading screen for 2.5 seconds, then show login
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handle login success
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Simple routing
  const renderPage = () => {
    switch(currentPage) {
      case "marketplace":
        return <MarketplacePage />;
      case "insights": // <-- TAMBAHKAN CASE INI
        return <AIInsightsPage />;
      case "dashboard": // ← TAMBAH CASE INI
        return <DashboardPage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  // Update navbar to change pages
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
        
        {!isLoading && !isLoggedIn && (
          <LoginPage key="login" onLogin={handleLogin} />
        )}
        
        {!isLoading && isLoggedIn && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen flex flex-col"
          >
            <Navbar onNavClick={handleNavClick} currentPage={currentPage} />
            <div className="flex-grow">
              {renderPage()}
            </div>
            <Footer onNavClick={handleNavClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
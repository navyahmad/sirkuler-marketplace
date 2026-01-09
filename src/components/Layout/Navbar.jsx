import { useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/logoo.png';
import { 
  FaHome, 
  FaShoppingCart, 
  FaChartLine, 
  FaUser,
  FaBars,
  FaTimes,
  FaRocket,
  FaSearch
} from "react-icons/fa";

const Navbar = ({ onNavClick, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Beranda", icon: <FaHome className="text-lg" />, key: "home" },
    { name: "Marketplace", icon: <FaShoppingCart className="text-lg" />, key: "marketplace" },
    { name: "AI Insights", icon: <FaChartLine className="text-lg" />, key: "insights" },
    { name: "Dashboard", icon: <FaUser className="text-lg" />, key: "dashboard" },
  ];

  const handleNavClick = (pageKey) => {
    onNavClick(pageKey);
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-emerald-50"
              >
                <img 
                  src={logo} 
                  alt="Sirkuler Logo"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2310b981'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='24'%3ES%3C/text%3E%3C/svg%3E";
                  }}
                />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">Sirkulernavy</h1>
              <p className="text-xs text-emerald-600 -mt-1">Economy Platform</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.key)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className={`flex items-center space-x-2 font-medium group ${
                  currentPage === item.key
                    ? 'text-emerald-900 font-bold'
                    : 'text-emerald-700 hover:text-emerald-900'
                }`}
              >
                <span className={`${currentPage === item.key ? 'text-emerald-900' : 'text-emerald-600'}`}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
                <motion.div
                  className="h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
            
            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 text-emerald-600 hover:text-emerald-800"
              onClick={() => handleNavClick("marketplace")}
            >
              <FaSearch />
            </motion.button>
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("insights")}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-200 transition-shadow flex items-center space-x-2"
            >
              <FaRocket />
              <span>Coba AI</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-emerald-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.key)}
                className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors ${
                  currentPage === item.key
                    ? 'bg-emerald-100 text-emerald-900 font-bold'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span className={`${currentPage === item.key ? 'text-emerald-900' : 'text-emerald-600'}`}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
            <button 
              onClick={() => handleNavClick("insights")}
              className="w-full mt-4 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-semibold rounded-xl flex items-center justify-center space-x-2"
            >
              <FaRocket />
              <span>Coba AI Gratis</span>
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

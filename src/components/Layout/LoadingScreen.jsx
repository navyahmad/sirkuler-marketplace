import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRecycle, FaSeedling } from "react-icons/fa";
import logo from '../assets/logoo.png';
import logoo from '/public/logoo.png';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-green-800"
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0.5, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1.5
        }}
        className="mb-8"
      >
        <div className="relative">
          {/* Main Icon - DIGANTI DENGAN LOGO CUSTOM */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="w-32 h-32 rounded-full border-4 border-emerald-300 border-opacity-50 flex items-center justify-center bg-white/10 backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-20 h-20 rounded-full bg-white p-3 flex items-center justify-center"
            >
              <img 
                src={logoo} 
                alt="Sirkuler Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2310b981'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='30' font-weight='bold'%3ES%3C/text%3E%3C/svg%3E";
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Circling Icons */}
          {[FaRecycle, FaSeedling, FaRecycle].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="absolute p-2 bg-emerald-500 rounded-full"
              style={{
                top: `${Math.sin(i * 2 * Math.PI / 3) * 50 + 50}%`,
                left: `${Math.cos(i * 2 * Math.PI / 3) * 50 + 50}%`,
              }}
            >
              <Icon className="text-lg text-white" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Sirkuler</h1>
        <p className="text-emerald-200">Mengubah limbah menjadi nilai tambah</p>
        
        {/* Loading Bar */}
        <div className="mt-8 w-64 h-2 bg-emerald-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-emerald-400 to-green-300"
          />
        </div>
        
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-4 text-emerald-300 text-sm"
        >
          Memuat ekonomi sirkular...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;

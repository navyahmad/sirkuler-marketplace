import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaShoppingCart, 
  FaMoneyBillWave, 
  FaExchangeAlt,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
import { useState } from "react";

const StatsOverview = ({ monthly, yearly, products }) => {
  const [timeframe, setTimeframe] = useState("monthly");
  const stats = timeframe === "monthly" ? monthly : yearly;

  const statCards = [
    {
      key: "sales",
      title: "Total Penjualan",
      value: `Rp ${stats.sales.toLocaleString()}`,
      icon: <FaShoppingCart className="text-2xl" />,
      color: "from-emerald-500 to-green-400",
      change: stats.change,
    },
    {
      key: "purchases",
      title: "Total Pembelian",
      value: `Rp ${stats.purchases.toLocaleString()}`,
      icon: <FaMoneyBillWave className="text-2xl" />,
      color: "from-blue-500 to-cyan-400",
      change: timeframe === "monthly" ? "+12%" : "+28%",
    },
    {
      key: "profit",
      title: "Keuntungan Bersih",
      value: `Rp ${stats.profit.toLocaleString()}`,
      icon: <FaChartLine className="text-2xl" />,
      color: "from-purple-500 to-pink-400",
      change: timeframe === "monthly" ? "+15%" : "+35%",
    },
    {
      key: "transactions",
      title: "Total Transaksi",
      value: stats.transactions,
      icon: <FaExchangeAlt className="text-2xl" />,
      color: "from-amber-500 to-yellow-400",
      change: timeframe === "monthly" ? "+8%" : "+25%",
    },
  ];

  const productStats = [
    { label: "Produk Dijual", value: products.selling, color: "bg-emerald-500" },
    { label: "Produk Dibeli", value: products.buying, color: "bg-blue-500" },
    { label: "Total Produk", value: products.total, color: "bg-purple-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-emerald-900">Statistik Performa</h3>
          <p className="text-emerald-600">Ringkasan aktivitas dan keuangan</p>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          {["monthly", "yearly"].map((period) => (
            <motion.button
              key={period}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTimeframe(period)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                timeframe === period
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
              }`}
            >
              {period === "monthly" ? "Bulan Ini" : "Tahun Ini"}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat, idx) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`bg-gradient-to-br ${stat.color} text-white p-5 rounded-2xl shadow-lg`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="flex items-center">
                {stat.change.startsWith('+') ? (
                  <FaArrowUp className="text-green-300 mr-1" />
                ) : (
                  <FaArrowDown className="text-red-300 mr-1" />
                )}
                <span className="text-sm font-bold">{stat.change}</span>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-white/90 text-sm">{stat.title}</div>
            </div>
            
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 1 }}
                className="h-full bg-white"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Stats */}
      <div>
        <h4 className="font-bold text-emerald-900 mb-4">Ringkasan Produk</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 + 0.5 }}
              className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-emerald-900">{stat.value}</div>
                  <div className="text-emerald-700 text-sm">{stat.label}</div>
                </div>
                <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {stat.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StatsOverview;
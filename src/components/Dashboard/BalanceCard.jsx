import { motion } from "framer-motion";
import { 
  FaWallet, 
  FaClock, 
  FaMoneyBillWave, 
  FaEye,
  FaEyeSlash
} from "react-icons/fa";
import { useState } from "react";

const BalanceCard = ({ balance }) => {
  const [showBalance, setShowBalance] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const balanceItems = [
    {
      label: "Saldo Tersedia",
      value: balance.available,
      icon: <FaWallet className="text-emerald-500" />,
      color: "text-emerald-600",
    },
    {
      label: "Dalam Proses",
      value: balance.pending,
      icon: <FaClock className="text-amber-500" />,
      color: "text-amber-600",
    },
    {
      label: "Total Saldo",
      value: balance.total,
      icon: <FaMoneyBillWave className="text-purple-500" />,
      color: "text-purple-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gradient-to-br from-emerald-600 to-green-500 rounded-2xl shadow-xl p-6 text-white"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold">Dompet Sirkuler</h3>
          <p className="text-emerald-100">Saldo dan keuangan Anda</p>
        </div>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="p-2 hover:bg-white/20 rounded-full transition-colors"
        >
          {showBalance ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* Total Balance */}
      <div className="mb-8">
        <div className="text-emerald-100 mb-2">Total Saldo</div>
        <div className="text-4xl font-bold mb-2">
          {showBalance ? formatCurrency(balance.total) : "••••••••"}
        </div>
        <div className="text-emerald-100 text-sm">
          Terakhir diperbarui: {balance.lastUpdated}
        </div>
      </div>

      {/* Balance Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {balanceItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 + 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl"
          >
            <div className="flex items-center mb-2">
              {item.icon}
              <span className="ml-2 text-emerald-100 text-sm">{item.label}</span>
            </div>
            <div className={`text-xl font-bold ${item.color}`}>
              {showBalance ? formatCurrency(item.value) : "••••••"}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 bg-white text-emerald-700 font-bold rounded-xl text-center"
        >
          Tarik Dana
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl text-center hover:bg-white/30 transition-colors"
        >
          Top Up
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BalanceCard;
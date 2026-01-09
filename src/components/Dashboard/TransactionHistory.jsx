import { motion } from "framer-motion";
import { 
  FaReceipt, 
  FaShoppingCart, 
  FaBox, 
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaFilter
} from "react-icons/fa";
import { useState } from "react";

const TransactionHistory = ({ transactions }) => {
  const [filter, setFilter] = useState("all");

  const getStatusIcon = (status) => {
    switch(status) {
      case "completed":
        return <FaCheckCircle className="text-green-500" />;
      case "processing":
        return <FaClock className="text-amber-500" />;
      case "shipping":
        return <FaTruck className="text-blue-500" />;
      default:
        return <FaExclamationCircle className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-amber-100 text-amber-800";
      case "shipping":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type) => {
    return type === "penjualan" 
      ? <FaShoppingCart className="text-emerald-500" />
      : <FaBox className="text-blue-500" />;
  };

  const filteredTransactions = filter === "all" 
    ? transactions 
    : transactions.filter(t => t.type === filter);

  const filters = [
    { id: "all", label: "Semua" },
    { id: "penjualan", label: "Penjualan" },
    { id: "pembelian", label: "Pembelian" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <FaReceipt className="text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-900">Riwayat Transaksi</h3>
            <p className="text-emerald-600">6 transaksi terbaru</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <FaFilter className="text-emerald-500" />
          <div className="flex space-x-1 bg-emerald-50 rounded-xl p-1">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filter === f.id
                    ? "bg-emerald-600 text-white"
                    : "text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-emerald-100">
              <th className="text-left py-3 px-4 text-emerald-700 font-semibold">ID Transaksi</th>
              <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Tanggal</th>
              <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Tipe</th>
              <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Produk</th>
              <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Jumlah</th>
              <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, idx) => (
              <motion.tr
                key={transaction.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-emerald-50 hover:bg-emerald-50/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="font-mono text-sm text-emerald-900">{transaction.id}</div>
                </td>
                <td className="py-4 px-4 text-emerald-700">{transaction.date}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(transaction.type)}
                    <span className={`font-medium ${
                      transaction.type === "penjualan" ? "text-emerald-700" : "text-blue-700"
                    }`}>
                      {transaction.type}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium text-emerald-900">{transaction.product}</div>
                    <div className="text-sm text-emerald-600">
                      {transaction.quantity} {transaction.unit} • {transaction.type === "penjualan" ? "ke" : "dari"} {transaction.type === "penjualan" ? transaction.buyer : transaction.seller}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className={`font-bold ${
                    transaction.type === "penjualan" ? "text-emerald-700" : "text-blue-700"
                  }`}>
                    {transaction.type === "penjualan" ? "+" : "-"}Rp {transaction.amount.toLocaleString()}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(transaction.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status === "completed" ? "Selesai" : 
                       transaction.status === "processing" ? "Diproses" : 
                       transaction.status === "shipping" ? "Dikirim" : "Menunggu"}
                    </span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border-2 border-emerald-200 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
        >
          Lihat Semua Transaksi
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TransactionHistory;
import { motion } from "framer-motion";
import { 
  FaBell, 
  FaMoneyBillWave, 
  FaRobot, 
  FaStar, 
  FaShoppingCart,
  FaHistory
} from "react-icons/fa";

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch(type) {
      case "sale":
        return <FaShoppingCart className="text-emerald-500" />;
      case "purchase":
        return <FaMoneyBillWave className="text-blue-500" />;
      case "ai_insight":
        return <FaRobot className="text-purple-500" />;
      case "rating":
        return <FaStar className="text-amber-500" />;
      case "withdrawal":
        return <FaMoneyBillWave className="text-green-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <FaHistory className="text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-900">Aktivitas Terbaru</h3>
            <p className="text-emerald-600">Riwayat aktivitas Anda</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
          5 baru
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start p-3 rounded-xl hover:bg-emerald-50 transition-colors group"
          >
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                {getActivityIcon(activity.type)}
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-emerald-900">{activity.message}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm text-emerald-600">{activity.time}</span>
                {activity.amount && (
                  <span className={`text-sm font-bold ${
                    activity.amount.startsWith('+') ? 'text-emerald-700' : 'text-red-600'
                  }`}>
                    {activity.amount}
                  </span>
                )}
              </div>
            </div>
            
            <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
        >
          Lihat Semua Aktivitas
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ActivityFeed;
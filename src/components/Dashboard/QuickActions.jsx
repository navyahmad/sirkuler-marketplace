import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaArrowRight, 
  FaLightbulb,
  FaShoppingCart,
  FaBox,
  FaRobot,
  FaMoneyBillWave,
  FaChartBar,
  FaCog
} from "react-icons/fa";

// Icon mapping untuk convert emoji string ke React component
const iconMap = {
  "🛒": FaShoppingCart,
  "📦": FaBox,
  "🤖": FaRobot,
  "💰": FaMoneyBillWave,
  "📊": FaChartBar,
  "⚙️": FaCog
};

const QuickActions = ({ actions, onActionClick }) => {
  const getIcon = (iconString) => {
    // Jika icon sudah React component, return langsung
    if (typeof iconString !== 'string') return iconString;
    
    // Jika icon adalah emoji string, convert ke React component
    const IconComponent = iconMap[iconString];
    return IconComponent ? <IconComponent /> : iconString;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-emerald-900">Aksi Cepat</h3>
          <p className="text-emerald-600">Akses fitur dengan satu klik</p>
        </div>
        <div className="p-2 bg-emerald-100 rounded-lg">
          <FaRocket className="text-emerald-600" />
        </div>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, idx) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onActionClick(action.route)}
            className="flex flex-col items-center justify-center p-4 rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all group"
          >
            <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform text-white`}>
              {getIcon(action.icon)}
            </div>
            <div className="text-center">
              <div className="font-bold text-emerald-900 text-sm mb-1">{action.title}</div>
              <div className="text-xs text-emerald-600">{action.description}</div>
            </div>
            <FaArrowRight className="mt-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>

      {/* Pro Tip */}
      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
            <FaLightbulb className="text-emerald-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-emerald-800">
              <span className="font-bold">Tip:</span> Gunakan "Analisis AI" untuk mendapatkan rekomendasi harga terbaik berdasarkan kondisi pasar saat ini.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickActions;

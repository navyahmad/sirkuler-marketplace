import { motion } from "framer-motion";
import { FaLightbulb, FaArrowUp, FaArrowDown, FaBullseye, FaClock } from "react-icons/fa";

const InsightCard = ({ insight }) => {
  const getImpactColor = (impact) => {
    switch(impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getImpactIcon = (impact) => {
    switch(impact) {
      case 'high': return <FaArrowUp className="text-red-500" />;
      case 'medium': return <FaBullseye className="text-yellow-500" />;
      case 'low': return <FaArrowDown className="text-green-500" />;
      default: return <FaLightbulb className="text-gray-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-emerald-100">
        <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex-shrink-0">
              <FaLightbulb className="text-emerald-600 text-base sm:text-lg md:text-xl" />
            </div>
            <h3 className="font-bold text-emerald-900 text-sm sm:text-base md:text-lg line-clamp-2">{insight.title}</h3>
          </div>
          <div className={`flex items-center space-x-1 px-2 sm:px-3 py-1 rounded-full border text-xs sm:text-sm flex-shrink-0 ${getImpactColor(insight.impact)}`}>
            {getImpactIcon(insight.impact)}
            <span className="font-bold">{insight.impact.toUpperCase()}</span>
          </div>
        </div>
        <p className="text-emerald-700 text-xs sm:text-sm">{insight.description}</p>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <div className="mb-3 sm:mb-4">
          <div className="text-xs sm:text-sm text-emerald-600 mb-1">Rekomendasi Tindakan</div>
          <div className="font-bold text-emerald-900 text-base sm:text-lg">{insight.action}</div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <FaClock className="text-emerald-500 text-xs sm:text-sm" />
              <span className="text-emerald-700">{insight.timeframe}</span>
            </div>
            <div className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
              {insight.confidence}% percaya diri
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
        <div className="flex justify-between text-xs text-emerald-600 mb-1">
          <span>Tingkat Kepercayaan AI</span>
          <span>{insight.confidence}%</span>
        </div>
        <div className="h-2 bg-emerald-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${insight.confidence}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full bg-gradient-to-r from-emerald-400 to-green-400"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="p-3 sm:p-4 bg-emerald-50 border-t border-emerald-100">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 sm:py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors text-sm sm:text-base"
        >
          Terapkan Insight
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InsightCard;
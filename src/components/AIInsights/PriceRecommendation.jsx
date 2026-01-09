import { motion } from "framer-motion";
import { 
  FaMoneyBillWave, 
  FaArrowUp, 
  FaArrowDown, 
  FaEquals,
  FaLightbulb,
  FaChartBar
} from "react-icons/fa";

const PriceRecommendation = ({ recommendation }) => {
  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return <FaArrowUp className="text-green-500" />;
      case 'down': return <FaArrowDown className="text-red-500" />;
      default: return <FaEquals className="text-blue-500" />;
    }
  };

  const getTrendColor = (trend) => {
    switch(trend) {
      case 'up': return 'bg-green-100 text-green-800';
      case 'down': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-4 sm:p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1.5 sm:p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <FaMoneyBillWave className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold">{recommendation.material}</h3>
              <p className="text-xs sm:text-sm text-emerald-100">Rekomendasi Harga AI</p>
            </div>
          </div>
          <div className={`px-2 sm:px-3 py-1 rounded-full flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${getTrendColor(recommendation.trend)}`}>
            {getTrendIcon(recommendation.trend)}
            <span className="font-bold">
              {recommendation.trend === 'up' ? 'Naik' : recommendation.trend === 'down' ? 'Turun' : 'Stabil'}
            </span>
          </div>
        </div>
      </div>

      {/* Price Comparison */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl">
            <div className="text-xs sm:text-sm text-gray-600 mb-1">Harga Pasar</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Rp {recommendation.currentMarketPrice.toLocaleString()}
            </div>
          </div>
          
          <div className="text-center p-3 sm:p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="text-xs sm:text-sm text-green-600 mb-1">Rekomendasi Beli</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
              Rp {recommendation.recommendedBuy.toLocaleString()}
            </div>
          </div>
          
          <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-xs sm:text-sm text-blue-600 mb-1">Rekomendasi Jual</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700">
              Rp {recommendation.recommendedSell.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Potential Profit */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <FaLightbulb className="text-emerald-500 text-base sm:text-lg flex-shrink-0" />
              <div>
                <div className="font-bold text-emerald-900 text-sm sm:text-base">Potensi Keuntungan</div>
                <div className="text-xs sm:text-sm text-emerald-700">
                  Jika beli di rekomendasi dan jual di rekomendasi
                </div>
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-700">
              +{((recommendation.recommendedSell - recommendation.recommendedBuy) / recommendation.recommendedBuy * 100).toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="space-y-3">
          <div className="flex items-center text-emerald-700">
            <FaChartBar className="mr-3 text-emerald-500" />
            <span className="font-medium">Alasan Rekomendasi AI:</span>
          </div>
          <ul className="space-y-2">
            {recommendation.reasons.map((reason, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start p-3 bg-emerald-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></div>
                <span className="text-emerald-700">{reason}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Confidence */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-emerald-600 mb-2">
            <span>Tingkat Kepercayaan AI</span>
            <span>{recommendation.confidence}%</span>
          </div>
          <div className="h-2 bg-emerald-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${recommendation.confidence}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
            />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4 bg-gray-50 border-t border-emerald-100">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Terapkan Rekomendasi Ini
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PriceRecommendation;
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaFire, FaSnowflake, FaBalanceScale } from "react-icons/fa";

const MarketHeatmap = ({ data }) => {
  const getHeatColor = (value, type) => {
    if (type === 'supply') {
      if (value >= 80) return 'bg-green-100 text-green-800 border-green-300';
      if (value >= 60) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      return 'bg-red-100 text-red-800 border-red-300';
    } else {
      if (value >= 90) return 'bg-red-100 text-red-800 border-red-300';
      if (value >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      return 'bg-green-100 text-green-800 border-green-300';
    }
  };

  const getHeatIcon = (supply, demand) => {
    const ratio = demand / supply;
    if (ratio > 1.3) return <FaFire className="text-red-500" />;
    if (ratio < 0.7) return <FaSnowflake className="text-blue-500" />;
    return <FaBalanceScale className="text-green-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-emerald-100 rounded-xl">
            <FaMapMarkerAlt className="text-lg sm:text-xl md:text-2xl text-emerald-600" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-emerald-900">Heatmap Pasar Regional</h3>
            <p className="text-xs sm:text-sm text-emerald-600">Analisis supply-demand per wilayah</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <span>Seimbang</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <span>Ketat</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((region, idx) => (
          <motion.div
            key={region.region}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors gap-3 sm:gap-0"
          >
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm">
                {getHeatIcon(region.supply, region.demand)}
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 text-sm sm:text-base">{region.region}</h4>
                <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                  <span>Indeks Harga: {region.priceIndex}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 md:space-x-4 gap-2 sm:gap-0">
              <div className={`px-2 sm:px-3 py-1 rounded-full border text-xs sm:text-sm ${getHeatColor(region.supply, 'supply')}`}>
                Supply: {region.supply}%
              </div>
              <div className={`px-2 sm:px-3 py-1 rounded-full border text-xs sm:text-sm ${getHeatColor(region.demand, 'demand')}`}>
                Demand: {region.demand}%
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs sm:text-sm text-gray-600">Peluang</div>
                <div className={`text-base sm:text-lg font-bold ${
                  region.demand > region.supply ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {Math.abs(region.demand - region.supply)}%
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PERBAIKAN DI SINI: ganti > menjadi {'>'} */}
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <div className="text-sm text-blue-800">
          <span className="font-bold">Insight AI:</span> Wilayah dengan demand tinggi dan supply rendah 
          (selisih {'>'}20%) berpotensi untuk ekspansi pasar atau kenaikan harga.
        </div>
      </div>
    </motion.div>
  );
};

export default MarketHeatmap;
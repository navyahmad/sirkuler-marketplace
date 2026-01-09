import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaExclamationTriangle, 
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SupplyPredictionChart = ({ data }) => {
  const getStatusColor = (current, predicted) => {
    const decrease = ((current - predicted) / current) * 100;
    if (decrease > 30) return "text-red-500";
    if (decrease > 15) return "text-yellow-500";
    return "text-green-500";
  };

  const getStatusIcon = (current, predicted) => {
    const decrease = ((current - predicted) / current) * 100;
    if (decrease > 30) return <FaExclamationTriangle className="text-red-500" />;
    if (decrease > 15) return <FaExclamationTriangle className="text-yellow-500" />;
    return <FaCheckCircle className="text-green-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-xl border border-emerald-100 p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-emerald-100 rounded-xl">
            <FaChartLine className="text-lg sm:text-xl md:text-2xl text-emerald-600" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-emerald-900">Prediksi Supply 30 Hari</h3>
            <p className="text-xs sm:text-sm text-emerald-600">Analisis kecerdasan buatan untuk perencanaan</p>
          </div>
        </div>
        <div className="text-xs sm:text-sm text-emerald-700 bg-emerald-100 px-2 sm:px-3 py-1 rounded-full w-fit">
          Akurasi: {data.confidence}%
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-emerald-200">
          <div className="text-xs sm:text-sm text-emerald-600 mb-1">Stok Saat Ini</div>
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-900">
            {data.currentStock.toLocaleString()} kg
          </div>
        </div>
        
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-emerald-200">
          <div className="text-xs sm:text-sm text-emerald-600 mb-1">Prediksi 30 Hari</div>
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-900">
            {data.predictedStock30Days.toLocaleString()} kg
          </div>
        </div>
        
        <div className={`bg-white p-3 sm:p-4 rounded-xl border ${
          getStatusColor(data.currentStock, data.predictedStock30Days).replace('text', 'border')
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs sm:text-sm text-emerald-600 mb-1">Status</div>
              <div className={`text-base sm:text-lg md:text-xl font-bold ${getStatusColor(data.currentStock, data.predictedStock30Days)}`}>
                {((data.currentStock - data.predictedStock30Days) / data.currentStock * 100).toFixed(1)}% Turun
              </div>
            </div>
            <div className="text-lg sm:text-xl">
              {getStatusIcon(data.currentStock, data.predictedStock30Days)}
            </div>
          </div>
        </div>
      </div>

      <div className="h-48 sm:h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              stroke="#6b7280"
              label={{ value: 'Hari ke-', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              stroke="#6b7280"
              label={{ value: 'Stok (kg)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #d1fae5',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              name="Prediksi AI" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              name="Data Aktual" 
              stroke="#f59e0b" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-50 rounded-xl border border-amber-200">
        <div className="flex items-start space-x-2 sm:space-x-3">
          <FaExclamationTriangle className="text-amber-500 text-base sm:text-lg md:text-xl mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-amber-800 text-sm sm:text-base">Rekomendasi AI:</h4>
            <p className="text-amber-700 text-xs sm:text-sm">
              {data.predictedStock30Days < data.currentStock * 0.7 
                ? "Stok akan turun signifikan. Rekomendasi: tingkatkan produksi atau cari supplier alternatif."
                : "Stok dalam kondisi aman. Pertahankan level produksi saat ini."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SupplyPredictionChart;
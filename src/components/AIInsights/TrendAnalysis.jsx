import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaCalendarAlt, 
  FaArrowUp, 
  FaArrowDown 
} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from "recharts";

const TrendAnalysis = ({ data }) => {
  const calculateTrend = () => {
    const first = data[0].demand;
    const last = data[data.length - 1].demand;
    const trend = ((last - first) / first) * 100;
    return {
      value: trend,
      direction: trend > 0 ? 'up' : 'down',
      strength: Math.abs(trend) > 10 ? 'strong' : Math.abs(trend) > 5 ? 'moderate' : 'weak'
    };
  };

  const trend = calculateTrend();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100 p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-blue-100 rounded-xl">
            <FaChartLine className="text-lg sm:text-xl md:text-2xl text-blue-600" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900">Analisis Tren Pasar</h3>
            <p className="text-xs sm:text-sm text-blue-600">Perkembangan 12 bulan terakhir</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
          trend.direction === 'up' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {trend.direction === 'up' ? (
            <FaArrowUp className="text-green-600" />
          ) : (
            <FaArrowDown className="text-red-600" />
          )}
          <span className="font-bold">
            {trend.direction === 'up' ? '+' : ''}{trend.value.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="h-48 sm:h-64 md:h-80 mb-4 sm:mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="month" 
              stroke="#6b7280"
              tick={{ fill: '#4b5563' }}
            />
            <YAxis 
              stroke="#6b7280"
              tick={{ fill: '#4b5563' }}
              domain={[70, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #dbeafe',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="demand" 
              stroke="#3b82f6" 
              fill="url(#colorDemand)" 
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#10b981" 
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <defs>
              <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <FaCalendarAlt className="text-blue-500 text-sm sm:text-base" />
            <div className="text-xs sm:text-sm font-medium text-blue-700">Musim Puncak</div>
          </div>
          <div className="text-base sm:text-lg font-bold text-blue-900">Mei - Juli</div>
          <div className="text-xs sm:text-sm text-blue-600">Permintaan tertinggi</div>
        </div>
        
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              trend.direction === 'up' ? 'bg-green-500' : 'bg-red-500'
            }`} />
            <div className="text-xs sm:text-sm font-medium text-green-700">Tren {trend.direction === 'up' ? 'Naik' : 'Turun'}</div>
          </div>
          <div className={`text-base sm:text-lg font-bold ${
            trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.strength === 'strong' ? 'Kuat' : trend.strength === 'moderate' ? 'Sedang' : 'Lemah'}
          </div>
          <div className="text-xs sm:text-sm text-green-600">Kekuatan tren</div>
        </div>
        
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-purple-200 sm:col-span-2 lg:col-span-1">
          <div className="text-xs sm:text-sm font-medium text-purple-700 mb-2">Rekomendasi AI</div>
          <div className="text-base sm:text-lg font-bold text-purple-900">
            {trend.direction === 'up' ? 'Tambah Stok' : 'Kurangi Stok'}
          </div>
          <div className="text-xs sm:text-sm text-purple-600">
            {trend.direction === 'up' 
              ? 'Persiapkan untuk peningkatan permintaan' 
              : 'Hindari overstocking'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendAnalysis;
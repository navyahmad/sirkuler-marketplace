import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBrain, 
  FaRobot, 
  FaChartLine, 
  FaMoneyBillWave,
  FaLightbulb,
  FaMapMarkerAlt,
  FaComments,
  FaSeedling,
  FaAppleAlt,
  FaFlask,
  FaDrumstickBite,
  FaChartBar,
  FaBullseye
} from "react-icons/fa";
import SupplyPredictionChart from "../components/AIInsights/SupplyPredictionChart";
import PriceRecommendation from "../components/AIInsights/PriceRecommendation";
import MarketHeatmap from "../components/AIInsights/MarketHeatmap";
import TrendAnalysis from "../components/AIInsights/TrendAnalysis";
import AIChatbot from "../components/AIInsights/AIChatbot";
import InsightCard from "../components/AIInsights/InsightCard";
import {
  supplyPredictions,
  priceRecommendations,
  marketTrends,
  regionalData,
  aiInsights
} from "../data/mockAIData";

const AIInsightsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState(
    supplyPredictions && supplyPredictions.length > 0 ? supplyPredictions[0] : null
  );

  const tabs = [
    { id: "all", label: "Semua Insights", icon: <FaBrain /> },
    { id: "supply", label: "Prediksi Supply", icon: <FaChartLine /> },
    { id: "price", label: "Rekomendasi Harga", icon: <FaMoneyBillWave /> },
    { id: "market", label: "Intelijen Pasar", icon: <FaMapMarkerAlt /> },
    { id: "trend", label: "Analisis Tren", icon: <FaChartLine /> }
  ];

  const materials = [
    { id: "jerami", name: "Jerami Padi", icon: <FaSeedling /> },
    { id: "sekam", name: "Sekam Padi", icon: <FaSeedling /> },
    { id: "tongkol", name: "Tongkol Jagung", icon: <FaAppleAlt /> },
    { id: "pupuk", name: "Pupuk Kompos", icon: <FaFlask /> },
    { id: "pakan", name: "Pakan Ternak", icon: <FaDrumstickBite /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Header - Responsive */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="w-full md:w-2/3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <FaRobot className="text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    AI Insights Sirkuler
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-emerald-100">
                    Kecerdasan buatan untuk keputusan bisnis yang lebih cerdas
                  </p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full sm:w-auto mt-4 sm:mt-0 bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold">87%</div>
                <div className="text-sm sm:text-base text-emerald-100">Akurasi Prediksi</div>
              </div>
              <div className="h-2 bg-white/30 rounded-full mt-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tabs Navigation - Responsive */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto py-3 sm:py-4 space-x-1 scrollbar-hide">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl whitespace-nowrap transition-all text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span className="text-base sm:text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Responsive */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Material Selector - Responsive */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-3 sm:mb-4">Pilih Material untuk Analisis</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {materials.map((material) => (
              <motion.button
                key={material.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (supplyPredictions && supplyPredictions.length > 0) {
                    const found = supplyPredictions.find(sp => 
                      sp.material.toLowerCase().includes(material.id)
                    );
                    setSelectedMaterial(found || supplyPredictions[0]);
                  }
                }}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border transition-all text-sm sm:text-base ${
                  selectedMaterial && selectedMaterial.material && selectedMaterial.material.toLowerCase().includes(material.id)
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-emerald-200 text-emerald-600 hover:border-emerald-300'
                }`}
              >
                <span className="text-lg sm:text-xl text-emerald-600">{material.icon}</span>
                <span className="font-medium">{material.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Dashboard - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Left Column - Supply Prediction */}
          <div className="lg:col-span-2">
            {selectedMaterial ? (
              <SupplyPredictionChart data={selectedMaterial} />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6">
                <p className="text-emerald-700 text-sm sm:text-base">Pilih material untuk melihat prediksi supply</p>
              </div>
            )}
          </div>

          {/* Right Column - Price Recommendations */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-emerald-900 flex items-center">
              <FaMoneyBillWave className="mr-2 text-emerald-500 text-base sm:text-lg md:text-xl" />
              Rekomendasi Harga
            </h3>
            {priceRecommendations && priceRecommendations.length > 0 ? (
              priceRecommendations.map((rec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <PriceRecommendation recommendation={rec} />
                </motion.div>
              ))
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6">
                <p className="text-emerald-700 text-xs sm:text-sm">Tidak ada rekomendasi harga tersedia</p>
              </div>
            )}
          </div>
        </div>

        {/* Second Row - Market Intelligence - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            {regionalData && regionalData.length > 0 ? (
              <MarketHeatmap data={regionalData} />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
                <p className="text-emerald-700 text-sm">Memuat data heatmap...</p>
              </div>
            )}
          </div>
          <div>
            {marketTrends && marketTrends.length > 0 ? (
              <TrendAnalysis data={marketTrends} />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
                <p className="text-emerald-700 text-sm">Memuat data tren...</p>
              </div>
            )}
          </div>
        </div>

        {/* Third Row - AI Assistant & Insights - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-emerald-900 mb-3 sm:mb-4 flex items-center">
              <FaLightbulb className="mr-2 text-emerald-500 text-base sm:text-lg md:text-xl" />
              AI-Generated Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {aiInsights && aiInsights.length > 0 ? (
                aiInsights.map((insight, idx) => (
                  <InsightCard key={insight.id || idx} insight={insight} />
                ))
              ) : (
                <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6">
                  <p className="text-emerald-700 text-xs sm:text-sm">Tidak ada insights tersedia</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <AIChatbot />
          </div>
        </div>

        {/* Key Metrics - Responsive */}
        <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-4 sm:mb-6">Metrik Kinerja AI</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "Prediksi Supply", value: "92%", desc: "Akurasi 30 hari" },
              { label: "Rekomendasi Harga", value: "87%", desc: "Keuntungan optimal" },
              { label: "Deteksi Peluang", value: "45", desc: "Insight per bulan" },
              { label: "Kepuasan Pengguna", value: "4.8", desc: "Rating dari 5" }
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-3 sm:p-4 bg-emerald-50 rounded-xl"
              >
                <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-1 sm:mb-2">{metric.value}</div>
                <div className="font-medium text-emerald-900 text-sm sm:text-base">{metric.label}</div>
                <div className="text-xs sm:text-sm text-emerald-600">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works - Responsive */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Bagaimana AI Kami Bekerja?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-white flex justify-center">
                <FaChartBar />
              </div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Analisis Data Historis</h4>
              <p className="text-emerald-100 text-xs sm:text-sm">AI menganalisis 5+ tahun data pasar untuk mengidentifikasi pola</p>
            </div>
            <div className="p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-white flex justify-center">
                <FaRobot />
              </div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Machine Learning</h4>
              <p className="text-emerald-100 text-xs sm:text-sm">Model prediktif yang terus belajar dari data baru</p>
            </div>
            <div className="p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-white flex justify-center">
                <FaBullseye />
              </div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Rekomendasi Cerdas</h4>
              <p className="text-emerald-100 text-xs sm:text-sm">Insight yang dapat ditindaklanjuti untuk keputusan bisnis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsPage;

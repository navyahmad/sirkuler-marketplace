import { motion } from "framer-motion";
import UserProfile from "../components/Dashboard/UserProfile";
import StatsOverview from "../components/Dashboard/StatsOverview";
import BalanceCard from "../components/Dashboard/BalanceCard";
import TransactionHistory from "../components/Dashboard/TransactionHistory";
import QuickActions from "../components/Dashboard/QuickActions";
import ActivityFeed from "../components/Dashboard/ActivityFeed";
import { 
  userProfile, 
  statsOverview, 
  recentTransactions, 
  quickActions, 
  activityFeed, 
  walletBalance 
} from "../data/mockDashboardData";
import { FaTachometerAlt, FaCog, FaBell, FaBullseye } from "react-icons/fa";

const DashboardPage = () => {
  const handleActionClick = (route) => {
    alert(`Navigasi ke: ${route}`);
    // Di implementasi nyata, ini akan navigasi ke halaman tertentu
  };

  const handleEditProfile = () => {
    alert("Membuka editor profil");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between"
          >
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <FaTachometerAlt className="text-3xl" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
                  <p className="text-emerald-100">Selamat datang kembali, {userProfile.name}!</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
              >
                <FaBell className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors flex items-center space-x-2"
              >
                <FaCog />
                <span>Pengaturan</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-2 space-y-8">
            <UserProfile 
              profile={userProfile} 
              onEdit={handleEditProfile}
            />
            
            <StatsOverview 
              monthly={statsOverview.monthly}
              yearly={statsOverview.yearly}
              products={statsOverview.products}
            />
            
            <TransactionHistory 
              transactions={recentTransactions}
            />
            
            <QuickActions 
              actions={quickActions}
              onActionClick={handleActionClick}
            />
          </div>

          {/* Right Column - Balance & Activity */}
          <div className="space-y-8">
            <BalanceCard 
              balance={walletBalance}
            />
            
            <ActivityFeed 
              activities={activityFeed}
            />
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Statistik Cepat</h3>
              <div className="space-y-4">
                {[
                  { label: "Produk Favorit", value: "Jerami Padi", color: "bg-emerald-500" },
                  { label: "Bulan Terbaik", value: "Mei 2023", color: "bg-green-500" },
                  { label: "Rata-rata Rating", value: "4.8/5.0", color: "bg-amber-500" },
                  { label: "Pembeli Setia", value: "12", color: "bg-blue-500" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl">
                    <span className="text-emerald-700 font-medium">{stat.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-emerald-900">{stat.value}</span>
                      <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl">
                <p className="text-sm text-emerald-800 text-center flex items-center justify-center">
                  <FaBullseye className="mr-2 text-emerald-600" />
                  <span className="font-bold">Target bulan ini:</span> Mencapai Rp 15 juta penjualan
                </p>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "83%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-green-400"
                  />
                </div>
                <div className="text-center text-xs text-emerald-600 mt-1">
                  Rp 12.5M / Rp 15M (83%)
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Tingkatkan Level Anda!</h3>
                <p className="text-emerald-100">
                  Capai 100 transaksi untuk naik ke level Platinum dan dapatkan benefit eksklusif.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{userProfile.totalTransactions}</div>
                    <div className="text-sm text-emerald-200">Transaksi</div>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100</div>
                    <div className="text-sm text-emerald-200">Target</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  Lihat Benefit Platinum
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
import { motion } from "framer-motion";
import StatsCard from "../components/Common/StatsCard";
import FeatureCard from "../components/Common/FeatureCard";
import { 
  FaRocket, 
  FaPlayCircle, 
  FaPhoneAlt, 
  FaUserPlus,
  FaSeedling,
  FaIndustry,
  FaCheckCircle
} from "react-icons/fa";

const HomePage = () => {
  const stats = [
    { value: "0", label: "Petani Terdaftar", iconType: "farmer", color: "bg-emerald-100" },
    { value: "0", label: "Industri Partner", iconType: "industry", color: "bg-green-100" },
    { value: "0 Ton", label: "Limbah Tersalurkan", iconType: "waste", color: "bg-teal-100" },
    { value: "Rp 0", label: "Nilai Transaksi", iconType: "money", color: "bg-cyan-100" },
  ];

  const features = [
    { 
      title: "Marketplace Limbah", 
      desc: "Jual beli limbah pertanian & produk olahan dalam satu platform",
      iconType: "recycle",
      details: ["Jual limbah", "Beli pupuk", "Transaksi aman"]
    },
    { 
      title: "AI Prediksi Supply", 
      desc: "Ramalkan ketersediaan bahan 30 hari ke depan dengan kecerdasan buatan",
      iconType: "robot",
      details: ["Prediksi akurat", "Analisis tren", "Notifikasi real-time"]
    },
    { 
      title: "Rekomendasi Harga AI", 
      desc: "Dapatkan harga terbaik berdasarkan analisis pasar otomatis",
      iconType: "chart",
      details: ["Harga optimal", "Analisis kompetitor", "Insight pasar"]
    },
  ];

  const steps = [
    { step: "1", title: "Daftar & Pilih Role", desc: "Petani, industri, atau pembeli" },
    { step: "2", title: "Upload Produk", desc: "Jual limbah atau produk olahan" },
    { step: "3", title: "AI Analisis", desc: "Dapat prediksi & rekomendasi harga" },
    { step: "4", title: "Transaksi", desc: "Beli/jual dengan sistem aman" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-16 pb-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
        </div>

        {/* Floating Elements dengan Icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-1/4 left-5 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
        >
          <FaSeedling className="text-2xl text-emerald-600" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          className="absolute top-1/3 right-10 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
        >
          <FaIndustry className="text-3xl text-emerald-600" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium mb-6"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              Platform Ekonomi Sirkular Pertama di Indonesia
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6">
              Mengubah <span className="text-emerald-600">Limbah</span>
              <br />
              Menjadi <span className="text-green-600">Nilai Tambah</span>
            </h1>

            <p className="text-xl text-emerald-700 mb-10 max-w-3xl mx-auto">
              Marketplace pertama yang menghubungkan petani, industri, dan pembeli dalam ekosistem ekonomi sirkular. 
              Didukung AI untuk prediksi supply dan rekomendasi harga optimal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-200 transition-all flex items-center justify-center space-x-2"
              >
                <FaRocket />
                <span>Mulai Sekarang Gratis</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl border-2 border-emerald-200 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <FaPlayCircle />
                <span>Lihat Demo AI</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Dampak Nyata Sirkuler
            </h2>
            <p className="text-emerald-600 text-lg">
              Bergabung dengan komunitas peduli lingkungan
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <StatsCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Fitur Unggulan Kami
            </h2>
            <p className="text-emerald-600 text-lg max-w-3xl mx-auto">
              Didukung teknologi modern untuk kemudahan bertransaksi dan keberlanjutan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <FeatureCard {...feature} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Cara Kerja Sirkuler
            </h2>
            <p className="text-emerald-600 text-lg">
              Hanya 4 langkah sederhana untuk bergabung
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 to-green-200 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border border-emerald-100 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-emerald-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-500">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Transformasi Limbah Jadi Uang?
            </h2>
            <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
              Bergabung dengan ratusan petani dan industri yang sudah merasakan manfaat ekonomi sirkular.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-emerald-700 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all text-lg flex items-center justify-center space-x-2"
              >
                <FaUserPlus />
                <span>Daftar Sekarang Gratis</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg flex items-center justify-center space-x-2"
              >
                <FaPhoneAlt />
                <span>Konsultasi Gratis</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
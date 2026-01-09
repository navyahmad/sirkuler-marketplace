import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaRobot, FaUser, FaPaperPlane, FaLightbulb, FaChartPie } from "react-icons/fa";

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Saya AI Assistant Sirkuler. Ada yang bisa saya bantu?", sender: "ai", timestamp: "10:00" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Prediksi supply jerami",
    "Rekomendasi harga pupuk",
    "Trend pasar saat ini",
    "Peluang bisnis terbaru"
  ];

  const aiResponses = {
    "prediksi supply jerami": "Berdasarkan analisis AI, supply jerami diperkirakan turun 32% dalam 30 hari ke depan karena musim panen berakhir. Rekomendasi: tingkatkan stok sebelum harga naik.",
    "rekomendasi harga pupuk": "Harga pupuk kompos saat ini Rp 45.000. AI merekomendasikan beli di Rp 43.000 dan jual di Rp 47.000 untuk keuntungan optimal 9.3%.",
    "trend pasar saat ini": "Tren pasar menunjukkan kenaikan permintaan 12% YoY dengan puncak di Mei-Juli. Harga cenderung naik 8-15% di musim puncak.",
    "peluang bisnis terbaru": "AI mendeteksi peluang ekspor sekam padi ke Vietnam dengan permintaan meningkat 30%. Margin keuntungan potensial: 25-35%."
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = "Saya memahami pertanyaan Anda tentang " + input + ". Berdasarkan analisis data terkini...";

      for (const [key, value] of Object.entries(aiResponses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      const aiMessage = {
        id: messages.length + 2,
        text: response,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl border border-purple-100 p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <FaRobot className="text-lg sm:text-xl md:text-2xl text-white" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-900">AI Assistant</h3>
            <p className="text-xs sm:text-sm text-purple-600">Tanya apa saja tentang pasar</p>
          </div>
        </div>
        <div className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm w-fit">
          Online
        </div>
      </div>

      {/* Chat Container */}
      <div className="h-64 sm:h-80 overflow-y-auto mb-4 p-3 sm:p-4 bg-white/50 rounded-xl backdrop-blur-sm">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div className={`max-w-[85%] sm:max-w-xs lg:max-w-md rounded-2xl p-3 sm:p-4 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-br-none'
                  : 'bg-white border border-purple-200 rounded-bl-none'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {message.sender === 'ai' ? (
                    <FaRobot className="text-purple-500" />
                  ) : (
                    <FaUser className="text-emerald-300" />
                  )}
                  <span className="text-xs opacity-75">{message.timestamp}</span>
                </div>
                <p className={message.sender === 'user' ? 'text-white' : 'text-gray-800'}>
                  {message.text}
                </p>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start mb-4"
            >
              <div className="bg-white border border-purple-200 rounded-2xl rounded-bl-none p-4">
                <div className="flex items-center space-x-2">
                  <FaRobot className="text-purple-500" />
                  <div className="flex space-x-1">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick Replies */}
      <div className="mb-3 sm:mb-4">
        <div className="text-xs sm:text-sm text-purple-700 mb-2">Pertanyaan cepat:</div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {quickReplies.map((reply, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleQuickReply(reply)}
              className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-purple-200 text-purple-700 rounded-xl hover:bg-purple-50 transition-colors text-xs sm:text-sm"
            >
              {reply}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Tanyakan prediksi pasar atau rekomendasi..."
          className="flex-1 p-2 sm:p-3 text-sm sm:text-base border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex-shrink-0"
        >
          <FaPaperPlane className="text-sm sm:text-base" />
        </motion.button>
      </div>

      {/* AI Capabilities */}
      <div className="mt-4 p-3 bg-white/50 rounded-xl">
        <div className="text-sm text-purple-700 mb-2 flex items-center">
          <FaLightbulb className="mr-2" />
          AI mampu:
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center space-x-1">
            <FaChartPie className="text-purple-500" />
            <span>Prediksi Supply</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaChartPie className="text-purple-500" />
            <span>Analisis Harga</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaChartPie className="text-purple-500" />
            <span>Trend Pasar</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaChartPie className="text-purple-500" />
            <span>Rekomendasi Bisnis</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIChatbot;
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCheckCircle,
  FaTruck,
  FaLock,
  FaShieldAlt,
  FaUser,
  FaPhone,
  FaHome,
  FaUniversity,
  FaMobileAlt,
  FaMoneyBillWave
} from "react-icons/fa";

const CheckoutModal = ({ isOpen, onClose, product, cartItems, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "User Demo",
    phone: "081234567890",
    address: "",
    province: "Jawa Barat",
    city: "Bandung",
    postalCode: "40111",
    paymentMethod: "transfer",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: ""
  });

  const steps = [
    { number: 1, title: "Alamat Pengiriman", icon: FaMapMarkerAlt },
    { number: 2, title: "Metode Pembayaran", icon: FaCreditCard },
    { number: 3, title: "Konfirmasi & Bayar", icon: FaCheckCircle },
    { number: 4, title: "Pesanan Diproses", icon: FaTruck }
  ];

  const paymentMethods = [
    { id: "transfer", name: "Transfer Bank", icon: <FaUniversity />, banks: ["BCA", "Mandiri", "BNI", "BRI"] },
    { id: "ewallet", name: "E-Wallet", icon: <FaMobileAlt />, wallets: ["GoPay", "OVO", "Dana", "ShopeePay"] },
    { id: "cod", name: "Bayar di Tempat", icon: <FaMoneyBillWave />, description: "Bayar saat barang diterima" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      
      // Simulate processing on step 4
      if (step === 3) {
        setIsProcessing(true);
        setTimeout(() => {
          setIsProcessing(false);
          onSuccess();
        }, 3000);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getTotalAmount = () => {
    if (product) {
      return product.price + 2000; // product price + admin fee
    }
    if (cartItems.length > 0) {
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + 2000;
    }
    return 0;
  };

  // Step 1: Address Form
  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="p-4 bg-emerald-50 rounded-xl">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-white rounded-lg">
            <FaUser className="text-emerald-600" />
          </div>
          <div>
            <h4 className="font-bold text-emerald-900">{formData.name}</h4>
            <div className="flex items-center text-emerald-600">
              <FaPhone className="text-sm mr-2" />
              {formData.phone}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-2">
            Alamat Lengkap
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Contoh: Jl. Merdeka No. 123, RT 01/RW 02"
            className="w-full p-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            rows="3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-emerald-700 mb-2">
              Provinsi
            </label>
            <select
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              className="w-full p-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option>Jawa Barat</option>
              <option>Jawa Timur</option>
              <option>Jawa Tengah</option>
              <option>DKI Jakarta</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-emerald-700 mb-2">
              Kota
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option>Bandung</option>
              <option>Jakarta</option>
              <option>Surabaya</option>
              <option>Yogyakarta</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-2">
            Kode Pos
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="w-full p-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center p-4 bg-blue-50 rounded-xl">
        <FaLock className="text-blue-500 mr-3" />
        <div>
          <p className="text-sm font-medium text-blue-800">
            Alamat Anda terlindungi dengan enkripsi
          </p>
          <p className="text-xs text-blue-600">
            Data pribadi tidak akan dibagikan ke pihak lain
          </p>
        </div>
      </div>
    </motion.div>
  );

  // Step 2: Payment Method
  const renderStep2 = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            whileHover={{ scale: 1.01 }}
            className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
              formData.paymentMethod === method.id
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-emerald-100 hover:border-emerald-300'
            }`}
            onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{method.icon}</span>
                <div>
                  <h4 className="font-bold text-emerald-900">{method.name}</h4>
                  {method.banks && (
                    <p className="text-sm text-emerald-600">
                      {method.banks.join(', ')}
                    </p>
                  )}
                  {method.wallets && (
                    <p className="text-sm text-emerald-600">
                      {method.wallets.join(', ')}
                    </p>
                  )}
                  {method.description && (
                    <p className="text-sm text-emerald-600">{method.description}</p>
                  )}
                </div>
              </div>
              {formData.paymentMethod === method.id && (
                <FaCheckCircle className="text-emerald-500 text-xl" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Card Details (if selected) */}
      {formData.paymentMethod === 'transfer' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-4 bg-gray-50 rounded-xl space-y-4"
        >
          <h4 className="font-bold text-emerald-900">Detail Rekening Virtual</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-emerald-600">Bank</span>
              <span className="font-bold">BCA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-emerald-600">Nomor Virtual Account</span>
              <span className="font-bold text-lg">8880 1234 5678 9012</span>
            </div>
            <div className="flex justify-between">
              <span className="text-emerald-600">Atas Nama</span>
              <span className="font-bold">PT SIRKULER INDONESIA</span>
            </div>
            <div className="flex justify-between text-red-600 font-bold">
              <span>Batas Waktu Bayar</span>
              <span>23:59 WIB</span>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex items-center p-4 bg-green-50 rounded-xl">
        <FaShieldAlt className="text-green-500 mr-3" />
        <div>
          <p className="text-sm font-medium text-green-800">
            Pembayaran 100% Aman
          </p>
          <p className="text-xs text-green-600">
            Dilindungi sistem keamanan terenkripsi
          </p>
        </div>
      </div>
    </motion.div>
  );

  // Step 3: Order Summary & Confirmation
  const renderStep3 = () => {
    const items = product ? [product] : cartItems;
    
    return (
      <motion.div
        key="step3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        {/* Order Items */}
        <div className="space-y-4">
          <h4 className="font-bold text-emerald-900">Detail Pesanan</h4>
          {items.map((item) => (
            <div key={item.id} className="flex items-center p-4 bg-emerald-50 rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h5 className="font-semibold text-emerald-900">{item.name}</h5>
                <p className="text-sm text-emerald-600">{item.seller}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-emerald-700">
                    {product ? '1' : item.quantity} × Rp {item.price.toLocaleString()}
                  </span>
                  <span className="font-bold text-emerald-900">
                    Rp {(item.price * (product ? 1 : item.quantity)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Address Summary */}
        <div className="p-4 border border-emerald-200 rounded-xl">
          <div className="flex items-center mb-3">
            <FaHome className="text-emerald-500 mr-2" />
            <h4 className="font-bold text-emerald-900">Alamat Pengiriman</h4>
          </div>
          <p className="text-emerald-700">
            {formData.name} ({formData.phone})<br />
            {formData.address}<br />
            {formData.city}, {formData.province} {formData.postalCode}
          </p>
        </div>

        {/* Payment Summary */}
        <div className="p-4 border border-emerald-200 rounded-xl">
          <div className="flex items-center mb-3">
            <FaCreditCard className="text-emerald-500 mr-2" />
            <h4 className="font-bold text-emerald-900">Metode Pembayaran</h4>
          </div>
          <p className="text-emerald-700">
            {paymentMethods.find(m => m.id === formData.paymentMethod)?.name}
          </p>
        </div>

        {/* Total Summary */}
        <div className="space-y-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
          <div className="flex justify-between">
            <span className="text-emerald-700">Subtotal</span>
            <span className="text-emerald-900">Rp {getTotalAmount() - 2000}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-emerald-700">Biaya Admin</span>
            <span className="text-emerald-900">Rp 2.000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-emerald-700">Ongkir</span>
            <span className="text-emerald-900">Gratis</span>
          </div>
          <div className="border-t border-emerald-200 pt-3">
            <div className="flex justify-between text-xl font-bold">
              <span className="text-emerald-900">Total Pembayaran</span>
              <span className="text-emerald-700">Rp {getTotalAmount().toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 rounded-xl">
          <p className="text-sm text-yellow-800 text-center">
            <FaShieldAlt className="inline mr-2" />
            Dengan menekan tombol "Bayar Sekarang", Anda menyetujui syarat dan ketentuan yang berlaku
          </p>
        </div>
      </motion.div>
    );
  };

  // Step 4: Processing & Success
  const renderStep4 = () => (
    <motion.div
      key="step4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      {isProcessing ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-24 h-24 mx-auto mb-6 border-4 border-emerald-200 border-t-emerald-500 rounded-full"
          />
          <h3 className="text-2xl font-bold text-emerald-900 mb-3">
            Memproses Pembayaran
          </h3>
          <p className="text-emerald-600">
            Mohon tunggu sebentar...
          </p>
          <div className="mt-6 space-y-2">
            <div className="h-2 bg-emerald-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
                className="h-full bg-emerald-500"
              />
            </div>
            <p className="text-sm text-emerald-500">Memverifikasi pembayaran...</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-5xl text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-3">
            Pembayaran Berhasil!
          </h3>
          <p className="text-emerald-600 mb-6">
            Pesanan Anda sedang diproses dan akan dikirim dalam 1-3 hari kerja.
          </p>
          
          <div className="space-y-4 p-6 bg-emerald-50 rounded-2xl">
            <div className="flex justify-between">
              <span className="text-emerald-700">No. Pesanan</span>
              <span className="font-bold text-emerald-900">SIRK-2024-00123</span>
            </div>
            <div className="flex justify-between">
              <span className="text-emerald-700">Tanggal</span>
              <span className="font-bold text-emerald-900">6 Jan 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-emerald-700">Estimasi Pengiriman</span>
              <span className="font-bold text-emerald-900">9-11 Jan 2024</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-emerald-900">Total</span>
              <span className="font-bold text-emerald-700">
                Rp {getTotalAmount().toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-800">
              Anda akan menerima email konfirmasi dan notifikasi pengiriman.
              Lacak pesanan di dashboard Anda.
            </p>
          </div>
        </>
      )}
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step === 4 && !isProcessing ? onClose : null}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-emerald-100 z-10">
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-emerald-900">
                      {step === 4 ? (isProcessing ? 'Memproses...' : 'Pembayaran Berhasil') : 'Checkout'}
                    </h2>
                    <p className="text-emerald-600">
                      Langkah {step} dari {steps.length}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    disabled={isProcessing && step === 4}
                    className="p-2 hover:bg-emerald-50 rounded-full transition-colors disabled:opacity-50"
                  >
                    <FaTimes className="text-emerald-600 text-xl" />
                  </button>
                </div>

                {/* Progress Steps */}
                {step < 4 && (
                  <div className="px-6 pb-6">
                    <div className="flex justify-between">
                      {steps.map((s, index) => {
                        const Icon = s.icon;
                        const isActive = s.number === step;
                        const isCompleted = s.number < step;
                        
                        return (
                          <div key={s.number} className="flex flex-col items-center flex-1">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 relative ${
                                isActive
                                  ? 'bg-emerald-500 text-white'
                                  : isCompleted
                                  ? 'bg-emerald-100 text-emerald-500'
                                  : 'bg-gray-100 text-gray-400'
                              }`}
                            >
                              {isCompleted ? (
                                <FaCheckCircle />
                              ) : (
                                <Icon />
                              )}
                              {index < steps.length - 1 && (
                                <div className="absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2">
                                  <div className={`h-full ${
                                    isCompleted ? 'bg-emerald-500' : 'bg-gray-200'
                                  }`} />
                                </div>
                              )}
                            </motion.div>
                            <span className={`text-xs font-medium ${
                              isActive ? 'text-emerald-700' : 'text-gray-500'
                            }`}>
                              {s.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}
                  {step === 4 && renderStep4()}
                </AnimatePresence>
              </div>

              {/* Footer Buttons */}
              {step < 4 && (
                <div className="sticky bottom-0 bg-white border-t border-emerald-100 p-6">
                  <div className="flex justify-between">
                    {step > 1 && step < 4 && (
                      <button
                        onClick={handleBack}
                        className="px-6 py-3 border-2 border-emerald-200 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
                      >
                        Kembali
                      </button>
                    )}
                    <div className="flex-1" />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNext}
                      className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      {step === 3 ? 'Bayar Sekarang' : 'Lanjutkan'}
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Close button for success step */}
              {step === 4 && !isProcessing && (
                <div className="p-6 border-t border-emerald-100">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Tutup
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
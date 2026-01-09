import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaTimes, FaTrash, FaPlus, FaMinus, FaWallet } from "react-icons/fa";
import { useState } from "react";

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      onCheckout();
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-emerald-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <FaShoppingCart className="text-emerald-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900">Keranjang</h2>
                  <p className="text-sm text-emerald-600">
                    {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-emerald-50 rounded-full transition-colors"
              >
                <FaTimes className="text-emerald-600 text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center">
                    <FaShoppingCart className="text-4xl text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">
                    Keranjang Kosong
                  </h3>
                  <p className="text-emerald-600">
                    Tambahkan produk dari marketplace
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center p-4 bg-emerald-50 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="ml-4 flex-1">
                        <h4 className="font-semibold text-emerald-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-emerald-600">
                          Rp {item.price.toLocaleString()}/{item.unit}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-emerald-50 rounded"
                          >
                            <FaMinus className="text-emerald-600 text-xs" />
                          </button>
                          <span className="font-bold text-emerald-900 min-w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-emerald-50 rounded"
                          >
                            <FaPlus className="text-emerald-600 text-xs" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-emerald-100 p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-700">Subtotal</span>
                    <span className="text-xl font-bold text-emerald-900">
                      Rp {calculateTotal().toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-700">Biaya Admin</span>
                    <span className="text-emerald-900">Rp 2.000</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-lg font-bold pt-4 border-t border-emerald-200">
                    <span className="text-emerald-900">Total</span>
                    <span className="text-2xl text-emerald-700">
                      Rp {(calculateTotal() + 2000).toLocaleString()}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3"
                >
                  {isCheckingOut ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <>
                      <FaWallet />
                      <span>Lanjut ke Pembayaran</span>
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
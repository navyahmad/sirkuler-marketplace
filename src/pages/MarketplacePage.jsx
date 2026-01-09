import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockProducts, categories } from "../data/mockProducts";
import ProductCard from "../components/Marketplace/ProductCard";
import CartDrawer from "../components/Marketplace/CartDrawer";
import CheckoutModal from "../components/Marketplace/CheckoutModal";
import FilterSidebar from "../components/Marketplace/FilterSidebar";
import { 
  FaShoppingCart, 
  FaFilter, 
  FaLeaf, 
  FaRecycle,
  FaStore,
  FaShoppingBag,
  FaCheckCircle
} from "react-icons/fa";

const MarketplacePage = () => {
  // State Management
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [sortBy, setSortBy] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = mockProducts
    .filter(product => {
      // Category filter
      if (selectedCategory !== "all") {
        if (selectedCategory === "limbah" && product.category !== "limbah") return false;
        if (selectedCategory === "olahan" && product.category !== "olahan") return false;
        if (selectedCategory === "pupuk" && product.type !== "Pupuk" && product.type !== "Pupuk Cair") return false;
        if (selectedCategory === "pakan" && product.type !== "Pakan") return false;
        if (selectedCategory === "briket" && product.type !== "Briket") return false;
        if (selectedCategory === "jamur" && product.type !== "Jamur") return false;
      }

      // Price filter
      if (product.price < priceRange.min || product.price > priceRange.max) return false;

      // Search filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.seller.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "popular":
          return b.reviews - a.reviews;
        default:
          return b.id - a.id; // newest first
      }
    });

  // Cart functions
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Show success notification
    showNotification(`${product.name} ditambahkan ke keranjang!`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setIsCheckoutOpen(true);
  };

  const handleCartCheckout = () => {
    setIsCartOpen(false);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setCheckoutSuccess(true);
    setCartItems([]);
    setTimeout(() => {
      setCheckoutSuccess(false);
    }, 5000);
  };

  const showNotification = (message) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 z-[100] px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg animate-fade-in';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('animate-fade-out');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                Marketplace Sirkuler
              </h1>
              <p className="text-emerald-100 text-sm sm:text-base md:text-lg">
                Temukan limbah pertanian dan produk olahan berkualitas
              </p>
            </div>
            
            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="md:mt-0 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all flex items-center space-x-2 sm:space-x-3"
            >
              <div className="relative">
                <FaShoppingCart className="text-xl sm:text-2xl" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </div>
              <div className="text-left">
                <div className="font-bold text-sm sm:text-base">Keranjang</div>
                <div className="text-xs sm:text-sm text-emerald-100">
                  Rp {cartTotal.toLocaleString()}
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            {[
              { icon: <FaLeaf />, label: "Limbah Pertanian", value: "3 Jenis" },
              { icon: <FaRecycle />, label: "Produk Olahan", value: "5 Kategori" },
              { icon: <FaStore />, label: "Penjual Terverifikasi", value: "50+" },
              { icon: <FaShoppingBag />, label: "Produk Tersedia", value: "1000+" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="text-xl sm:text-2xl">{stat.icon}</div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-emerald-100">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-600 text-white rounded-xl font-semibold shadow-lg"
          >
            <FaFilter />
            <span>Filter & Urutkan</span>
          </button>

          {/* Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onSearch={setSearchTerm}
            />
          </div>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isFilterOpen && (
              <div className="lg:hidden fixed inset-0 z-50">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setIsFilterOpen(false)}
                />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25 }}
                  className="absolute left-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
                >
                <div className="sticky top-0 bg-white border-b border-emerald-100 p-4 flex items-center justify-between z-10">
                  <h3 className="text-xl font-bold text-emerald-900">Filter Produk</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-emerald-50 rounded-full"
                  >
                    <FaFilter className="text-emerald-600" />
                  </button>
                </div>
                <div className="p-4">
                  <FilterSidebar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={(cat) => {
                      setSelectedCategory(cat);
                      setIsFilterOpen(false);
                    }}
                    priceRange={priceRange}
                    onPriceChange={setPriceRange}
                    sortBy={sortBy}
                    onSortChange={(sort) => {
                      setSortBy(sort);
                      setIsFilterOpen(false);
                    }}
                    onSearch={setSearchTerm}
                  />
                </div>
              </motion.div>
            </div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Results Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-900">
                  {filteredProducts.length} Produk Ditemukan
                </h2>
                <p className="text-sm sm:text-base text-emerald-600">
                  {selectedCategory === "all" ? "Semua produk" : 
                   categories.find(c => c.id === selectedCategory)?.name}
                </p>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-700 font-medium rounded-full text-xs sm:text-sm">
                  Harga: Rp {priceRange.min.toLocaleString()} - Rp {priceRange.max.toLocaleString()}
                </div>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="lg:hidden px-3 sm:px-4 py-2 bg-emerald-600 text-white rounded-xl"
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center">
                  <FaFilter className="text-4xl text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  Produk tidak ditemukan
                </h3>
                <p className="text-emerald-600">
                  Coba ubah filter pencarian Anda
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onBuyNow={handleBuyNow}
                  />
                ))}
              </div>
            )}

            {/* Empty State Notification */}
            {checkoutSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-lg max-w-[90%] sm:max-w-none"
              >
                <span className="flex items-center space-x-2 text-sm sm:text-base">
                  <FaCheckCircle className="text-base sm:text-lg flex-shrink-0" />
                  <span>Pesanan berhasil diproses! Cek dashboard untuk status pengiriman.</span>
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCartCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        product={selectedProduct}
        cartItems={cartItems}
        onSuccess={handleCheckoutSuccess}
      />
    </div>
  );
};

export default MarketplacePage;
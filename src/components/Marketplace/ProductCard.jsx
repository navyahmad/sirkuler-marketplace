import { motion } from "framer-motion";
import { FaShoppingCart, FaStar, FaMapMarkerAlt, FaLeaf, FaRecycle } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getCategoryIcon = (category) => {
    return category === "limbah" ? <FaRecycle className="text-emerald-500" /> : <FaLeaf className="text-green-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center space-x-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full">
          {getCategoryIcon(product.category)}
          <span className="text-xs font-medium text-emerald-700">
            {product.category === "limbah" ? "Limbah" : "Olahan"}
          </span>
        </div>
        
        {/* Stock Badge */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
          Stok: {product.stock} {product.unit}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <h3 className="font-bold text-emerald-900 text-base sm:text-lg line-clamp-2 flex-1">
            {product.name}
          </h3>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="ml-2 flex-shrink-0"
          >
            {getCategoryIcon(product.category)}
          </motion.div>
        </div>

        {/* Price */}
        <div className="mb-3 sm:mb-4">
          <div className="text-xl sm:text-2xl font-bold text-emerald-700">
            Rp {product.price.toLocaleString()}
            <span className="text-xs sm:text-sm text-emerald-500 font-normal"> /{product.unit}</span>
          </div>
        </div>

        {/* Seller & Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-emerald-600">
            <FaMapMarkerAlt className="mr-2 text-emerald-400" />
            {product.location}
          </div>
          <div className="text-sm text-gray-600">
            Penjual: <span className="font-medium text-emerald-700">{product.seller}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="font-bold text-emerald-800">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({product.reviews} ulasan)</span>
          </div>
          <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
            {product.type}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="flex-1 flex items-center justify-center space-x-2 py-2.5 sm:py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-100 transition-colors text-sm sm:text-base"
          >
            <FaShoppingCart className="text-sm sm:text-base" />
            <span>+ Keranjang</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onBuyNow(product)}
            className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all text-sm sm:text-base"
          >
            Beli Sekarang
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
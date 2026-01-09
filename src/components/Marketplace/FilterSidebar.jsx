import { motion } from "framer-motion";
import { FaFilter, FaSearch, FaSortAmountDown } from "react-icons/fa";
import { useState } from "react";

const FilterSidebar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  priceRange,
  onPriceChange,
  sortBy,
  onSortChange,
  onSearch
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortOptions = [
    { id: "newest", label: "Terbaru" },
    { id: "price-low", label: "Harga Terendah" },
    { id: "price-high", label: "Harga Tertinggi" },
    { id: "rating", label: "Rating Tertinggi" },
    { id: "popular", label: "Paling Laris" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 h-fit lg:sticky lg:top-6"
    >
      {/* Header */}
      <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
        <div className="p-1.5 sm:p-2 bg-emerald-100 rounded-lg">
          <FaFilter className="text-emerald-600 text-base sm:text-lg" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-emerald-900">Filter Produk</h3>
          <p className="text-xs sm:text-sm text-emerald-600">Temukan produk terbaik</p>
        </div>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="mb-4 sm:mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari produk..."
            className="w-full p-2.5 sm:p-3 pl-10 sm:pl-12 text-sm sm:text-base border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm sm:text-base" />
        </div>
      </form>

      {/* Categories */}
      <div className="mb-4 sm:mb-6">
        <h4 className="font-bold text-emerald-900 mb-2 sm:mb-3 text-sm sm:text-base">Kategori</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{category.name}</span>
                <span className={`text-xs sm:text-sm px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {category.count}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4 sm:mb-6">
        <h4 className="font-bold text-emerald-900 mb-2 sm:mb-3 text-sm sm:text-base">Rentang Harga</h4>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <div className="flex justify-between text-xs sm:text-sm text-emerald-600 mb-2">
              <span>Rp {priceRange.min.toLocaleString()}</span>
              <span>Rp {priceRange.max.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100000"
              value={priceRange.max}
              onChange={(e) => onPriceChange({ ...priceRange, max: parseInt(e.target.value) })}
              className="w-full h-2 bg-emerald-200 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500"
            />
          </div>
          <div className="flex space-x-2">
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) => onPriceChange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
              className="flex-1 p-2 text-sm sm:text-base border border-emerald-200 rounded-lg"
              placeholder="Min"
            />
            <span className="text-emerald-600 flex items-center">-</span>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) => onPriceChange({ ...priceRange, max: parseInt(e.target.value) || 100000 })}
              className="flex-1 p-2 text-sm sm:text-base border border-emerald-200 rounded-lg"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Sort */}
      <div>
        <div className="flex items-center space-x-2 mb-2 sm:mb-3">
          <FaSortAmountDown className="text-emerald-600 text-sm sm:text-base" />
          <h4 className="font-bold text-emerald-900 text-sm sm:text-base">Urutkan</h4>
        </div>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onSortChange(option.id)}
              className={`w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
                sortBy === option.id
                  ? 'bg-emerald-100 text-emerald-700 font-bold'
                  : 'text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          onCategoryChange("all");
          onPriceChange({ min: 0, max: 100000 });
          onSortChange("newest");
          setSearchTerm("");
          onSearch("");
        }}
        className="w-full mt-4 sm:mt-6 py-2.5 sm:py-3 border-2 border-emerald-200 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors text-sm sm:text-base"
      >
        Reset Filter
      </motion.button>
    </motion.div>
  );
};

export default FilterSidebar;
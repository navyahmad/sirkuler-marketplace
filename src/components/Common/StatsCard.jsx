import { motion } from "framer-motion";
import { 
  FaUserTie, 
  FaIndustry, 
  FaBoxOpen, 
  FaMoneyBillWave,
  FaLeaf 
} from "react-icons/fa";

const iconComponents = {
  farmer: FaUserTie,
  industry: FaIndustry,
  waste: FaBoxOpen,
  money: FaMoneyBillWave,
  leaf: FaLeaf
};

const StatsCard = ({ value, label, iconType, color }) => {
  const IconComponent = iconComponents[iconType] || FaLeaf;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${color} p-6 rounded-2xl shadow-lg border border-white/50 text-center`}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-white/20 rounded-full">
          <IconComponent className="text-3xl text-emerald-700" />
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-emerald-900 mb-2"
      >
        {value}
      </motion.div>
      <div className="text-emerald-700 font-medium">{label}</div>
    </motion.div>
  );
};

export default StatsCard;
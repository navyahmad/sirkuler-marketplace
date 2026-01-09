import { motion } from "framer-motion";
import { 
  FaRecycle, 
  FaRobot, 
  FaChartBar,
  FaCheckCircle 
} from "react-icons/fa";

const iconComponents = {
  recycle: FaRecycle,
  robot: FaRobot,
  chart: FaChartBar
};

const FeatureCard = ({ title, desc, iconType, details, index }) => {
  const IconComponent = iconComponents[iconType] || FaRecycle;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gradient-to-b from-white to-emerald-50 p-8 rounded-2xl shadow-xl border border-emerald-100 h-full"
    >
      <motion.div
        initial={{ rotate: -180, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="w-20 h-20 mb-6 mx-auto bg-gradient-to-br from-emerald-400 to-green-300 rounded-2xl flex items-center justify-center text-white shadow-lg"
      >
        <IconComponent className="text-3xl" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
        {title}
      </h3>
      
      <p className="text-emerald-700 mb-6 text-center">
        {desc}
      </p>
      
      <ul className="space-y-3">
        {details.map((detail, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 + 0.3 }}
            className="flex items-center text-emerald-600"
          >
            <FaCheckCircle className="text-emerald-500 mr-3 text-sm" />
            {detail}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
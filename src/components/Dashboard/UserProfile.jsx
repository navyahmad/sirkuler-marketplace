import { motion } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaStar,
  FaCheckCircle,
  FaEdit
} from "react-icons/fa";

const UserProfile = ({ profile, onEdit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Avatar & Basic Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-100">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onEdit}
              className="absolute bottom-2 right-2 p-2 bg-emerald-600 text-white rounded-full shadow-lg"
            >
              <FaEdit className="text-sm" />
            </motion.button>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-emerald-900">{profile.name}</h2>
            <div className="flex items-center justify-center md:justify-start space-x-2 mt-1">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                {profile.role}
              </span>
              {profile.verification && (
                <span className="flex items-center text-green-600 text-sm">
                  <FaCheckCircle className="mr-1" />
                  Terverifikasi
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-emerald-700">
                <FaEnvelope className="mr-3 text-emerald-500" />
                <span className="text-sm">{profile.email}</span>
              </div>
              <div className="flex items-center text-emerald-700">
                <FaPhone className="mr-3 text-emerald-500" />
                <span className="text-sm">{profile.phone}</span>
              </div>
              <div className="flex items-center text-emerald-700">
                <FaMapMarkerAlt className="mr-3 text-emerald-500" />
                <span className="text-sm">{profile.location}</span>
              </div>
            </div>

            {/* Stats & Meta */}
            <div className="space-y-3">
              <div className="flex items-center text-emerald-700">
                <FaCalendarAlt className="mr-3 text-emerald-500" />
                <span className="text-sm">Bergabung: {profile.joinDate}</span>
              </div>
              <div className="flex items-center text-emerald-700">
                <FaStar className="mr-3 text-amber-500" />
                <div>
                  <div className="text-sm font-medium">Rating: {profile.rating}/5.0</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs ${
                          i < Math.floor(profile.rating)
                            ? "text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-sm font-bold rounded-full">
                  {profile.memberLevel}
                </div>
                <div className="ml-3 text-sm text-emerald-600">
                  {profile.totalTransactions} transaksi
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-emerald-700 mb-1">
              <span>Level Progress</span>
              <span>75% menuju Platinum</span>
            </div>
            <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
import { motion } from "framer-motion";
import logo from '../assets/logoo.png';
import { 
  FaHome, 
  FaShoppingCart, 
  FaChartLine, 
  FaUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLeaf,
  FaRocket
} from "react-icons/fa";

const Footer = ({ onNavClick }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Beranda", key: "home", icon: <FaHome /> },
      { name: "Marketplace", key: "marketplace", icon: <FaShoppingCart /> },
      { name: "AI Insights", key: "insights", icon: <FaChartLine /> },
      { name: "Dashboard", key: "dashboard", icon: <FaUser /> }
    ],
    company: [
      { name: "Tentang Kami", href: "#" },
      { name: "Karir", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Kontak", href: "#" }
    ],
    support: [
      { name: "Bantuan", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" }
    ],
    resources: [
      { name: "Panduan Pengguna", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "Status Sistem", href: "#" },
      { name: "Changelog", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" }
  ];

  const handleNavClick = (key) => {
    if (onNavClick) {
      onNavClick(key);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-50">
                  <img src={logo}  alt="" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Sirkuler</h3>
                  <p className="text-xs text-emerald-200">Economy Platform</p>
                </div>
              </div>
              <p className="text-emerald-200 text-xs sm:text-sm mb-3 sm:mb-4">
                Platform ekonomi sirkular yang menghubungkan petani, industri, dan pembeli dalam ekosistem berkelanjutan.
              </p>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors text-sm sm:text-base"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Platform Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center"
            >
              <FaRocket className="mr-2 text-emerald-400 text-sm sm:text-base" />
              Platform
            </motion.h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.platform.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(link.key)}
                    className="flex items-center space-x-1.5 sm:space-x-2 text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    <span className="text-xs">{link.icon}</span>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-base sm:text-lg mb-3 sm:mb-4"
            >
              Perusahaan
            </motion.h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support & Resources - Combined for mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Support */}
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-bold text-base sm:text-lg mb-3 sm:mb-4"
                >
                  Dukungan
                </motion.h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.support.map((link, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm block"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-bold text-base sm:text-lg mb-3 sm:mb-4"
                >
                  Sumber Daya
                </motion.h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.resources.map((link, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm block"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-emerald-700 pt-4 sm:pt-6 mb-4 sm:mb-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-start sm:items-center space-x-2 sm:space-x-3">
              <FaMapMarkerAlt className="text-emerald-400 text-base sm:text-lg flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-emerald-200 break-words">
                Jl. Sekolahan Sidokare No. 123, Sidoarjo, Indonesia
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <FaPhone className="text-emerald-400 text-base sm:text-lg flex-shrink-0" />
              <span className="text-emerald-200">+62 88 2261 5678</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 sm:col-span-2 lg:col-span-1">
              <FaEnvelope className="text-emerald-400 text-base sm:text-lg flex-shrink-0" />
              <span className="text-emerald-200">info@sirkuler.id</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-emerald-700 pt-4 sm:pt-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-3 sm:gap-0">
            <div className="text-emerald-200 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Sirkuler. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <span className="text-emerald-600 hidden sm:inline">|</span>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
              <span className="text-emerald-600 hidden sm:inline">|</span>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


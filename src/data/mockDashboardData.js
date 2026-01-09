import foto from '../assets/navy.png';

export const userProfile = {
  name: "PetaniNavy",
  email: "petani.navy@sirkuler.com",
  phone: "+62 812-3456-7890",
  role: "Petani & Penjual",
  joinDate: "15 Jan 2025",
  location: "Bandung, Jawa Barat",
  avatar: foto,
  rating: 4.8,
  totalTransactions: 47,
  memberLevel: "Gold",
  verification: true,
};

export const statsOverview = {
  monthly: {
    sales: 12500000,
    purchases: 8500000,
    profit: 4000000,
    transactions: 12,
    change: "+18%",
  },
  yearly: {
    sales: 98000000,
    purchases: 65000000,
    profit: 33000000,
    transactions: 47,
    change: "+32%",
  },
  products: {
    selling: 3,
    buying: 5,
    total: 8,
  }
};

export const recentTransactions = [
  {
    id: "TRX-2024-00123",
    date: "5 Jan 2024",
    type: "penjualan",
    product: "Jerami Padi Premium",
    amount: 4250000,
    quantity: 500,
    unit: "kg",
    status: "completed",
    buyer: "Peternakan Sapi Sejahtera",
  },
  {
    id: "TRX-2024-00122",
    date: "3 Jan 2024",
    type: "pembelian",
    product: "Pupuk Kompos Organik",
    amount: 1350000,
    quantity: 30,
    unit: "pack",
    status: "completed",
    seller: "Kompos Alam Lestari",
  },
  {
    id: "TRX-2024-00121",
    date: "1 Jan 2024",
    type: "penjualan",
    product: "Sekam Padi Mentah",
    amount: 1750000,
    quantity: 500,
    unit: "kg",
    status: "completed",
    buyer: "PT Briket Indonesia",
  },
  {
    id: "TRX-2024-00120",
    date: "28 Des 2023",
    type: "pembelian",
    product: "Pakan Ternak Fermentasi",
    amount: 2550000,
    quantity: 30,
    unit: "karung",
    status: "shipping",
    seller: "UMK Pakan Sehat",
  },
  {
    id: "TRX-2024-00119",
    date: "25 Des 2023",
    type: "penjualan",
    product: "Tongkol Jagung Kering",
    amount: 1680000,
    quantity: 400,
    unit: "kg",
    status: "processing",
    buyer: "Peternakan Ayam Organik",
  },
  {
    id: "TRX-2024-00118",
    date: "20 Des 2023",
    type: "pembelian",
    product: "Briket Arang Sekam",
    amount: 525000,
    quantity: 15,
    unit: "pack",
    status: "completed",
    seller: "Briket Hijau Indonesia",
  },
];

export const quickActions = [
  {
    id: 1,
    title: "Jual Produk Baru",
    description: "Tambah produk limbah atau olahan",
    icon: "🛒",
    color: "bg-gradient-to-br from-emerald-500 to-green-400",
    route: "sell",
  },
  {
    id: 2,
    title: "Cek Stok",
    description: "Lihat dan kelola inventori",
    icon: "📦",
    color: "bg-gradient-to-br from-blue-500 to-cyan-400",
    route: "inventory",
  },
  {
    id: 3,
    title: "Analisis AI",
    description: "Dapatkan insight harga & prediksi",
    icon: "🤖",
    color: "bg-gradient-to-br from-purple-500 to-pink-400",
    route: "ai-insights",
  },
  {
    id: 4,
    title: "Withdraw Dana",
    description: "Tarik keuntungan ke rekening",
    icon: "💰",
    color: "bg-gradient-to-br from-amber-500 to-yellow-400",
    route: "withdraw",
  },
  {
    id: 5,
    title: "Riwayat Lengkap",
    description: "Lihat semua transaksi",
    icon: "📊",
    color: "bg-gradient-to-br from-red-500 to-orange-400",
    route: "transactions",
  },
  {
    id: 6,
    title: "Pengaturan",
    description: "Kelola akun dan preferensi",
    icon: "⚙️",
    color: "bg-gradient-to-br from-gray-600 to-gray-400",
    route: "settings",
  },
];

export const activityFeed = [
  {
    id: 1,
    type: "sale",
    message: "Jerami Padi Premium terjual 500kg",
    time: "2 jam yang lalu",
    amount: "+Rp 4.250.000",
  },
  {
    id: 2,
    type: "ai_insight",
    message: "AI merekomendasikan naikkan harga jerami 8%",
    time: "5 jam yang lalu",
    amount: null,
  },
  {
    id: 3,
    type: "purchase",
    message: "Pembelian Pupuk Kompos 30 pack",
    time: "2 hari yang lalu",
    amount: "-Rp 1.350.000",
  },
  {
    id: 4,
    type: "rating",
    message: "Mendapat rating 5 bintang dari pembeli baru",
    time: "3 hari yang lalu",
    amount: null,
  },
  {
    id: 5,
    type: "withdrawal",
    message: "Penarikan dana berhasil",
    time: "1 minggu yang lalu",
    amount: "-Rp 5.000.000",
  },
];

export const walletBalance = {
  available: 12500000,
  pending: 3250000,
  total: 15750000,
  currency: "IDR",
  lastUpdated: "5 Jan 2024, 14:30 WIB",
};
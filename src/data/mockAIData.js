export const supplyPredictions = [
  {
    material: "Jerami Padi",
    currentStock: 1250,
    predictedStock30Days: 850,
    confidence: 87,
    data: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      predicted: Math.round(1250 - (i * 13.3)),
      actual: i < 7 ? Math.round(1250 - (i * 12)) : null
    }))
  },
  {
    material: "Sekam Padi",
    currentStock: 2200,
    predictedStock30Days: 1800,
    confidence: 92,
    data: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      predicted: Math.round(2200 - (i * 13.3)),
      actual: i < 7 ? Math.round(2200 - (i * 15)) : null
    }))
  },
  {
    material: "Tongkol Jagung",
    currentStock: 800,
    predictedStock30Days: 450,
    confidence: 78,
    data: Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      predicted: Math.round(800 - (i * 11.7)),
      actual: i < 7 ? Math.round(800 - (i * 10)) : null
    }))
  }
];

export const priceRecommendations = [
  {
    material: "Jerami Padi",
    currentMarketPrice: 8500,
    recommendedBuy: 8200,
    recommendedSell: 8800,
    trend: "up",
    confidence: 85,
    reasons: [
      "Musim panen berakhir",
      "Permintaan pakan ternak meningkat",
      "Stok menipis di Jawa Barat"
    ]
  },
  {
    material: "Pupuk Kompos",
    currentMarketPrice: 45000,
    recommendedBuy: 43000,
    recommendedSell: 47000,
    trend: "stable",
    confidence: 90,
    reasons: [
      "Supply stabil",
      "Permintaan konstan",
      "Harga kompetitif"
    ]
  },
  {
    material: "Sekam Padi",
    currentMarketPrice: 3500,
    recommendedBuy: 3300,
    recommendedSell: 3700,
    trend: "down",
    confidence: 75,
    reasons: [
      "Panen raya mulai",
      "Supply melimpah",
      "Permintaan industri turun"
    ]
  }
];

export const marketTrends = [
  { month: "Jan", demand: 85, price: 82 },
  { month: "Feb", demand: 78, price: 80 },
  { month: "Mar", demand: 82, price: 81 },
  { month: "Apr", demand: 88, price: 84 },
  { month: "Mei", demand: 92, price: 88 },
  { month: "Jun", demand: 95, price: 92 },
  { month: "Jul", demand: 90, price: 89 },
  { month: "Agu", demand: 85, price: 86 },
  { month: "Sep", demand: 82, price: 84 },
  { month: "Okt", demand: 88, price: 87 },
  { month: "Nov", demand: 92, price: 90 },
  { month: "Des", demand: 95, price: 93 }
];

export const regionalData = [
  { region: "Jawa Barat", supply: 85, demand: 90, priceIndex: 105 },
  { region: "Jawa Tengah", supply: 75, demand: 80, priceIndex: 98 },
  { region: "Jawa Timur", supply: 70, demand: 85, priceIndex: 102 },
  { region: "Sumatera", supply: 60, demand: 70, priceIndex: 95 },
  { region: "Kalimantan", supply: 55, demand: 65, priceIndex: 92 },
  { region: "Sulawesi", supply: 65, demand: 75, priceIndex: 96 }
];

export const aiInsights = [
  {
    id: 1,
    title: "Puncak Permintaan Jerami",
    description: "Prediksi puncak permintaan pada minggu ke-2 bulan depan",
    impact: "high",
    action: "Naikkan harga jual 15%",
    confidence: 88,
    timeframe: "2 minggu"
  },
  {
    id: 2,
    title: "Peluang Ekspor Sekam",
    description: "Permintaan ekspor ke Vietnam meningkat 30%",
    impact: "medium",
    action: "Hubungi buyer ekspor",
    confidence: 76,
    timeframe: "1 bulan"
  },
  {
    id: 3,
    title: "Harga Pupuk Turun",
    description: "Prediksi penurunan harga pupuk organik 10%",
    impact: "low",
    action: "Tunda pembelian 2 minggu",
    confidence: 82,
    timeframe: "2 minggu"
  }
];
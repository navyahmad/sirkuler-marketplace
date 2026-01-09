import pupukCair from '../assets/pupukcair.jpg';
import jeramiPadi from '../assets/jeramipadi.jpg';
import sekam from '../assets/sekampadi.jpg';
import tongkol from '../assets/tongkoljagung.jpg';
import kompos from '../assets/kompos.jpg';
import fermentasi from '../assets/pakanfermentasi.jpg';
import arang from '../assets/arang.jpg';
import jamur from '../assets/jamur.jpg';

export const mockProducts = [
  // Limbah Pertanian
  {
    id: 1,
    name: "Jerami Padi Kualitas Premium",
    category: "limbah",
    type: "Jerami",
    price: 8500,
    unit: "kg",
    stock: 1500,
    location: "Subang, Jawa Barat",
    seller: "Kelompok Tani Makmur",
    rating: 4.8,
    reviews: 124,
    image: jeramiPadi,
    description: "Jerami padi kering siap olah untuk pakan ternak atau kompos."
  },
  {
    id: 2,
    name: "Sekam Padi Mentah",
    category: "limbah",
    type: "Sekam",
    price: 3500,
    unit: "kg",
    stock: 2500,
    location: "Karawang, Jawa Barat",
    seller: "PT Tani Sejahtera",
    rating: 4.5,
    reviews: 89,
    image: sekam,
    description: "Sekam padi mentah untuk bahan baku industri."
  },
  {
    id: 3,
    name: "Tongkol Jagung Kering",
    category: "limbah",
    type: "Tongkol Jagung",
    price: 4200,
    unit: "kg",
    stock: 800,
    location: "Malang, Jawa Timur",
    seller: "Petani Jagung Organik",
    rating: 4.7,
    reviews: 67,
    image: tongkol,
    description: "Tongkol jagung kering untuk pakan ternak atau bahan bakar."
  },
  // Produk Olahan
  {
    id: 4,
    name: "Pupuk Kompos Organik 5kg",
    category: "olahan",
    type: "Pupuk",
    price: 45000,
    unit: "pack",
    stock: 200,
    location: "Bogor, Jawa Barat",
    seller: "Kompos Alam Lestari",
    rating: 4.9,
    reviews: 345,
    image: kompos,
    description: "Pupuk kompos organik dari limbah pertanian, siap pakai."
  },
  {
    id: 5,
    name: "Pakan Ternak Fermentasi 10kg",
    category: "olahan",
    type: "Pakan",
    price: 85000,
    unit: "karung",
    stock: 150,
    location: "Solo, Jawa Tengah",
    seller: "UMK Pakan Sehat",
    rating: 4.6,
    reviews: 210,
    image: fermentasi,
    description: "Pakan ternak fermentasi dari jerami berkualitas tinggi."
  },
  {
    id: 6,
    name: "Briket Arang Sekam 20pcs",
    category: "olahan",
    type: "Briket",
    price: 35000,
    unit: "pack",
    stock: 300,
    location: "Yogyakarta",
    seller: "Briket Hijau Indonesia",
    rating: 4.4,
    reviews: 98,
    image: arang,
    description: "Briket arang dari sekam padi, ramah lingkungan."
  },
  {
    id: 7,
    name: "Cendawan Tiram Media Jerami",
    category: "olahan",
    type: "Jamur",
    price: 28000,
    unit: "baglog",
    stock: 500,
    location: "Bandung, Jawa Barat",
    seller: "Jamur Organik Bandung",
    rating: 4.8,
    reviews: 167,
    image: jamur,
    description: "Baglog media tanjam jamur dari jerami padi."
  },
  {
    id: 8,
    name: "Pupuk Cair Organik 1L",
    category: "olahan",
    type: "Pupuk Cair",
    price: 65000,
    unit: "botol",
    stock: 120,
    location: "Semarang, Jawa Tengah",
    seller: "Biofarm Organik",
    rating: 4.7,
    reviews: 156,
    image: pupukCair,
    description: "Pupuk cair dari fermentasi limbah sayuran."
  }
];

export const categories = [
  { id: "all", name: "Semua Produk", count: 8 },
  { id: "limbah", name: "Limbah Pertanian", count: 3 },
  { id: "olahan", name: "Produk Olahan", count: 5 },
  { id: "pupuk", name: "Pupuk", count: 2 },
  { id: "pakan", name: "Pakan Ternak", count: 1 },
  { id: "briket", name: "Briket", count: 1 },
  { id: "jamur", name: "Jamur", count: 1 }
];
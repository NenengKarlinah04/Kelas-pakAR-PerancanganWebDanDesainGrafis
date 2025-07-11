// src/data/assets.js

export const ASSETS = {
  logo: "/logo.jpg",
  heroProducts: [
    { id: 1, src: "/menu-baci-geprek.jpg", alt: "Gambar Produk Unggulan 1" },
    { id: 2, src: "/menu-keju-aroma.jpg", alt: "Gambar Produk Unggulan 2" },
    { id: 3, src: "/menu-roti-goreng.jpg", alt: "Gambar Produk Unggulan 3" },
  ],
  aboutText:
    "Raos Saji lahir dari hasrat kami untuk menyajikan cita rasa otentik Indonesia dalam kemasan modern. Kami percaya pada kualitas, kepraktisan, dan rasa yang tak terlupakan. Karena itu, setiap sajian kami olah dari bahan-bahan pilihan terbaik dengan proses yang selalu higienis, demi menghadirkan kelezatan asli di setiap gigitan.",
  productDescriptions: [
    {
      title: "Bahan Kualitas Terbaik",
      description:
        "Kami hanya menggunakan bahan baku segar dan pilihan dari pemasok terpercaya.",
    },
    {
      title: "Produksi Higienis",
      description:
        "Proses pembuatan produk kami selalu mengutamakan kebersihan sesuai standar.",
    },
    {
      title: "Rasa Otentik",
      description:
        "Resep spesial kami diracik untuk menjaga keaslian rasa yang khas.",
    },
  ],
  menuCategories: [
    {
      name: "Baso Aci",
      id: "menu-baso-aci",
      items: [
        {
          id: "menu-1",
          name: "Baso Aci Ceker",
          price: "Rp 22.000",
          imageSrc: "/menu-baci-ceker.jpg",
          description:
            "Perpaduan sempurna baso aci kenyal dan baso sapi gurih, ditemani cuanki lidah, siomay kering, dan pilus kencur yang renyah. Disempurnakan dengan ceker ayam empuk yang kaya kaldu.",
        },
        {
          id: "menu-2",
          name: "Baso Aci Geprek",
          price: "Rp 25.000",
          imageSrc: "/menu-baci-geprek.jpg",
          description:
            "Kenyalnya baso aci dan baso sapi bertemu dengan sayap ayam empuk, disiram sambal geprek pedas yang nendang. Lengkap dengan cuanki, siomay, dan pilus kencur.",
        },
      ],
    },
    {
      name: "Roti Goreng",
      id: "menu-roti-goreng",
      items: [
        {
          id: "menu-3",
          name: "Roti Goreng",
          price: "Rp 15.000",
          imageSrc: "/menu-roti-goreng.jpg",
          description:
            "Camilan klasik yang tak pernah salah! Roti empuk berbalut tepung panir renyah, dengan pilihan isian cokelat atau keju premium yang lumer sempurna di setiap gigitan.",
        },
        {
          id: "menu-4",
          name: "Roti Ragout",
          price: "Rp 18.000",
          imageSrc: "/menu-roti-ragout.jpg",
          description:
            "Varian gurih dari roti goreng, diisi dengan ragout ayam dan sayuran yang creamy dan lezat. Mengenyangkan dan penuh rasa.",
        },
      ],
    },
    {
      name: "Keju Aroma",
      id: "menu-keju-aroma",
      items: [
        {
          id: "menu-5",
          name: "Keju Aroma",
          price: "Rp 16.000",
          imageSrc: "/menu-keju-aroma.jpg",
          description:
            "Manis, gurih, dan renyah dalam satu gigitan! Keju aroma kami adalah gulungan kulit lumpia renyah yang diisi dengan keju manis berkualitas, digoreng hingga keemasan.",
        },
      ],
    },
  ],
  contact: {
    tagline: "Rasa Asli dalam Setiap Sajian",
    whatsappNumber: "6285810091213",
    instagramUsername: "raos_saji",
  },
};

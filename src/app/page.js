// src/app/page.js
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Import semua komponen
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductCategorySection } from "@/components/ProductCategorySection";
import { DetailModal } from "@/components/DetailModal";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

// Import data
import { ASSETS } from "@/data/assets";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItem]);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      {ASSETS.menuCategories.map((category, index) => (
        <ProductCategorySection
          key={category.id}
          category={category}
          onCardClick={setSelectedItem}
          isFirst={index === 0}
        />
      ))}
      <ContactSection />
      <Footer />
      <AnimatePresence>
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

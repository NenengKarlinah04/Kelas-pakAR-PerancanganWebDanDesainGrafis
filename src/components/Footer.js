// src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#FDEBD0] py-4">
      <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Raos Saji. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

import React, { useState } from "react";
import { FiZoomIn } from "react-icons/fi";

const Gallery = () => {
  const galleryItems = [
    { id: 2, imageUrl: "images/inscription/main.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription1.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription2.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription3.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription4.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription5.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription6.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription7.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription8.jpg" },
    { id: 2, imageUrl: "images/inscription/inscription9.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-12">Gallery</h2>

        {/* Image Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(item.imageUrl)}>
              <img src={item.imageUrl} alt="Gallery item" className="w-full " />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <FiZoomIn className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[85vh] object-contain"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedImage(null)}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

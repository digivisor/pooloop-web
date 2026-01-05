"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function DocumentsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Generate list of images
    const images = ["/certificates/docs.jpg"];
    for (let i = 1; i <= 25; i++) {
        images.push(`/certificates/docs${i}.jpg`);
    }

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative bg-[#0c436c] py-24">
    
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[#0c436c] opacity-90" />
                    <div className="absolute inset-0 bg-grid-white/[0.05]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Belgelerimiz</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Kalite standartlarına verdiğimiz önemin ve kurumsal yetkinliğimizin kanıtı olan belgelerimiz.
                    </p>
                </div>
            </section>

            {/* Documents Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="group relative cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative aspect-[3/4] bg-gray-50">
                                    <Image
                                        src={img}
                                        alt={`Belge ${index + 1}`}
                                        fill
                                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 shadow-lg">
                                            <Search className="text-[#0c436c]" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center animate-fadeIn"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-all z-50 p-2 cursor-pointer hover:scale-110 active:scale-95"
                    >
                        <X size={32} />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-all z-50 p-2 cursor-pointer hover:scale-110 active:scale-95"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full h-full mx-auto p-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={images[currentIndex]}
                                alt={`Belge ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-all z-50 p-2 cursor-pointer hover:scale-110 active:scale-95"
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
    images: string[];
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    // Handle keyboard events
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
    };

    // Bento grid layout classes
    const gridClasses = [
        "col-span-2 row-span-2", // 0 - büyük
        "", // 1
        "", // 2
        "", // 3
        "row-span-2", // 4 - uzun
        "", // 5
        "", // 6
        "", // 7
        "col-span-2", // 8 - geniş
        "col-span-2", // 9 - geniş
    ];

    return (
        <>
            {/* Bento Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${gridClasses[index] || ""} group relative rounded-xl overflow-hidden cursor-pointer`}
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image}
                            alt={`Proje ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#0c436c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
                    >
                        <X size={32} />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-6 text-white hover:text-gray-300 transition-colors z-10"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-5xl max-h-[85vh] w-full h-full mx-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Proje ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-6 text-white hover:text-gray-300 transition-colors z-10"
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                }}
                                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex ? "border-white scale-110" : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

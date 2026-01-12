"use client";

import GalleryLightbox from "@/components/GalleryLightbox";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// List of all reference images
const referenceImages = [
    
    "/referanslar/ref1.jpg",
    "/referanslar/ref2.JPG",
    "/referanslar/ref3.JPG",
    "/referanslar/ref4.JPG",
    "/referanslar/ref5.JPG",
    "/referanslar/ref6.JPG",
    "/referanslar/ref7.JPG",
    "/referanslar/ref8.JPG",
    "/referanslar/ref9.JPG",
  
    "/referanslar/ref11.JPG",
    "/referanslar/ref12.JPG",
   
    "/referanslar/ref14.JPG",
    "/referanslar/ref15.JPG",
    "/referanslar/ref16.JPG",
    "/referanslar/ref17.JPG",
    "/referanslar/ref18.JPG",
    "/referanslar/ref19.JPG",
    "/referanslar/ref20.JPG",
    "/referanslar/ref21.JPG",
    "/referanslar/ref22.JPG",
    "/referanslar/ref23.JPG",
    "/referanslar/ref24.JPG",
    "/referanslar/ref25.JPG",
    "/referanslar/ref26.JPG",
    "/referanslar/ref27.JPG",
];

export default function ReferanslarPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#0c436c]">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/referanslar/ref1.jpg"
                    alt="Referanslar"
                    fill
                    className="object-cover opacity-50"
                    priority
                />

                <div className="relative z-20 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Referanslarımız</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Başarıyla tamamladığımız projelerden kareler.
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#0c436c] transition-colors">Anasayfa</Link>
                        <ChevronRight size={16} />
                        <span className="text-[#0c436c] font-medium">Referanslar</span>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <GalleryLightbox images={referenceImages} />
                </div>
            </section>
        </div>
    );
}

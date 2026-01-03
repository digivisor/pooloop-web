"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
    const images = [
        "/insta1.jpg",
        "/insta2.jpg",
        "/insta3.jpg",
        "/insta4.jpg",
        "/insta5.jpg",
        "/insta6.jpg",
        "/insta7.jpg",
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
                    {/* Left Side: Title */}
                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0c436c]">
                            @pooloop
                        </h2>
                        <div className="h-1 w-24 bg-[#3b9fc9] mt-4 rounded-full" />
                    </div>

                    {/* Right Side: Description & Button */}
                    <div className="lg:max-w-xl">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Instagram'da bizi takip edin ve Pooloop'un seçkin projelerini keşfedin.
                            En yeni havuz tasarımlarımızı, bakım ipuçlarını ve mutlu müşterilerimizin
                            deneyimlerini paylaşıyoruz.
                        </p>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0c436c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3b9fc9] transition-colors duration-300"
                        >
                            <Instagram size={20} />
                            Takip Et
                        </a>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative group/slider">


                    {/* Scrollable Feed */}
                    <div
                        className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar"
                        style={{
                            scrollbarWidth: 'none', /* Firefox */
                            msOverflowStyle: 'none',  /* IE 10+ */
                        }}
                    >
                        {/* CSS to hide webkit scrollbar */}
                        <style jsx>{`
                            .hide-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {images.map((img, index) => (
                            <a
                                key={index}
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-none w-[280px] sm:w-[320px] aspect-[4/5] relative rounded-xl overflow-hidden cursor-pointer bg-gray-100 snap-start group"
                            >
                                <Image
                                    src={img}
                                    alt={`Instagram Post ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Instagram className="text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" size={32} />
                                </div>
                            </a>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Eye, Download, FileText, BookOpen } from "lucide-react";

interface Catalog {
    id: number;
    name: string;
    description: string;
    cover: string;
    embedUrl: string;
    pdfUrl: string;
}

const catalogs: Catalog[] = [
    {
        id: 1,
        name: "SPECON HEATPUMP",
        description: "Yüksek verimli ısı pompası sistemleri ve teknik özellikleri hakkında detaylı bilgi.",
        cover: "/slide1.png",
        embedUrl: "https://heyzine.com/flip-book/a48856f9e3.html",
        pdfUrl: "/heatpump.pdf",
    },
    {
        id: 2,
        name: "SPCLPOOL HEATPUMP",
        description: "Havuz ısıtma çözümleri ve enerji tasarruflu ısı pompası sistemleri kataloğu.",
        cover: "/2-slides1.png",
        embedUrl: "https://heyzine.com/flip-book/a48856f9e3.html",
        pdfUrl: "/SPCLPOOL-HEATPUMP-v2.pdf",
    },
];

export default function CatalogsPage() {
    const [selectedCatalog, setSelectedCatalog] = useState<Catalog | null>(null);

    const openModal = (catalog: Catalog) => {
        setSelectedCatalog(catalog);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedCatalog(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <section className="relative bg-[#0c436c] py-24">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[#0c436c] opacity-90" />
                    <div className="absolute inset-0 bg-grid-white/[0.05]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                    {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <BookOpen size={16} />
                        <span>Dijital Kataloglar</span>
                    </div> */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Kataloglarımız</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Ürün ve hizmetlerimizi detaylı inceleyebileceğiniz dijital kataloglarımız.
                    </p>
                </div>
            </section>

            {/* Catalogs Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-8">
                        {catalogs.map((catalog, index) => (
                            <div
                                key={catalog.id}
                                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    } flex flex-col md:flex-row`}
                            >
                                {/* Cover Image */}
                                <div className="relative md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    <Image
                                        src={catalog.cover}
                                        alt={catalog.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                                    {/* Floating Badge */}
                                    <div className="absolute top-6 left-6 bg-[#0c436c] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                        <FileText size={16} />
                                        <span className="text-sm font-semibold">Katalog #{catalog.id}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#0c436c] mb-3">
                                                {catalog.name}
                                            </h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                {catalog.description}
                                            </p>
                                        </div>

                                        {/* Specs Row */}
                                        <div className="flex items-center gap-6 py-4 border-t border-b border-gray-100">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <svg className="w-5 h-5 text-[#3b9fc9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-sm font-medium">Teknik Detaylar</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <svg className="w-5 h-5 text-[#3b9fc9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-sm font-medium">Ürün Görselleri</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <svg className="w-5 h-5 text-[#3b9fc9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span className="text-sm font-medium">Fiyat Listesi</span>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                            <button
                                                onClick={() => openModal(catalog)}
                                                className="flex items-center justify-center gap-3 bg-[#0c436c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1a5a8a] transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                                            >
                                                <Eye size={20} />
                                                <span>Kataloğu Görüntüle</span>
                                            </button>
                                            <a
                                                href={catalog.pdfUrl}
                                                download
                                                className="flex items-center justify-center gap-3 bg-white border-2 border-[#0c436c] text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#0c436c] hover:text-white transition-all cursor-pointer"
                                            >
                                                <Download size={20} />
                                                <span>PDF İndir</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedCatalog && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-[#0c436c] to-[#1a5a8a]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <BookOpen size={20} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {selectedCatalog.name}
                                </h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    href={selectedCatalog.pdfUrl}
                                    download
                                    className="flex items-center gap-2 bg-white text-[#0c436c] px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                                >
                                    <Download size={18} />
                                    <span className="hidden sm:inline">PDF İndir</span>
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="p-2.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Embed */}
                        <div className="bg-gray-100">
                            <iframe
                                allowFullScreen
                                allow="clipboard-write"
                                scrolling="no"
                                className="w-full"
                                style={{ height: "80vh", minHeight: "600px" }}
                                src={selectedCatalog.embedUrl}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

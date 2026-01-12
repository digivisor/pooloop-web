"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const testimonials = [
    {
        name: "Ahmet Yılmaz",
        role: { TR: "Villa Sahibi", EN: "Villa Owner" },
        location: { TR: "İstanbul, Beykoz", EN: "Istanbul, Beykoz" },
        gender: "male",
        quote: { TR: "Villam için hayal ettiğim havuzu tam istediğim gibi inşa ettiler.", EN: "They built the pool of my dreams for my villa exactly as I wanted." },
        project: { TR: "Infinity Havuz", EN: "Infinity Pool" }
    },
    {
        name: "Seda Kaya",
        role: { TR: "Otel Müdürü", EN: "Hotel Manager" },
        location: { TR: "Antalya, Belek", EN: "Antalya, Belek" },
        gender: "female",
        quote: { TR: "Otelimizin havuzlarının bakımını düzenli olarak yapıyorlar.", EN: "They maintain our hotel pools regularly." },
        project: { TR: "Otel Bakımı", EN: "Hotel Maintenance" }
    },
    {
        name: "Mehmet Demir",
        role: { TR: "Site Yöneticisi", EN: "Site Manager" },
        location: { TR: "Ankara, Çankaya", EN: "Ankara, Cankaya" },
        gender: "male",
        quote: { TR: "Sitemizin olimpik havuzunu mükemmel bir şekilde yenilediler.", EN: "They renovated our site's olympic pool perfectly." },
        project: { TR: "Renovasyon", EN: "Renovasyon" }
    },
    {
        name: "Zeynep Arslan",
        role: { TR: "Ev Sahibi", EN: "Home Owner" },
        location: { TR: "İzmir, Çeşme", EN: "Izmir, Cesme" },
        gender: "female",
        quote: { TR: "Yazlık evimize prefabrik havuz yaptırdık, çok memnunuz.", EN: "We had a prefabricated pool built for our summer house, we are very pleased." },
        project: { TR: "Prefabrik Havuz", EN: "Prefabricated Pool" }
    },
    {
        name: "Can Yıldırım",
        role: { TR: "Spor Tesisi Müdürü", EN: "Sports Facility Manager" },
        location: { TR: "Bursa, Nilüfer", EN: "Bursa, Nilufer" },
        gender: "male",
        quote: { TR: "Yarı olimpik havuzumuzun tüm kimyasal ihtiyaçlarını karşılıyorlar.", EN: "They meet all the chemical needs of our semi-olympic pool." },
        project: { TR: "Kimyasal Tedarik", EN: "Chemical Supply" }
    },
    {
        name: "Ayşe Öztürk",
        role: { TR: "Butik Otel Sahibi", EN: "Boutique Hotel Owner" },
        location: { TR: "Muğla, Bodrum", EN: "Mugla, Bodrum" },
        gender: "female",
        quote: { TR: "Her sezon açılış öncesi havuzumuzu hazır hale getiriyorlar.", EN: "They get our pool ready before every season opening." },
        project: { TR: "Sezonluk Bakım", EN: "Seasonal Maintenance" }
    }
];

export default function TestimonialsSlider() {
    const { language, t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        // Ensure we don't scroll past the end based on view count
        // For infinite loop effect:
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-[#f8fbfd] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#3b9fc9]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#0c436c]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                        {t('testimonials_subtitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                        {t('testimonials_title')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('testimonials_desc')}
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    <div className="flex items-center gap-4">
                        {/* Left Arrow - Hidden on Mobile */}
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex shrink-0 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#0c436c] hover:text-white transition-colors z-10"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Carousel Track */}
                        <div className="flex-1 overflow-hidden py-2 px-1">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="shrink-0 px-3 transition-all duration-300"
                                        style={{ width: `${100 / itemsPerView}%` }}
                                    >
                                        <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex flex-col items-center text-center">
                                            {/* Quote Icon */}
                                            <div className="absolute top-4 right-4 text-[#3b9fc9]/10 text-6xl font-serif font-black leading-none">"</div>

                                            {/* Project Tag */}
                                            <div className="inline-block bg-[#0c436c] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 z-10">
                                                {testimonial.project[language]}
                                            </div>

                                            {/* Quote */}
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 relative z-10">
                                                "{testimonial.quote[language]}"
                                            </p>

                                            {/* Spacer */}
                                            <div className="flex-1" />

                                            {/* Author */}
                                            <div className="flex flex-col items-center gap-2 z-10">
                                                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-2 mb-1 ${testimonial.gender === 'female'
                                                    ? 'bg-pink-50 border-pink-100 text-pink-500'
                                                    : 'bg-blue-50 border-blue-100 text-blue-500'
                                                    }`}>
                                                    <User size={28} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#0c436c] text-sm md:text-base">{testimonial.name}</h4>
                                                    <p className="text-xs text-gray-500 mb-0.5">{testimonial.role[language]}</p>
                                                    <p className="text-xs text-[#3b9fc9] font-medium">{testimonial.location[language]}</p>
                                                </div>
                                            </div>

                                            {/* Hover decoration */}
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3b9fc9] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow - Hidden on Mobile */}
                        <button
                            onClick={nextSlide}
                            className="hidden md:flex shrink-0 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-[#0c436c] hover:text-white transition-colors z-10"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Dots - Visible Control for Mobile */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? "bg-[#0c436c] w-6"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Ahmet Yılmaz",
        role: "Villa Sahibi",
        location: "İstanbul, Beykoz",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        quote: "Villam için hayal ettiğim havuzu tam istediğim gibi inşa ettiler.",
        project: "Infinity Havuz"
    },
    {
        name: "Seda Kaya",
        role: "Otel Müdürü",
        location: "Antalya, Belek",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        quote: "Otelimizin havuzlarının bakımını düzenli olarak yapıyorlar.",
        project: "Otel Bakımı"
    },
    {
        name: "Mehmet Demir",
        role: "Site Yöneticisi",
        location: "Ankara, Çankaya",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        quote: "Sitemizin olimpik havuzunu mükemmel bir şekilde yenilediler.",
        project: "Renovasyon"
    },
    {
        name: "Zeynep Arslan",
        role: "Ev Sahibi",
        location: "İzmir, Çeşme",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
        quote: "Yazlık evimize prefabrik havuz yaptırdık, çok memnunuz.",
        project: "Prefabrik Havuz"
    },
    {
        name: "Can Yıldırım",
        role: "Spor Tesisi Müdürü",
        location: "Bursa, Nilüfer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        quote: "Yarı olimpik havuzumuzun tüm kimyasal ihtiyaçlarını karşılıyorlar.",
        project: "Kimyasal Tedarik"
    },
    {
        name: "Ayşe Öztürk",
        role: "Butik Otel Sahibi",
        location: "Muğla, Bodrum",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        quote: "Her sezon açılış öncesi havuzumuzu hazır hale getiriyorlar.",
        project: "Sezonluk Bakım"
    }
];

export default function TestimonialsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
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
                        Referanslarımız
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                        Mutlu Müşterilerimiz
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Yıllar içinde yüzlerce projeye imza attık. İşte bazı referanslarımız.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="flex items-center gap-4">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="shrink-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0c436c] hover:text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Carousel Track */}
                    <div className="flex-1 overflow-hidden py-2">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-1/3 shrink-0 px-3"
                                >
                                    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
                                        {/* Quote Icon */}
                                        <div className="absolute top-4 right-4 text-[#3b9fc9]/20 text-5xl font-serif">"</div>

                                        {/* Project Tag */}
                                        <div className="inline-block bg-[#0c436c] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                                            {testimonial.project}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3b9fc9]">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={48}
                                                    height={48}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0c436c] text-sm">{testimonial.name}</h4>
                                                <p className="text-xs text-gray-500">{testimonial.role}</p>
                                                <p className="text-xs text-[#3b9fc9]">{testimonial.location}</p>
                                            </div>
                                        </div>

                                        {/* Hover decoration */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3b9fc9] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="shrink-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0c436c] hover:text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? "bg-[#0c436c] w-6"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

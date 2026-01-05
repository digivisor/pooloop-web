"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Wrench,
    ArrowRight,
    CheckCircle2,
    Phone,
} from "lucide-react";
import { services } from "@/app/data/services";

export default function HizmetlerimizPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <Image
                    src="/galeri8.jpg"
                    alt="Hizmetlerimiz"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0c436c]/75" />

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
                    <div
                        className={`max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Wrench size={16} />
                            <span>Profesyonel Çözümler</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Hizmetlerimiz
                        </h1>
                        <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                            Havuz yapımından bakıma, kimyasallardan teknik servise kadar
                            tüm ihtiyaçlarınız için profesyonel çözümler sunuyoruz.
                        </p>
                    </div>
                </div>
            </section >

            {/* Services Grid Section */}
            < section className="py-20 bg-white" >
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Neler Yapıyoruz?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                            Profesyonel Havuz Çözümleri
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            20 yılı aşkın tecrübemizle havuz sektöründe kapsamlı hizmetler sunuyoruz.
                        </p>
                    </div>

                    {/* Services - Alternating Layout */}
                    <div className="space-y-20">
                        {services.map((service, idx) => (
                            <div
                                key={service.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div className="relative h-[350px] rounded-3xl overflow-hidden group">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        {/* Icon Badge */}
                                        <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                            <service.icon className="text-[#0c436c]" size={28} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#0c436c] mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                                        {service.features.map((feature, fidx) => (
                                            <div key={fidx} className="flex items-center gap-2">
                                                <CheckCircle2 className="text-[#3b9fc9] shrink-0" size={18} />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={`/hizmetlerimiz/${service.id}`}
                                        className="inline-flex items-center gap-2 bg-[#0c436c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0a3656] transition-colors"
                                    >
                                        Detaylı Bilgi
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Quick Services Cards Removed by User Request */}


            {/* CTA Section */}
            <section className="py-20 bg-[#0c436c] relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Projeniz İçin Teklif Alın
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Havuz projeniz için ücretsiz keşif ve teklif almak ister misiniz?
                        Uzman ekibimiz sizinle iletişime geçsin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#3b9fc9] hover:text-white transition-all"
                        >
                            Ücretsiz Teklif Alın
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+902121234567"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0c436c] transition-all"
                        >
                            <Phone size={20} />
                            Hemen Arayın
                        </a>
                    </div>
                </div>
            </section>
        </div >
    );
}

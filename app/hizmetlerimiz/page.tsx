"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Droplets,
    FlaskConical,
    Waves,
    Wrench,
    Sparkles,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Phone,
} from "lucide-react";

// Services data
const services = [
    {
        id: "havuz-sistemleri",
        icon: Droplets,
        title: "Havuz Sistemleri",
        shortDesc: "Özel tasarım havuzlar, olimpik havuzlar ve daha fazlası",
        description: "Özel tasarım havuzlar, olimpik havuzlar, terapi havuzları ve daha fazlası için komple çözümler sunuyoruz.",
        image: "/havuzsistemleri-1.png",
        features: [
            "Özel tasarım havuzlar",
            "Olimpik havuzlar",
            "Terapi havuzları",
            "Süs havuzları",
            "Çocuk havuzları",
            "Jakuzi ve spa sistemleri",
        ],
    },
    {
        id: "su-aritma-sistemleri",
        icon: Waves,
        title: "Su Arıtma Sistemleri",
        shortDesc: "Endüstriyel ve evsel su arıtma çözümleri",
        description: "Endüstriyel ve evsel kullanım için su arıtma sistemleri, filtrasyon ve dezenfeksiyon çözümleri.",
        image: "/suaritma.png",
        features: [
            "Endüstriyel su arıtma sistemleri",
            "Evsel su arıtma sistemleri",
            "Filtrasyon sistemleri",
            "Dezenfeksiyon sistemleri",
            "Ters ozmos sistemleri",
            "Yumuşatma sistemleri",
        ],
    },
    {
        id: "teknik-servis",
        icon: Wrench,
        title: "Teknik Servis",
        shortDesc: "Bakım, onarım ve periyodik kontrol hizmetleri",
        description: "Havuz ve su arıtma sistemleri için bakım, onarım ve periyodik kontrol hizmetleri.",
        image: "/teknik.png",
        features: [
            "Periyodik bakım hizmetleri",
            "Arıza tespit ve onarım",
            "Yedek parça temini",
            "Sistem yenileme",
            "7/24 teknik destek",
            "Yerinde servis hizmeti",
        ],
    },
    {
        id: "havuz-kimyasallari",
        icon: FlaskConical,
        title: "Havuz Kimyasalları",
        shortDesc: "Yüksek kaliteli kimyasallar ve dozaj sistemleri",
        description: "Havuz ve proses suyu şartlandırma için yüksek kaliteli kimyasallar ve dozaj sistemleri.",
        image: "/kimyasal.jpg",
        features: [
            "Klor ürünleri",
            "pH düzenleyiciler",
            "Yosun önleyiciler",
            "Flokülantlar",
            "Temizlik kimyasalları",
            "Dozaj sistemleri",
        ],
    },
    {
        id: "isitma-sogutma",
        icon: Sparkles,
        title: "Isıtma ve Soğutma Sistemleri",
        shortDesc: "Havuzlar ve tesisler için ısıtma/soğutma çözümleri",
        description: "Havuzlar ve endüstriyel tesisler için ısıtma ve soğutma çözümleri.",
        image: "/isitma.png",
        features: [
            "Havuz ısıtma sistemleri",
            "Isı pompaları",
            "Güneş enerjisi sistemleri",
            "Kazan sistemleri",
            "Soğutma sistemleri",
            "Enerji tasarruflu çözümler",
        ],
    },
    {
        id: "otomasyon-sistemleri",
        icon: ShieldCheck,
        title: "Otomasyon Sistemleri",
        shortDesc: "Akıllı otomasyon ve uzaktan kontrol çözümleri",
        description: "Havuz ve su arıtma sistemleri için akıllı otomasyon çözümleri.",
        image: "/otomasyon.png",
        features: [
            "Havuz otomasyon sistemleri",
            "Uzaktan kontrol sistemleri",
            "Akıllı dozaj sistemleri",
            "Enerji yönetim sistemleri",
            "Mobil uygulama kontrollü sistemler",
            "Entegre otomasyon çözümleri",
        ],
    },
];

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
                    src="/galeri10.jpg"
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
            </section>

            {/* Services Grid Section */}
            <section className="py-20 bg-white">
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
            </section>

            {/* Quick Services Cards */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                            Hizmetlerimize Hızlı Erişim
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`/hizmetlerimiz/${service.id}`}
                                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="w-14 h-14 bg-[#0c436c]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0c436c] transition-colors">
                                    <service.icon className="text-[#0c436c] group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0c436c] mb-2 group-hover:text-[#3b9fc9] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {service.shortDesc}
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#0c436c] font-medium text-sm group-hover:gap-3 transition-all">
                                    Detaylar <ArrowRight size={16} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

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
        </div>
    );
}

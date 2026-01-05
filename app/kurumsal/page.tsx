"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Building2,
    Target,
    Eye,
    Users,
    Award,
    CheckCircle2,
    ArrowRight,
    Droplets,
    Shield,
    Clock,
    ThumbsUp,
    Sparkles,
} from "lucide-react";

// Team members data
const teamMembers = [
    {
        name: "Ahmet Yılmaz",
        role: "Genel Müdür",
        image: "/team1.jpg",
    },
    {
        name: "Mehmet Kaya",
        role: "Teknik Direktör",
        image: "/team2.jpg",
    },
    {
        name: "Ayşe Demir",
        role: "Satış Müdürü",
        image: "/team3.jpg",
    },
    {
        name: "Fatma Öztürk",
        role: "Müşteri İlişkileri",
        image: "/team4.jpg",
    },
];

// Stats data
const stats = [
    { value: "20+", label: "Yıllık Tecrübe" },
    { value: "500+", label: "Tamamlanan Proje" },
    { value: "1000+", label: "Mutlu Müşteri" },
    { value: "50+", label: "Uzman Kadro" },
];

// Why choose us features
const features = [
    {
        icon: Award,
        title: "Kalite Odaklı",
        description: "TSE ve ISO belgeli ürün ve hizmetlerimizle en yüksek kalite standartlarını sunuyoruz.",
    },
    {
        icon: Clock,
        title: "Zamanında Teslimat",
        description: "Projelerimizi belirlenen süre içinde, gecikme olmadan teslim ediyoruz.",
    },
    {
        icon: Shield,
        title: "Güvenilir Hizmet",
        description: "20 yılı aşkın tecrübemizle sektörün güvenilir ismi olmaya devam ediyoruz.",
    },
    {
        icon: ThumbsUp,
        title: "Müşteri Memnuniyeti",
        description: "Müşteri memnuniyetini her şeyin üstünde tutarak hizmet veriyoruz.",
    },
];

export default function KurumsalPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <Image
                    src="/galeri9.jpg"
                    alt="Kurumsal"
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
                            <Building2 size={16} />
                            <span>Kurumsal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Pooloop Hakkında
                        </h1>
                        <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                            20 yılı aşkın tecrübemizle havuz sektöründe lider konumdayız.
                            Kaliteli ürünler ve profesyonel hizmetlerle yanınızdayız.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-[#0c436c] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                                <Image
                                    src="/galeri3.jpg"
                                    alt="Pooloop Hakkında"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-8 -right-8 bg-[#0c436c] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Droplets size={28} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">20+</div>
                                        <div className="text-white/80 text-sm">Yıllık Deneyim</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Hakkımızda
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Havuz Sektöründe Güvenilir Çözüm Ortağınız
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Pooloop olarak 2004 yılından bu yana havuz sektöründe faaliyet göstermekteyiz.
                                Havuz yapımı, havuz kimyasalları, su arıtma sistemleri ve teknik servis hizmetleri
                                konularında müşterilerimize en kaliteli çözümleri sunmak için çalışıyoruz.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Türkiye genelinde 500'den fazla başarılı proje tamamlayarak sektörde güvenilir
                                bir isim haline geldik. Uzman kadromuz ve kaliteli ürünlerimizle müşterilerimizin
                                hayallerindeki havuzları gerçeğe dönüştürüyoruz.
                            </p>

                            {/* Features List */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {["Profesyonel ekip", "Kaliteli ürünler", "7/24 destek", "Uygun fiyat"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#3b9fc9] shrink-0" size={20} />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-2 bg-[#0c436c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0a3656] transition-colors"
                            >
                                Bizimle İletişime Geçin
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-[#0c436c]/10 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="text-[#0c436c]" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0c436c] mb-4">Misyonumuz</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Havuz sektöründe en kaliteli ürün ve hizmetleri sunarak müşterilerimizin
                                yaşam kalitesini artırmak, sürdürülebilir ve çevre dostu çözümlerle
                                sektöre yön vermek. Müşteri memnuniyetini en üst seviyede tutarak
                                güvenilir bir marka olmaya devam etmek.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-[#3b9fc9]/10 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="text-[#3b9fc9]" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0c436c] mb-4">Vizyonumuz</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Türkiye'nin ve bölgenin lider havuz şirketi olmak. Yenilikçi teknolojiler
                                ve sürdürülebilir uygulamalarla sektörde öncü rol üstlenmek. Global
                                standartlarda hizmet vererek uluslararası arenada tanınan bir marka
                                haline gelmek.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Neden Biz?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                            Sizi Özel Yapan Değerlerimiz
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Müşterilerimize en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-[#0c436c] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-[#0c436c] mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
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
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>Hayalinizdeki Havuz</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Projenizi Birlikte Hayata Geçirelim
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
                        <Link
                            href="/hizmetlerimiz"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0c436c] transition-all"
                        >
                            Hizmetlerimizi İnceleyin
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

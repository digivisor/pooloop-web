"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  FlaskConical,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Phone,
  ChevronRight,
  Waves,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import BrandsSlider from "@/components/BrandsSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import GalleryLightbox from "@/components/GalleryLightbox";
import InstagramFeed from "@/components/InstagramFeed";

// Services data with images
const services = [
  {
    icon: Droplets,
    title: "Havuz Yapımı",
    description:
      "Özel tasarım havuzlar, olimpik havuzlar ve prefabrik havuz sistemleri ile hayalinizdeki havuzu inşa ediyoruz.",
    link: "/hizmetlerimiz/havuz-yapimi",
    image: "/galeri1.jpg",
  },
  {
    icon: FlaskConical,
    title: "Havuz Kimyasalları",
    description:
      "Klor, pH düzenleyiciler, algisitler ve tüm havuz kimyasallarını en kaliteli markalardan temin ediyoruz.",
    link: "/hizmetlerimiz/havuz-kimyasallari",
    image: "",
  },
  {
    icon: Waves,
    title: "Su Arıtma Sistemleri",
    description:
      "Havuz suyu arıtma, filtrasyon sistemleri ve dezenfeksiyon çözümleri ile kristal berraklığında su.",
    link: "/hizmetlerimiz/su-aritma",
    image: "https://images.unsplash.com/photo-1581578017093-cd30ed3e4b98?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Teknik Servis",
    description:
      "Havuz pompaları, filtreler ve tüm ekipmanlarınız için 7/24 teknik servis ve bakım hizmeti sunuyoruz.",
    link: "/hizmetlerimiz/teknik-servis",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Havuz Bakımı",
    description:
      "Periyodik bakım, temizlik ve su analizi hizmetleri ile havuzunuz her zaman kullanıma hazır.",
    link: "/hizmetlerimiz/havuz-bakimi",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Danışmanlık",
    description:
      "Havuz projeleri için profesyonel danışmanlık, fizibilite ve proje yönetimi hizmetleri veriyoruz.",
    link: "/hizmetlerimiz/danismanlik",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
];



// Why choose us
const features = [
  "Profesyonel ve deneyimli ekip",
  "Kaliteli ve sertifikalı ürünler",
  "7/24 teknik destek",
  "Uygun fiyat garantisi",
  "Hızlı teslimat ve kurulum",
  "Satış sonrası destek",
];

// Bubble component with inline styles
function Bubble({ left, delay, size }: { left: string; delay: number; size: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: left,
        bottom: '-20px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '50%',
        animation: `rise ${8 + Math.random() * 4}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate bubbles
  const bubbles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      size: 3 + Math.random() * 6,
    }));
  }, []);

  return (
    <>
      {/* Bubble animation styles */}
      <style jsx global>{`
        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) translateX(10px);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) translateX(-5px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Hero Section - Full Background Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/pooloop-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0c436c]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div
              className={`space-y-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Droplets size={16} />
                <span>Havuz Çözümlerinde Lider</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hayalinizdeki
                <span className="block text-[#3b9fc9]">Havuzu İnşa Ediyoruz</span>
              </h1>

              <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                Havuz yapımı, havuz kimyasalları ve teknik servis hizmetlerinde
                profesyonel çözümler sunuyoruz. Uzman ekibimizle hayalinizdeki
                havuza kavuşun.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#3b9fc9] hover:text-white transition-all"
                >
                  <span>Ücretsiz Teklif Alın</span>
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+902121234567"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0c436c] transition-all"
                >
                  <Phone size={20} />
                  <span>Hemen Arayın</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#3b9fc9]" size={20} />
                  <span className="text-sm text-white/90">TSE Belgeli</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#3b9fc9]" size={20} />
                  <span className="text-sm text-white/90">ISO 9001</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#3b9fc9]" size={20} />
                  <span className="text-sm text-white/90">Garantili Hizmet</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>



      {/* Services Section - Feature Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
              Hizmetlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
              Profesyonel Havuz Çözümleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              20 yılı aşkın tecrübemizle havuz yapımından bakıma kadar tüm ihtiyaçlarınıza çözüm sunuyoruz.
            </p>
          </div>

          {/* Services Grid - 3x2 Image Background Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Service 1 - Havuz Yapımı */}
            <Link href="/hizmetlerimiz/havuz-yapimi" className="group relative rounded-2xl overflow-hidden min-h-[360px]">
              <Image src="/galeri1.jpg" alt="Havuz Yapımı" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#0c436c]/70 group-hover:bg-[#0c436c]/90 transition-colors" />
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Droplets size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Havuz Yapımı</h3>
                  <p className="text-white/70 text-base mb-3">
                    Betonarme, prefabrik ve özel tasarım havuzlar
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Olimpik Havuz
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Özel Tasarım
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Infinity Havuz
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Jakuzi
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-2 text-white text-base font-semibold group-hover:gap-3 transition-all">
                    Detaylı Bilgi <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 2 - Havuz Kimyasalları */}
            <Link href="/hizmetlerimiz/havuz-kimyasallari" className="group relative rounded-2xl overflow-hidden min-h-[360px]">
              <Image src="/kimyasal.jpg" alt="Havuz Kimyasalları" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#0c436c]/70 group-hover:bg-[#0c436c]/90 transition-colors" />
              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <FlaskConical size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Havuz Kimyasalları</h3>
                  <p className="text-white/70 text-base mb-3">
                    Klor, pH düzenleyici ve bakım ürünleri
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Klor Ürünleri
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      pH Düzenleyici
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Algisit
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Kış Bakım
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-2 text-white text-base font-semibold group-hover:gap-3 transition-all">
                    Ürünleri İncele <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 3 - Teknik Servis */}
            <Link href="/hizmetlerimiz/teknik-servis" className="group relative rounded-2xl overflow-hidden min-h-[360px]">
              <Image src="/galeri3.jpg" alt="Teknik Servis" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#0c436c]/70 group-hover:bg-[#0c436c]/90 transition-colors" />
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Teknik Servis</h3>
                  <p className="text-white/70 text-base mb-3">
                    7/24 arıza desteği ve periyodik bakım
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Pompa Onarımı
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Motor Bakımı
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Filtre Değişimi
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Sezon Bakım
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-2 text-white text-base font-semibold group-hover:gap-3 transition-all">
                    Servis Talep Et <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 4 - Su Arıtma */}
            <Link href="/hizmetlerimiz/su-aritma" className="group relative rounded-2xl overflow-hidden min-h-[360px]">
              <Image src="/galeri4.jpg" alt="Su Arıtma" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#0c436c]/70 group-hover:bg-[#0c436c]/90 transition-colors" />
              {/* Decorative Circles */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />
              <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Su Arıtma Sistemleri</h3>
                  <p className="text-white/70 text-base mb-3">
                    Filtrasyon, ısıtma ve otomasyon
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Kum Filtre
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Tuzlu Su
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      UV Sistem
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Ozon
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-2 text-white text-base font-semibold group-hover:gap-3 transition-all">
                    Sistemleri İncele <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 5 - Havuz Aksesuarları */}
            <Link href="/hizmetlerimiz/havuz-aksesuarlari" className="group relative rounded-2xl overflow-hidden min-h-[360px]">
              <Image src="/galeri5.jpg" alt="Havuz Aksesuarları" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#0c436c]/80 group-hover:bg-[#0c436c]/90 transition-colors" />
              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Havuz Aksesuarları</h3>
                  <p className="text-white/70 text-base mb-3">
                    Merdiven, aydınlatma ve dekoratif ürünler
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      LED Işık
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Merdiven
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Örtü Sistemi
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Robot
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-2 text-white text-base font-semibold group-hover:gap-3 transition-all">
                    Ürünleri Gör <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 6 - Renovasyon */}
            <Link href="/hizmetlerimiz/renovasyon" className="group relative rounded-2xl overflow-hidden min-h-[360px]">
              <Image src="/galeri6.jpg" alt="Renovasyon" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#0c436c]/70 group-hover:bg-[#0c436c]/90 transition-colors" />
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Waves size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Havuz Renovasyonu</h3>
                  <p className="text-white/70 text-base mb-3">
                    Eski havuzların modernizasyonu
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Kaplama
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Sistem
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Tasarım
                    </li>
                    <li className="flex items-center gap-1 text-sm text-white/80">
                      <CheckCircle2 size={12} className="text-[#3b9fc9] shrink-0" />
                      Teknoloji
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-2 text-white text-base font-semibold group-hover:gap-3 transition-all">
                    Detaylı Bilgi <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After Comparison Section */}
      <section className="py-20 bg-[#0c436c]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
              Dönüşümü Görün
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bakımsız Havuzunuzu Yeniliyoruz
            </h2>
            <p className="text-white/80 text-lg">
              Profesyonel bakım ve onarım hizmetlerimizle havuzunuzu ilk günkü gibi pırıl pırıl yapıyoruz.
            </p>
          </div>

          {/* Before/After Slider */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ReactCompareSlider
              itemOne={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src="/oncesi.png"
                    alt="Bakımsız Havuz"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Bakımsız
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src="/sonrasi.png"
                    alt="Yenilenmiş Havuz"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Yenilenmiş
                  </div>
                </div>
              }
              style={{ height: "550px" }}
            />
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1470&auto=format&fit=crop"
                  alt="Havuz Bakımı"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0c436c] rounded-2xl -z-10" />
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase">
                Neden Biz?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c]">
                Havuz Çözümlerinde
                <span className="block">Güvenilir Partneriniz</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                15 yılı aşkın tecrübemiz, uzman kadromuz ve kaliteli ürünlerimizle
                havuz sektöründe öncü olmaya devam ediyoruz.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#3b9fc9] shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/kurumsal"
                className="inline-flex items-center gap-2 bg-[#0c436c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1a5a8a] transition-all"
              >
                <span>Hakkımızda</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Brands Slider */}
      <BrandsSlider />

      {/* Testimonials Slider */}
      <TestimonialsSlider />


      {/* Projects Gallery - Clean Bento Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
              Projelerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
              Son Çalışmalarımız
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tamamladığımız projelerden örnekler
            </p>
          </div>

          {/* Gallery with Lightbox */}
          <GalleryLightbox
            images={[
              "/galeri1.jpg",
              "/galeri2.jpg",
              "/galeri3.jpg",
              "/galeri4.jpg",
              "/galeri5.jpg",
              "/galeri6.jpg",
              "/galeri7.jpg",
              "/galeri8.jpg",
              "/galeri9.jpg",
              "/galeri10.jpg",
            ]}
          />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* CTA Section with Many Small Animated Bubbles */}
      <section className="py-20 bg-[#0c436c] relative overflow-hidden">
        {/* Many Small Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {
            bubbles.map((bubble) => (
              <Bubble
                key={bubble.id}
                left={bubble.left}
                delay={bubble.delay}
                size={bubble.size}
              />
            ))
          }
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Havuz Projeniz İçin Hazır mısınız?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Uzman ekibimizle iletişime geçin, hayalinizdeki havuz için ücretsiz
            keşif ve teklif alın. Size özel çözümler sunmak için sabırsızlanıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#e8f4f8] transition-all"
            >
              <span>Ücretsiz Teklif Alın</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+902121234567"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0c436c] transition-all"
            >
              <Phone size={20} />
              <span>+90 212 123 45 67</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

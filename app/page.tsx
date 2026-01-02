"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  FlaskConical,
  Wrench,
  ShieldCheck,
  Users,
  Award,
  Clock,
  Building2,
  ArrowRight,
  Phone,
  ChevronRight,
  Waves,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// Services data with images
const services = [
  {
    icon: Droplets,
    title: "Havuz Yapımı",
    description:
      "Özel tasarım havuzlar, olimpik havuzlar ve prefabrik havuz sistemleri.",
    link: "/hizmetlerimiz/havuz-yapimi",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021d1?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: FlaskConical,
    title: "Havuz Kimyasalları",
    description:
      "Klor, pH düzenleyiciler ve tüm havuz kimyasalları.",
    link: "/hizmetlerimiz/havuz-kimyasallari",
    image: "https://images.unsplash.com/photo-1563351672-62b74891a28a?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Waves,
    title: "Su Arıtma Sistemleri",
    description:
      "Filtrasyon sistemleri ve dezenfeksiyon çözümleri.",
    link: "/hizmetlerimiz/su-aritma",
    image: "https://images.unsplash.com/photo-1581578017093-cd30ed3e4b98?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Teknik Servis",
    description:
      "7/24 teknik servis ve bakım hizmeti.",
    link: "/hizmetlerimiz/teknik-servis",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Havuz Bakımı",
    description:
      "Periyodik bakım, temizlik ve su analizi.",
    link: "/hizmetlerimiz/havuz-bakimi",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Danışmanlık",
    description:
      "Profesyonel danışmanlık ve proje yönetimi.",
    link: "/hizmetlerimiz/danismanlik",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
  },
];

// Stats data
const stats = [
  { icon: Clock, value: "15+", label: "Yıllık Tecrübe" },
  { icon: Building2, value: "500+", label: "Tamamlanan Proje" },
  { icon: Users, value: "1000+", label: "Mutlu Müşteri" },
  { icon: Award, value: "50+", label: "Profesyonel Ekip" },
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

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section - Full Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920&auto=format&fit=crop"
            alt="Lüks Havuz"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0c436c]/70" />
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

      {/* Stats Section - Compact */}
      <section className="bg-[#0c436c] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white py-4"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                  <stat.icon size={24} />
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - New Card Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-4">
              Hizmetlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
              Profesyonel Havuz Çözümleri
            </h2>
            <p className="text-gray-600 text-lg">
              Havuz sistemleri ve kimyasalları alanında sunduğumuz kapsamlı hizmetlerle
              ihtiyaçlarınıza en uygun çözümleri sunuyoruz.
            </p>
          </div>

          {/* Services Grid - New Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0c436c]/60 group-hover:bg-[#0c436c]/80 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-[#3b9fc9] rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#3b9fc9] font-medium text-sm group-hover:gap-2 transition-all">
                    Detaylı Bilgi
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section className="py-24 bg-[#f8fbfd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1470&auto=format&fit=crop"
                  alt="Havuz Bakımı"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Accent Box */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#0c436c] rounded-3xl -z-10" />
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase">
                Neden Biz?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c]">
                Havuz Çözümlerinde
                <span className="block">Güvenilir Partneriniz</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                15 yılı aşkın tecrübemiz, uzman kadromuz ve kaliteli ürünlerimizle
                havuz sektöründe öncü olmaya devam ediyoruz. Müşteri memnuniyetini
                her zaman ön planda tutarak, en iyi hizmeti sunmayı hedefliyoruz.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#3b9fc9] rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/kurumsal"
                className="inline-flex items-center gap-2 bg-[#0c436c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1a5a8a] transition-all"
              >
                <span>Hakkımızda</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Small Animated Bubbles */}
      <section className="py-20 bg-[#0c436c] relative overflow-hidden">
        {/* Small Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="bubble-small" style={{ left: '5%', animationDelay: '0s' }} />
          <div className="bubble-small" style={{ left: '10%', animationDelay: '1.5s' }} />
          <div className="bubble-small" style={{ left: '15%', animationDelay: '3s' }} />
          <div className="bubble-small" style={{ left: '25%', animationDelay: '0.5s' }} />
          <div className="bubble-small" style={{ left: '30%', animationDelay: '2s' }} />
          <div className="bubble-small" style={{ left: '40%', animationDelay: '4s' }} />
          <div className="bubble-small" style={{ left: '50%', animationDelay: '1s' }} />
          <div className="bubble-small" style={{ left: '55%', animationDelay: '2.5s' }} />
          <div className="bubble-small" style={{ left: '65%', animationDelay: '0.8s' }} />
          <div className="bubble-small" style={{ left: '70%', animationDelay: '3.5s' }} />
          <div className="bubble-small" style={{ left: '80%', animationDelay: '1.2s' }} />
          <div className="bubble-small" style={{ left: '85%', animationDelay: '2.8s' }} />
          <div className="bubble-small" style={{ left: '90%', animationDelay: '0.3s' }} />
          <div className="bubble-small" style={{ left: '95%', animationDelay: '4.5s' }} />
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

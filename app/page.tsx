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
      "Özel tasarım havuzlar, olimpik havuzlar ve prefabrik havuz sistemleri ile hayalinizdeki havuzu inşa ediyoruz.",
    link: "/hizmetlerimiz/havuz-yapimi",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021d1?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: FlaskConical,
    title: "Havuz Kimyasalları",
    description:
      "Klor, pH düzenleyiciler, algisitler ve tüm havuz kimyasallarını en kaliteli markalardan temin ediyoruz.",
    link: "/hizmetlerimiz/havuz-kimyasallari",
    image: "https://images.unsplash.com/photo-1563351672-62b74891a28a?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Waves,
    title: "Su Arıtma Sistemleri",
    description:
      "Havuz suyu arıtma, filtrasyon sistemleri ve dezenfeksiyon çözümleri ile kristal berraklığında su.",
    link: "/hizmetlerimiz/su-aritma",
    image: "https://images.unsplash.com/photo-1581578017093-cd30ed3e4b98?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Teknik Servis",
    description:
      "Havuz pompaları, filtreler ve tüm ekipmanlarınız için 7/24 teknik servis ve bakım hizmeti.",
    link: "/hizmetlerimiz/teknik-servis",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Havuz Bakımı",
    description:
      "Periyodik bakım, temizlik ve su analizi hizmetleri ile havuzunuz her zaman hazır.",
    link: "/hizmetlerimiz/havuz-bakimi",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Danışmanlık",
    description:
      "Havuz projeleri için profesyonel danışmanlık, fizibilite ve proje yönetimi hizmetleri.",
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

      {/* Stats Section */}
      <section className="bg-[#0c436c] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                  <stat.icon size={32} />
                </div>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
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

          {/* Services Grid with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0c436c]/40 group-hover:bg-[#0c436c]/20 transition-colors" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <service.icon className="text-[#0c436c]" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0c436c] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#3b9fc9] font-medium group-hover:gap-2 transition-all">
                    Detaylı Bilgi
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
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

      {/* CTA Section with Animated Bubbles */}
      <section className="py-20 bg-[#0c436c] relative overflow-hidden">
        {/* Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Bubble 1 */}
          <div
            className="absolute w-20 h-20 rounded-full bg-white/10 animate-bubble"
            style={{ left: '10%', bottom: '-80px', animationDelay: '0s', animationDuration: '8s' }}
          />
          {/* Bubble 2 */}
          <div
            className="absolute w-14 h-14 rounded-full bg-white/10 animate-bubble"
            style={{ left: '20%', bottom: '-80px', animationDelay: '2s', animationDuration: '10s' }}
          />
          {/* Bubble 3 */}
          <div
            className="absolute w-24 h-24 rounded-full bg-white/10 animate-bubble"
            style={{ left: '35%', bottom: '-80px', animationDelay: '4s', animationDuration: '7s' }}
          />
          {/* Bubble 4 */}
          <div
            className="absolute w-16 h-16 rounded-full bg-white/10 animate-bubble"
            style={{ left: '50%', bottom: '-80px', animationDelay: '1s', animationDuration: '9s' }}
          />
          {/* Bubble 5 */}
          <div
            className="absolute w-12 h-12 rounded-full bg-white/10 animate-bubble"
            style={{ left: '65%', bottom: '-80px', animationDelay: '3s', animationDuration: '11s' }}
          />
          {/* Bubble 6 */}
          <div
            className="absolute w-20 h-20 rounded-full bg-white/10 animate-bubble"
            style={{ left: '75%', bottom: '-80px', animationDelay: '5s', animationDuration: '8s' }}
          />
          {/* Bubble 7 */}
          <div
            className="absolute w-10 h-10 rounded-full bg-white/10 animate-bubble"
            style={{ left: '85%', bottom: '-80px', animationDelay: '0.5s', animationDuration: '12s' }}
          />
          {/* Bubble 8 */}
          <div
            className="absolute w-16 h-16 rounded-full bg-white/10 animate-bubble"
            style={{ left: '5%', bottom: '-80px', animationDelay: '6s', animationDuration: '9s' }}
          />
          {/* Bubble 9 */}
          <div
            className="absolute w-8 h-8 rounded-full bg-white/10 animate-bubble"
            style={{ left: '45%', bottom: '-80px', animationDelay: '7s', animationDuration: '10s' }}
          />
          {/* Bubble 10 */}
          <div
            className="absolute w-12 h-12 rounded-full bg-white/10 animate-bubble"
            style={{ left: '90%', bottom: '-80px', animationDelay: '2.5s', animationDuration: '8s' }}
          />
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

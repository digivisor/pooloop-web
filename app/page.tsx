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

// Services data with images
const services = [
  {
    icon: Droplets,
    title: "Havuz Yapımı",
    description:
      "Özel tasarım havuzlar, olimpik havuzlar ve prefabrik havuz sistemleri ile hayalinizdeki havuzu inşa ediyoruz.",
    link: "/hizmetlerimiz/havuz-yapimi",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021d1?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: FlaskConical,
    title: "Havuz Kimyasalları",
    description:
      "Klor, pH düzenleyiciler, algisitler ve tüm havuz kimyasallarını en kaliteli markalardan temin ediyoruz.",
    link: "/hizmetlerimiz/havuz-kimyasallari",
    image: "https://images.unsplash.com/photo-1563351672-62b74891a28a?q=80&w=800&auto=format&fit=crop",
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



      {/* Services Section - Larger Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
              Hizmetlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
              Profesyonel Havuz Çözümleri
            </h2>
            <p className="text-gray-600 text-lg">
              Havuz sistemleri ve kimyasalları alanında kapsamlı hizmetler sunuyoruz.
            </p>
          </div>

          {/* Services Grid - Larger Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#0c436c] rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0c436c] mb-3 group-hover:text-[#3b9fc9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#3b9fc9] font-semibold group-hover:gap-2 transition-all">
                    Detaylı Bilgi
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
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
                    src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1600&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1600&auto=format&fit=crop"
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

      {/* Partners / Brands Section - Marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
              Çözüm Ortaklarımız
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c436c]">
              Güçlü Markalarla İş Birliği
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div className="marquee-container">
              <div className="marquee-content">
                {["Hayward", "Astral Pool", "Emaux", "Pentair", "Fluidra", "Zodiac", "Hayward", "Astral Pool", "Emaux", "Pentair", "Fluidra", "Zodiac"].map((brand, i) => (
                  <div
                    key={i}
                    className="w-44 h-24 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mx-4 shrink-0 hover:border-[#3b9fc9] hover:shadow-md transition-all"
                  >
                    <span className="text-[#0c436c] font-bold text-lg">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References / Testimonials Section - Creative */}
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

          {/* Creative Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-[#3b9fc9]/20 text-6xl font-serif">"</div>

                {/* Project Tag */}
                <div className="inline-block bg-[#0c436c] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  {testimonial.project}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#3b9fc9]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0c436c]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-[#3b9fc9]">{testimonial.location}</p>
                  </div>
                </div>

                {/* Hover decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3b9fc9] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery - Creative Bento Grid */}
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

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Image */}
            <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/galeri1.jpg"
                alt="Proje 1"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-[#3b9fc9] text-xs font-semibold px-3 py-1 rounded-full">Villa Havuzu</span>
                <h3 className="text-xl font-bold mt-2">Beykoz Villa Projesi</h3>
              </div>
            </div>

            {/* Regular Images */}
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/galeri2.jpg"
                alt="Proje 2"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/90 text-[#0c436c] text-xs font-semibold px-2 py-1 rounded">Otel</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/galeri3.jpg"
                alt="Proje 3"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/90 text-[#0c436c] text-xs font-semibold px-2 py-1 rounded">Aquapark</span>
              </div>
            </div>

            {/* Tall Image */}
            <div className="row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/galeri4.jpg"
                alt="Proje 4"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#0c436c] text-white text-xs font-semibold px-3 py-1 rounded-full">Infinity Havuz</span>
              </div>
            </div>

            {/* Last Image */}
            <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src="/galeri5.jpg"
                alt="Proje 5"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/90 text-[#0c436c] text-xs font-semibold px-2 py-1 rounded">Site</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Many Small Animated Bubbles */}
      <section className="py-20 bg-[#0c436c] relative overflow-hidden">
        {/* Many Small Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {bubbles.map((bubble) => (
            <Bubble
              key={bubble.id}
              left={bubble.left}
              delay={bubble.delay}
              size={bubble.size}
            />
          ))}
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

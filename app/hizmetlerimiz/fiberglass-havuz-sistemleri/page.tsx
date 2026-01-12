"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Phone,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Zap,
    Shield,
    Clock,
    Wrench,
    Award,
    Droplets,
    X,
} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Hızlı Kurulum",
        description: "Fabrikasyon üretim sayesinde çok daha hızlı ve pratik kurulum imkanı."
    },
    {
        icon: Shield,
        title: "Yüksek Mukavemet",
        description: "Esnek yapısı sayesinde zemin hareketlerine ve çatlamalara karşı üstün dayanıklılık."
    },

    {
        icon: Clock,
        title: "Düşük Bakım",
        description: "Pürüzsüz yüzeyi sayesinde alg oluşumunu en aza indirir."
    },
    {
        icon: Award,
        title: "Premium Kalite",
        description: "Uluslararası standartlarda üretim ve sertifikalı malzemeler."
    },
];

const advantages = [
    "Fabrikasyon üretim ile standart kalite",
    "Tek parça havuz gövdesi - sızıntı riski yok",
    "UV dayanımlı jelkot kaplama",
    "Kolay temizlenebilir pürüzsüz yüzey",
    "Geniş renk ve model seçenekleri",
    "Hızlı teslimat ve montaj",
    "Minimum bakım gereksinimi",
    "Uzun ömürlü ve dayanıklı yapı"
];

const poolTypes = [
    { name: "MYRA POOL", image: "/fiberglass/myra.png" },
    { name: "OLYMPOS POOL", image: "/fiberglass/olympos-2.png" },
    { name: "SIMENA POOL", image: "/fiberglass/simena.png" },
    { name: "ACOUSTIC POOL", image: "/fiberglass/4.png" },
    { name: "NIGHT POOL", image: "/fiberglass/night.png" },
    { name: "ARTEMIS POOL", image: "/fiberglass/artemis.png" },
    { name: "PATARA SMALL POOL", image: "/fiberglass/patara-small.png" },
    { name: "PATARA MEDIUM POOL", image: "/fiberglass/patara-medium.png" },
    { name: "PATARA LARGE POOL", image: "/fiberglass/patara-large.png" },
    { name: "PATARA X-LARGE POOL", image: "/fiberglass/patara-Xlarge.png" },
    { name: "JUMP POOL", image: "/fiberglass/jump.png" },
    { name: "FUN POOL", image: "/fiberglass/fun.png" },
    { name: "THALASSO POOL", image: "/fiberglass/thalasso.png" },
    { name: "HYDROTHERAPY POOL", image: "/fiberglass/hydrotherapy.png" },
    { name: "ACRY POOL FRONT", image: "/fiberglass/acry-front.png" },
    { name: "ACRY POOL SIDE", image: "/fiberglass/acry-pool.png" },
    { name: "ACRY POOL 2L", image: "/fiberglass/acry-2l.png" },
    { name: "ACRY POOL 3U", image: "/fiberglass/acry-3u.png" },
    { name: "THERAPEUTIC JAKUZI", image: "/fiberglass/therapeutic.png" },
    { name: "HYDROMAS JAKUZI", image: "/fiberglass/hydromas.png" },
];

const poolDetails: Record<string, {
    description: string;
    specs: { label: string; value: string }[];
    specs2?: { label: string; value: string; title: string }[];
    images: string[];
}> = {
    "MYRA POOL": {
        description: "Myra Havuz modelimiz, LAP Pool olarak da bilinen, kompakt minimalist alanlar için tasarlanmıştır. Yüzey kaplaması, Gelcoat ve Mozaik seçenekleri ile üretilmektedir.",
        specs: [
            { label: "Uzunluk", value: "5000 mm" },
            { label: "Genişlik", value: "2000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/myra/myra-1.png", "/fiberglass/myra/myra-2.png", "/fiberglass/myra/myra-3.png"]
    },
    "OLYMPOS POOL": {
        description: "Olympos Havuz, bahçenizde geniş ıslak güneşlenme alanıyla size, ailenize ve arkadaşlarınıza yüzme havuzunuzda ve çevresinde keyifli anlar yaşatacaktır.",
        specs: [
            { label: "Uzunluk", value: "8000 mm" },
            { label: "Genişlik", value: "4000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
            { label: "Oturum Sayısı", value: "4 Oturum" },
        ],
        images: ["/fiberglass/olympos/olympos-1.png", "/fiberglass/olympos/olympos-2.png", "/fiberglass/olympos/olympos-3.png"]
    },
    "SIMENA POOL": {
        description: "Simena Havuz, bahçenizde cömert bir ıslak güneşlenme alanı sunarak aileniz ve arkadaşlarınızla keyifli anlar yaşamak için mükemmel bir ortam yaratır. Yüzme havuzunuzun ve çevresindeki unsurların keyfini çıkarın. İstenirse, sığ havuz bölümü bir korkulukla ayrılarak çocuk havuzu olarak kullanılabilir.",
        specs: [
            { label: "Uzunluk", value: "10000 mm" },
            { label: "Genişlik", value: "4000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/simena/simena-1.png", "/fiberglass/simena/simena-2.png", "/fiberglass/simena/simena-3.png"]
    },
    "ACOUSTIC POOL": {
        description: "Aile ve arkadaşlarınızla bahçenizde keyifli anlar yaşamak için Acoustic Havuz'un nezaketinde, huzur ve sevincin tadını çıkarın. Geniş jakuzi alanı, sizi yüzme havuzu etrafında ve doğal çevresinde harika anılar biriktirmeye davet ediyor.",
        specs: [
            { label: "Uzunluk", value: "11700 mm" },
            { label: "Genişlik", value: "3900 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
            { label: "Oturum Sayısı", value: "4 Oturum" },
        ],
        images: ["/fiberglass/artemis/artemis-1.png", "/fiberglass/artemis/artemis-2.png", "/fiberglass/artemis/artemis-3.png"]
    },
    "NIGHT POOL": {
        description: "Night Havuzu ile bahçe cennetinizde huzur ve paylaşılan anları keşfedin. Aileniz ve arkadaşlarınızla kaliteli zaman geçirmenin keyfini, yüzme havuzunun cazibesi ve çevrenin uyumlu öğeleriyle çevrili olarak yaşayın.",
        specs: [
            { label: "Uzunluk", value: "11700 mm" },
            { label: "Genişlik", value: "3900 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
            { label: "Oturum Sayısı", value: "4 Oturum" },
        ],
        images: ["/fiberglass/night/night-1.png", "/fiberglass/night/night-2.png", "/fiberglass/night/night-3.png"]
    },
    "ARTEMIS POOL": {
        description: "Artemis Havuz'unda bahçenizde rahatlamanın ve dostluğun keyfine varın. Bu davetkar vaha içinde aileniz ve arkadaşlarınızla kaliteli zaman geçirin; geniş ıslak güneşlenme alanı ile tamamlanan. Yüzme havuzunuzun ve etkileyici çevresinin keyfini doyasıya çıkarın.",
        specs: [
            { label: "Uzunluk", value: "11700 mm" },
            { label: "Genişlik", value: "3900 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
            { label: "Oturum Sayısı", value: "4 Oturum" },
        ],
        images: ["/fiberglass/artemis/artemis-1.png", "/fiberglass/artemis/artemis-2.png", "/fiberglass/artemis/artemis-3.png"]
    },
    "PATARA SMALL POOL": {
        description: "Patara Havuzu ile bahçe kaçamağınızda huzuru ve paylaşılan mutluluğu keşfedin. Aileniz ve arkadaşlarınızla, yüzme havuzunun cazibesi ve çevrenin doğal çekiciliği arasında değerli anların keyfini çıkarın. Small, Medium, Large ve X-Large kalıplarda mevcuttur.",
        specs: [
            { label: "Uzunluk", value: "6000 mm" },
            { label: "Genişlik", value: "3000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/patara/patara-1.png"]
    },
    "PATARA MEDIUM POOL": {
        description: "Patara Havuzu ile bahçe kaçamağınızda huzuru ve paylaşılan mutluluğu keşfedin. Aileniz ve arkadaşlarınızla, yüzme havuzunun cazibesi ve çevrenin doğal çekiciliği arasında değerli anların keyfini çıkarın. Small, Medium, Large ve X-Large kalıplarda mevcuttur.",
        specs: [
            { label: "Uzunluk", value: "7000 mm" },
            { label: "Genişlik", value: "3000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/patara/patara-1.png"]
    },
    "PATARA LARGE POOL": {
        description: "Patara Havuzu ile bahçe kaçamağınızda huzuru ve paylaşılan mutluluğu keşfedin. Aileniz ve arkadaşlarınızla, yüzme havuzunun cazibesi ve çevrenin doğal çekiciliği arasında değerli anların keyfini çıkarın. Small, Medium, Large ve X-Large kalıplarda mevcuttur.",
        specs: [
            { label: "Uzunluk", value: "8000 mm" },
            { label: "Genişlik", value: "3000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/patara/patara-1.png"]
    },
    "PATARA X-LARGE POOL": {
        description: "Patara Havuzu ile bahçe kaçamağınızda huzuru ve paylaşılan mutluluğu keşfedin. Aileniz ve arkadaşlarınızla, yüzme havuzunun cazibesi ve çevrenin doğal çekiciliği arasında değerli anların keyfini çıkarın. Small, Medium, Large ve X-Large kalıplarda mevcuttur.",
        specs: [
            { label: "Uzunluk", value: "10000 mm" },
            { label: "Genişlik", value: "3000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/patara/patara-1.png"]
    },
    "JUMP POOL": {
        description: "Oyun dolu mutluluk dünyasına, özellikle hayatınızdaki küçükler için özel olarak tasarlanmış Jump Havuzu ile dalın. Bu canlı ve eğlenceli çocuk havuzu, alanınızı neşe dolu bir cennete dönüştürür; burada çocuklar sıçramaların, kahkahaların ve kaygısız anların tadını çıkarabilirler.",
        specs: [
            { label: "Çap", value: "4000 mm" },
            { label: "Derinlik", value: "450 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/jump/jump-1.png", "/fiberglass/jump/jump-2.png"]
    },
    "FUN POOL": {
        description: "Fun Havuzu, genç yüzücüler için güvenli ve keyifli bir deneyim sağlayan sığ bir bölüm içerir. Güvenlik korkuluğu ekleyebilme seçeneği ile kolayca güvenli bir çocuk havuzuna dönüşebilir. Çocukların neşeli enerjisi havayı doldururken, açık hava cennetinizin kalbinde kalıcı anılar yaratılır.",
        specs: [
            { label: "Uzunluk", value: "4000 mm" },
            { label: "Genişlik", value: "2000 mm" },
            { label: "Derinlik", value: "450 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/fun/fun-1.png", "/fiberglass/fun/fun-2.png"]
    },
    "THALASSO POOL": {
        description: "Thalasso Havuzumuz, son teknoloji hidroterapiyi deniz suyu ilhamlı ortamların canlandırıcı dokunuşuyla birleştirir. Havuzlar, mineraller ve iz elementlerle zenginleştirilmiştir; böylece rahatlama, canlılık ve yeniden kazanılmış bir huzur hissini teşvik eden bütünsel ve etkileyici bir yolculuk sunar.",
        specs: [
            { label: "Uzunluk", value: "6300 mm" },
            { label: "Genişlik", value: "2800 mm" },
            { label: "Derinlik", value: "1100 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/thalasso/thalasso-1.png", "/fiberglass/thalasso/thalasso-2.png"]
    },
    "HYDROTHERAPY POOL": {
        description: "Hydrotherapy Havuzumuza adım attığınızda, okyanusun tuzluluğunu yansıtan kucaklayıcı tuzlu suyu hissedin. Suyun nazik çekilip akışı, stratejik olarak yerleştirilmiş jetlerle birleşerek dolaşımı teşvik eden, kas gerginliğini hafifleten ve sizi canlanmış hissettiren duyusal bir yolculuk sunar.",
        specs: [
            { label: "Uzunluk", value: "7000 mm" },
            { label: "Genişlik", value: "3500 mm" },
            { label: "Derinlik", value: "1100 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        images: ["/fiberglass/hydrotherapy/hydrotherapy-1.png", "/fiberglass/hydrotherapy/hydrotherapy-2.png"]
    },
    "ACRY POOL FRONT": {
        description: "",
        specs: [
            { label: "Uzunluk", value: "10000 mm" },
            { label: "Genişlik", value: "4000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        specs2: [
            { label: "NET Görünüm Genişliği", value: "2800 mm", title: "Akrilik Panel Duvar Akrilik Ön Pencere" },
            { label: "NET Görünüm Yüksekliği", value: "900 mm", title: "Akrilik Panel Duvar Akrilik Ön Pencere" },
        ],
        images: ["/fiberglass/acry/acry-pool-front/acry-pool-front-1.png", "/fiberglass/acry/acry-pool-front/acry-pool-front-2.png"]
    },
    "ACRY POOL SIDE": {
        description: "",
        specs: [
            { label: "Uzunluk", value: "10000 mm" },
            { label: "Genişlik", value: "4000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        specs2: [
            { label: "NET Görünüm Genişliği", value: "5700 mm", title: "Akrilik Panel Duvar Akrilik Yan Pencere" },
            { label: "NET Görünüm Yüksekliği", value: "900 mm", title: "Akrilik Panel Duvar Akrilik Yan Pencere" },
        ],
        images: ["/fiberglass/acry/acry-pool-side/acry-pool-side-1.png", "/fiberglass/acry/acry-pool-side/acry-pool-side-2.png"]
    },
    "ACRY POOL 2L": {
        description: "",
        specs: [
            { label: "Uzunluk", value: "10000 mm" },
            { label: "Genişlik", value: "4000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        specs2: [
            { label: "NET Görünüm Genişliği (Ön)", value: "2800 mm", title: "Akrilik Panel Duvar Akrilik Ön Pencere" },
            { label: "NET Görünüm Yüksekliği (Ön)", value: "900 mm", title: "Akrilik Panel Duvar Akrilik Ön Pencere" },
            { label: "NET Görünüm Genişliği (Yan)", value: "5700 mm", title: "Akrilik Panel Duvar Akrilik Yan Pencere" },
            { label: "NET Görünüm Yüksekliği (Yan)", value: "900 mm", title: "Akrilik Panel Duvar Akrilik Yan Pencere" },
        ],
        images: ["/fiberglass/acry/acry-pool-2l/acry-pool-2l-1.png", "/fiberglass/acry/acry-pool-2l/acry-pool-2l-2.png"]
    },
    "ACRY POOL 3U": {
        description: "",
        specs: [
            { label: "Uzunluk", value: "10000 mm" },
            { label: "Genişlik", value: "4000 mm" },
            { label: "Derinlik", value: "1500 mm" },
            { label: "Yüzey", value: "Jelkot/Mozaik" },
        ],
        specs2: [
            { label: "NET Görünüm Genişliği (Ön)", value: "2800 mm", title: "Akrilik Panel Duvar Akrilik Ön Pencere" },
            { label: "NET Görünüm Yüksekliği (Ön)", value: "900 mm", title: "Akrilik Panel Duvar Akrilik Ön Pencere" },
            { label: "NET Görünüm Genişliği (Yanlar)", value: "5700 mm", title: "Akrilik Panel Duvar Akrilik Yan Pencereler" },
            { label: "NET Görünüm Yüksekliği (Yanlar)", value: "900 mm", title: "Akrilik Panel Duvar Akrilik Yan Pencereler" },
        ],
        images: ["/fiberglass/acry/acry-pool-3u/acry-pool-3u-1.png", "/fiberglass/acry/acry-pool-3u/acry-pool-3u-2.png"]
    },
    "THERAPEUTIC JAKUZI": {
        description: "Therapeutic Jakuzimiz, ergonomik tasarım ve son teknoloji hidroterapi özellikleri ile donatılmış lüks bir başyapıttır. Güçlü jetler, özel bir masaj sunarak kaslardaki gerilimi çözer, derin rahatlama ve rahatlama sağlamak amacıyla belirli bölgelere odaklanır.",
        specs: [
            { label: "Uzunluk", value: "2150 mm" },
            { label: "Genişlik", value: "1900 mm" },
            { label: "Derinlik", value: "100 mm" },
            { label: "Yüzey", value: "Jelkot" },
            { label: "Oturum Sayısı", value: "2 Oturum" },
        ],
        images: ["/fiberglass/therapeutic/therapeutic-1.png", "/fiberglass/therapeutic/therapeutic-2.png"]
    },
    "HYDROMAS JAKUZI": {
        description: "Sizin konforunuz düşünülerek tasarlanan HydroMas Jakuzi, planlı bir şekilde düzenlenmiş oturma alanları ve özelleştirilebilir ayarlar içerir, böylece hidroterapi deneyiminizi kişiselleştirebilirsiniz. Tek başınıza bir kaçış arıyor ya da sevdiklerinizle paylaşacağınız huzurlu bir an mı istiyorsunuz, bu modelimiz isteklerinize uyum sağlar. ",
        specs: [
            { label: "Uzunluk", value: "3700 mm" },
            { label: "Genişlik", value: "3200 mm" },
            { label: "Derinlik", value: "1000 mm" },
            { label: "Yüzey", value: "Jelkot" },
            { label: "Oturum Sayısı", value: "4 Oturum" },
        ],
        images: ["/fiberglass/hydromas/hydromas-1.png", "/fiberglass/hydromas/hydromas-2.png"]
    },

};

export default function FiberglassHavuzSistemleriPage() {
    const [selectedPool, setSelectedPool] = useState<typeof poolTypes[0] | null>(null);

    const getDetail = (name: string) => {
        return poolDetails[name] || {
            description: "Bu model için detaylı bilgi yakında eklenecektir.",
            specs: [],
            images: []
        };
    };

    return (
        <div className="bg-gray-50 min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/banner-3.png"
                    alt="Fiberglass Havuz Sistemleri"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c436c]/90 to-[#0c436c]/70" />

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b9fc9]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    {/* <div className="inline-flex items-center gap-2 bg-[#3b9fc9] px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Zap size={18} />
                        <span>Hızlı Kurulum</span>
                    </div> */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Fiberglass Havuz Sistemleri
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Hızlı kurulum, uzun ömür ve düşük bakım avantajı sunan, fabrikasyon kompozit havuz çözümleri.
                    </p>
                    {/* <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#3b9fc9] hover:text-white transition-all"
                        >
                            Ücretsiz Teklif Alın
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+902121234567"
                            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0c436c] transition-all"
                        >
                            <Phone size={20} />
                            Hemen Arayın
                        </a>
                    </div> */}
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#0c436c] transition-colors">Anasayfa</Link>
                        <ChevronRight size={16} />
                        <Link href="/hizmetlerimiz" className="hover:text-[#0c436c] transition-colors">Hizmetlerimiz</Link>
                        <ChevronRight size={16} />
                        <span className="text-[#0c436c] font-medium">Fiberglass Havuz Sistemleri</span>
                    </div>
                </div>
            </div>

            {/* Section 1: Fiberglass Nedir? */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Materyal
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Fiberglass Nedir?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Fiberglass (Cam Elyaf Takviyeli Plastik), ince cam telleri ile güçlendirilmiş plastik bir kompozit malzemedir.
                                Hafif yapısına rağmen çelikten daha sağlam olabilen bu üstün malzeme, korozyona, paslanmaya ve zorlu hava koşullarına karşı eşsiz bir direnç gösterir.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Havacılık, denizcilik (yat ve tekne gövdeleri) ve otomotiv gibi yüksek performans ve güvenlik gerektiren sektörlerde
                                tercih edilmesinin ana nedeni, uzun ömürlü yapısı ve esnekliğidir.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/fiber.png"
                                alt="Fiberglass Materyal Yapısı"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Fiberglass Yüzme Havuzları */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
                            <Image
                                src="/banner-3.png"
                                alt="Fiberglass Yüzme Havuzu"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Kullanım Alanı
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Fiberglass Yüzme Havuzları
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Fiberglass teknolojisinin havuz sektörüne uyarlanması, yüzme havuzu inşasında devrim yaratmıştır.
                                Geleneksel betonarme havuzların aksine, fiberglass havuzlar fabrika ortamında tek parça (monoblok) olarak üretilir.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-[#3b9fc9]/10 rounded-full mt-1">
                                        <CheckCircle2 size={16} className="text-[#3b9fc9]" />
                                    </div>
                                    <span className="text-gray-700">Pürüzsüz yüzey sayesinde yosun ve bakteri tutmaz.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-[#3b9fc9]/10 rounded-full mt-1">
                                        <CheckCircle2 size={16} className="text-[#3b9fc9]" />
                                    </div>
                                    <span className="text-gray-700">Esnek yapısı zemin hareketlerine ve çatlamalara karşı dayanıklıdır.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-[#3b9fc9]/10 rounded-full mt-1">
                                        <CheckCircle2 size={16} className="text-[#3b9fc9]" />
                                    </div>
                                    <span className="text-gray-700">İnşaat süreci gerektirmez, günler içinde kullanıma hazırdır.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Pooloop Deneyimi */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Neden Biz?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                            Pooloop Deneyimi
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Pooloop olarak, sadece bir havuz değil, yaşam boyu sürecek bir kalite sunuyoruz.
                            Yılların verdiği mühendislik tecrübesi ve %100 müşteri memnuniyeti odaklı yaklaşımımızla,
                            hayalinizdeki havuzu en yüksek standartlarda üretiyor ve kurulumunu gerçekleştiriyoruz.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 text-center"
                            >
                                <div className="w-16 h-16 bg-[#3b9fc9]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <feature.icon size={32} className="text-[#3b9fc9]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0c436c] mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pool Types */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Model Seçenekleri
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                            Fiberglass Havuz Modelleri
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Farklı boyut ve tasarım seçenekleri ile hayalinizdeki havuza kavuşun.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {poolTypes.map((type, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col items-center transition-all duration-300 cursor-pointer relative z-0 hover:z-20"
                                onClick={() => setSelectedPool(type)}
                            >
                                <div className="relative w-full h-[180px] flex items-end justify-center overflow-visible">
                                    <Image
                                        src={type.image}
                                        alt={type.name}
                                        width={400}
                                        height={300}
                                        className="object-contain w-full h-full drop-shadow-2xl scale-280 group-hover:scale-245 transition-transform duration-500 pointer-events-none"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#0c436c] group-hover:text-[#3b9fc9] transition-colors mt-6 text-center z-10">
                                    {type.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* References Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Part 1: Completed Projects */}
                    <div className="text-center mb-12">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Projelerimiz
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                            Tamamlanan Projeler
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Türkiye'nin dört bir yanında ve yurtdışında başarıyla tamamladığımız projelerden kareler.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                        {[
                            "ref1.jpg",
                            "ref12.JPG",
                            "ref3.JPG",
                            "ref18.JPG",
                            "ref5.JPG",
                            "ref22.JPG",
                            "ref16.JPG",
                            "ref17.JPG",

                        ].map((imageName, idx) => (
                            <div key={idx} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                                <Image
                                    src={`/referanslar/${imageName}`}
                                    alt={`Referans Proje ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Part 2: Manufacturing & Workshop */}
                    <div className="text-center mb-12">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Üretim & Kalite
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                            Atölye ve Üretim Tesisi
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Modern üretim tesisimizde yüksek kalite standartlarında gerçekleşen imalat süreçleri.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "teknik1.jpg",
                            "teknik2.jpeg",
                            "teknik3.jpg",
                            "teknik4.jpg"
                        ].map((imageName, idx) => (
                            <div key={idx} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                                <Image
                                    src={`/teknik/${imageName}`}
                                    alt={`Atölye Üretim ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedPool && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPool(null)}>
                    <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedPool(null)}
                            className="absolute right-4 top-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                        >
                            <X size={24} className="text-gray-500" />
                        </button>

                        <div className="p-8">
                            {/* Images Grid */}
                            {(() => {
                                const images = getDetail(selectedPool.name).images;
                                if (images.length === 1) {
                                    return (
                                        <div className="flex justify-center mb-8 bg-gray-50 rounded-xl p-8 h-[400px] relative items-center">
                                            <Image
                                                src={images[0]}
                                                alt={selectedPool.name}
                                                fill
                                                className="object-contain scale-200"
                                            />
                                        </div>
                                    );
                                } else if (images.length === 2) {
                                    return (
                                        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center h-[350px]">
                                            {images.map((img, i) => (
                                                <div key={i} className="relative h-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                                                    <Image
                                                        src={img}
                                                        alt={`${selectedPool.name} view ${i + 1}`}
                                                        fill
                                                        className="object-contain scale-200"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    );
                                } else if (images.length >= 3) {
                                    return (
                                        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center h-[500px]">
                                            <div className="grid grid-cols-2 gap-4 h-full">
                                                {images.slice(0, 2).map((img, i) => (
                                                    <div key={i} className="relative h-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                                                        <Image src={img} alt={`${selectedPool.name} view ${i + 1}`} fill className="object-contain scale-250" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="relative h-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                                                <Image src={images[2]} alt={`${selectedPool.name} plan view`} fill className="object-contain scale-200" />
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <div className="flex justify-center mb-8 bg-gray-50 rounded-xl p-8">
                                        <Image src={selectedPool.image} alt={selectedPool.name} width={400} height={300} className="object-contain max-h-[300px] scale-125" />
                                    </div>
                                );
                            })()}

                            {getDetail(selectedPool.name).specs2 ? (
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h4 className="font-bold text-[#0c436c] mb-4 border-b pb-2">Sipariş Kodu {selectedPool.name}</h4>
                                        <div className="space-y-3">
                                            {getDetail(selectedPool.name).specs.map((spec, i) => (
                                                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                                                    <span className="font-semibold text-gray-700">{spec.label}</span>
                                                    <span className="text-gray-600">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h4 className="font-bold text-[#0c436c] mb-4 border-b pb-2">{getDetail(selectedPool.name).specs2?.[0]?.title || "Teknik Özellikler"}</h4>
                                        <div className="space-y-3">
                                            {getDetail(selectedPool.name).specs2?.map((spec, i) => (
                                                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                                                    <span className="font-semibold text-gray-700">{spec.label}</span>
                                                    <span className="text-gray-600">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0c436c] mb-4">{selectedPool.name}</h3>
                                        {getDetail(selectedPool.name).description && (
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {getDetail(selectedPool.name).description}
                                            </p>
                                        )}
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-2xl">
                                        <h4 className="font-bold text-[#0c436c] mb-4 border-b pb-2">Sipariş Kodu {selectedPool.name}</h4>
                                        <div className="space-y-3">
                                            {getDetail(selectedPool.name).specs.length > 0 ? (
                                                getDetail(selectedPool.name).specs.map((spec, i) => (
                                                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                                                        <span className="font-semibold text-gray-700">{spec.label}</span>
                                                        <span className="text-gray-600">{spec.value}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 italic">Teknik özellikler yakında eklenecektir.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-[#0c436c]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Fiberglass Havuz Projesi mi Düşünüyorsunuz?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Uzman ekibimiz ile iletişime geçin, size özel çözümler sunalım. Ücretsiz keşif ve fiyat teklifi için hemen arayın.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#3b9fc9] hover:text-white transition-all"
                        >
                            Teklif Alın
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+902121234567"
                            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0c436c] transition-all"
                        >
                            <Phone size={20} />
                            +90 212 123 45 67
                        </a>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Keşfetmeye Devam Et
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c]">
                                Diğer Havuz Sistemleri
                            </h2>
                        </div>
                        <Link href="/hizmetlerimiz" className="hidden md:flex items-center gap-2 text-[#0c436c] font-semibold hover:text-[#3b9fc9] transition-colors">
                            Tüm Hizmetler
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Betonarme Havuz Card */}
                        <Link href="/hizmetlerimiz/betonarme-havuz-sistemleri" className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Image
                                src="/galeri1.jpg"
                                alt="Betonarme Havuz"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c436c]/90 via-[#0c436c]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-xs font-medium mb-4">
                                    Özel Tasarım & Dayanıklılık
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-white">Betonarme Havuz</h3>
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0c436c] transition-all duration-300">
                                        <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Liner Havuz Card */}
                        <Link href="/hizmetlerimiz/liner-havuz-sistemleri" className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Image
                                src="/liner.png"
                                alt="Liner Havuz"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c436c]/90 via-[#0c436c]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-xs font-medium mb-4">
                                    Ekonomik & Estetik
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-white">Liner Havuz</h3>
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0c436c] transition-all duration-300">
                                        <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Palette,
    Shield,
    Banknote,
    Layers,
    Award,
    Droplets,
} from "lucide-react";

const features = [
    {
        icon: Banknote,
        title: "Ekonomik Çözüm",
        description: "Diğer havuz sistemlerine göre daha uygun maliyetli yapım."
    },
    {
        icon: Shield,
        title: "%100 Sızdırmazlık",
        description: "PVC liner kaplama ile tam sızdırmazlık garantisi."
    },
    {
        icon: Palette,
        title: "Estetik Tasarım",
        description: "Farklı desen ve renk seçenekleri ile özelleştirilebilir görünüm."
    },
    {
        icon: Layers,
        title: "Modüler Yapı",
        description: "Çelik panel altyapı ile hızlı ve kolay kurulum."
    },
];

const advantages = [
    "Çelik panel modüler altyapı",
    "PVC liner kaplama teknolojisi",
    "Ekonomik yapım maliyeti",
    "Hızlı montaj süreci",
    "Farklı renk ve desen seçenekleri",
    "Kolay bakım ve temizlik",
    "%100 sızdırmazlık garantisi",
    "Yenilenebilir liner kaplama"
];

const linerPatterns = [
    { name: "Mavi Mozaik", color: "bg-blue-500" },
    { name: "Turkuaz", color: "bg-cyan-400" },
    { name: "Okyanus Mavisi", color: "bg-blue-600" },
    { name: "Açık Mavi", color: "bg-sky-300" },
    { name: "Kum Beji", color: "bg-amber-200" },
    { name: "Beyaz Mermer", color: "bg-gray-100" },
];

export default function LinerHavuzSistemleriPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/liner.png"
                    alt="Liner Havuz Sistemleri"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c436c]/90 to-[#0ea5e9]/70" />

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    {/* <div className="inline-flex items-center gap-2 bg-[#0ea5e9] px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Banknote size={18} />
                        <span>Ekonomik Çözüm</span>
                    </div> */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Liner & Modüler Havuz Sistemleri
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Çelik panel altyapı ve liner kaplama teknolojisiyle esnek, ekonomik ve hızlı kurulum imkanı sunan sistemler.
                    </p>
                    {/* <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#0ea5e9] hover:text-white transition-all"
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
                        <span className="text-[#0c436c] font-medium">Liner Havuz Sistemleri</span>
                    </div>
                </div>
            </div>

            {/* Section 1: Genel Bakış (Liner Havuz Nedir?) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Genel Bakış
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Liner Havuz Nedir?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Liner havuz, veya diğer adıyla modüler panel havuz, önceden üretilmiş çelik veya kompozit panellerin birleştirilmesi
                                ve içinin özel PVC liner (liner kaplama) ile kaplanmasıyla oluşturulan modern bir havuz sistemidir.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                Geleneksel betonarme havuzlara kıyasla çok daha düşük maliyetli olması ve %100 sızdırmazlık garantisi sunması,
                                liner havuzları günümüzün en popüler tercihi haline getirmiştir. Esnek yapısı sayesinde deprem bölgelerinde bile güvenle kullanılabilir
                                ve çatlama, su kaçırma gibi riskleri tamamen ortadan kaldırır.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/liner.png"
                                alt="Liner Havuz Genel Bakış"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Kullanım Alanları */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
                            <Image
                                src="/galeri7.jpg"
                                alt="Liner Havuz Kullanım Alanları"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Esneklik
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Nerede Kullanılır?
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Liner sisteminin sunduğu esneklik, onu her türlü proje için mükemmel bir seçenek yapar.
                                İster yeni bir inşaat, ister eski bir havuzun yenilenmesi olsun, liner teknolojisi her ihtiyaca cevap verir.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-[#0c436c] mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                                        Müstakil Villa ve Konutlar
                                    </h4>
                                    <p className="text-gray-600 text-sm pl-4">Kişisel kullanım için ideal, ekonomik ve estetik çözümler.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-[#0c436c] mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                                        Ticari Tesisler ve Oteller
                                    </h4>
                                    <p className="text-gray-600 text-sm pl-4">Yoğun kullanıma uygun, hijyenik ve kolay temizlenebilir yüzeyler.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-[#0c436c] mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                                        Havuz Tadilatı ve Yenileme
                                    </h4>
                                    <p className="text-gray-600 text-sm pl-4">Su kaçıran eski betonarme havuzların liner ile kaplanarak %100 sızdırmaz hale getirilmesi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Avantajlar (Features Grid) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Avantajlar
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                            Neden Liner Havuz?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Liner havuzlar, bütçe dostu, uzun ömürlü ve estetik görünümlü havuz çözümleri arayanlar için ideal tercihdir.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="w-14 h-14 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0ea5e9] transition-colors duration-300">
                                    <feature.icon size={28} className="text-[#0ea5e9] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0c436c] mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Liner Teknolojisi */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Teknoloji
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Liner Kaplama Teknolojisi
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Liner havuz kaplamaları, donatılı PVC malzemeden (1.5mm) üretilen,
                                yüksek esnekliğe ve dayanıklılığa sahip son teknoloji bir yüzey kaplama sistemidir.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-lg text-[#0c436c]">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0c436c] mb-1">%100 Sızdırmazlık</h4>
                                        <p className="text-gray-600 text-sm">Esnek yapısı sayesinde yapısal hareketlerden etkilenmez, kesin sızdırmazlık sağlar.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-100 rounded-lg text-[#0c436c]">
                                        <Droplets size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0c436c] mb-1">Antibakteriyel Yüzey</h4>
                                        <p className="text-gray-600 text-sm">Pürüzsüz dokusu yosun ve bakteri oluşumunu engeller, hijyenik bir yüzüş deneyimi sunar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/galeri5.jpg"
                                alt="Liner Havuz Teknolojisi"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Modüler Panel Sistemi */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
                            <Image
                                src="/galeri6.jpg"
                                alt="Modüler Havuz Panelleri"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Altyapı
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Modüler Çelik Panel Sistemi
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Modüler havuz sistemimiz, yüksek mukavemetli galvanizli çelik panellerden oluşur.
                                Bu paneller, birbirine cıvatalarla bağlanarak havuzun iskeletini oluşturur.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-[#0ea5e9] shrink-0 mt-1" />
                                    <span className="text-gray-700">Deprem ve zemin hareketlerine karşı yüksek direnç.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-[#0ea5e9] shrink-0 mt-1" />
                                    <span className="text-gray-700">Betonarme havuzlara göre çok daha hızlı kurulum süresi.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-[#0ea5e9] shrink-0 mt-1" />
                                    <span className="text-gray-700">Her türlü zemin koşuluna ve projeye uygun esnek tasarım.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Pooloop Farkı & Features */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Neden Biz?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                            Pooloop Kalitesi ve Güvencesi
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Yüzlerce başarılı proje ve tecrübeli ekibimizle, liner havuz sistemlerinde sektörün öncüsüyüz.
                            Sadece kurulum değil, satış sonrası destek ve bakım hizmetlerimizle de yanınızdayız.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 text-center"
                            >
                                <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <feature.icon size={32} className="text-[#0ea5e9]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0c436c] mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Liner Patterns */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Estetik
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                            Liner Renk ve Desen Çeşitleri
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Havuzunuza kişilik katacak birçok renk ve desen seçeneği ile hayalinizdeki atmosferi yaratın.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {linerPatterns.map((pattern, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className={`w-full aspect-square rounded-full ${pattern.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white ring-offset-2 ring-offset-gray-100`} />
                                <span className="block text-center text-gray-700 font-semibold group-hover:text-[#0ea5e9] transition-colors">{pattern.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Referanslar */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Projelerimiz
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                            Referanslarımız
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Liner havuz sistemleriyle hayata geçirdiğimiz seçkin projelerden örnekler.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 5, 2, 4, 3, 6, 7, 8].map((num, idx) => (
                            <div key={idx} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                                <Image
                                    src={`/galeri${num}.jpg`}
                                    alt={`Referans Proje ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0c436c] to-[#0ea5e9]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ekonomik Havuz Çözümü mü Arıyorsunuz?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Liner havuz sistemi ile bütçenizi zorlamadan hayalinizdeki havuza kavuşun. Ücretsiz keşif ve fiyat teklifi için hemen arayın.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
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
                            <span className="inline-block text-[#0ea5e9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Keşfetmeye Devam Et
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c]">
                                Diğer Havuz Sistemleri
                            </h2>
                        </div>
                        <Link href="/hizmetlerimiz" className="hidden md:flex items-center gap-2 text-[#0c436c] font-semibold hover:text-[#0ea5e9] transition-colors">
                            Tüm Hizmetler
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Fiberglass Havuz Card */}
                        <Link href="/hizmetlerimiz/fiberglass-havuz-sistemleri" className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Image
                                src="/banner-3.png"
                                alt="Fiberglass Havuz"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c436c]/90 via-[#0c436c]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-xs font-medium mb-4">
                                    Hızlı & Dayanıklı
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-white">Fiberglass Havuz</h3>
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0c436c] transition-all duration-300">
                                        <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </Link>

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
                                    Özel Tasarım & Prestij
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-white">Betonarme Havuz</h3>
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

import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Wrench,
    Shield,
    Ruler,
    Layers,
    Award,
    Droplets,
    Palette,
} from "lucide-react";

const features = [
    {
        icon: Ruler,
        title: "Özel Tasarım",
        description: "Arazinize ve hayallerinize uygun sınırsız tasarım imkanı."
    },
    {
        icon: Shield,
        title: "Üstün Dayanıklılık",
        description: "Betonarme yapı ile depreme ve dış etkenlere karşı maksimum dayanım."
    },
    {
        icon: Layers,
        title: "İstediğiniz Boyut",
        description: "2m'den olimpik boyutlara kadar her ölçüde üretim yapılabilir."
    },
    {
        icon: Award,
        title: "Profesyonel İşçilik",
        description: "Deneyimli mühendisler ve usta ekiple kaliteli imalat."
    },
];

const advantages = [
    "Sınırsız boyut ve şekil seçeneği",
    "Yerinde döküm ile mükemmel uyum",
    "Yüksek basınç dayanımı",
    "Uzun ömürlü ve kalıcı yapı",
    "Özel tasarım havuz kenarları",
    "Entegre spa ve jakuzi alanları",
    "Infinity edge (sonsuzluk) havuz imkanı",
    "Depreme dayanıklı yapı"
];

const processSteps = [
    { step: "01", title: "Proje & Tasarım", desc: "İhtiyaçlarınıza göre 3D proje çizimi" },
    { step: "02", title: "Kazı & Hazırlık", desc: "Zemin etüdü ve kazı çalışmaları" },
    { step: "03", title: "Kalıp & Demir", desc: "Demir hasır ve kalıp işlemleri" },
    { step: "04", title: "Beton Döküm", desc: "Özel havuz betonu ile döküm" },
    { step: "05", title: "İzolasyon", desc: "Su yalıtımı ve sızdırmazlık" },
    { step: "06", title: "Kaplama & Teslim", desc: "Seramik/mozaik kaplama ve teslim" },
];

export default function BetonarmeHavuzSistemleriPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/galeri1.jpg"
                    alt="Betonarme Havuz Sistemleri"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c436c]/90 to-[#0c436c]/70" />

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3b9fc9]/20 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    {/* <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Wrench size={18} />
                        <span>Özel Tasarım</span>
                    </div> */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Betonarme Havuz Sistemleri
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Özel ölçü, sınırsız tasarım ve yüksek mühendislik gerektiren projeler için yerinde imalat betonarme havuz çözümleri.
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
                        <span className="text-[#0c436c] font-medium">Betonarme Havuz Sistemleri</span>
                    </div>
                </div>
            </div>

            {/* Section 1: Genel Bakış (Betonarme Havuz Nedir?) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Genel Bakış
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Betonarme Havuz Nedir?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Betonarme havuzlar, havuz inşaat teknolojilerinin atası ve en dayanıklısı olarak kabul edilir.
                                Yerinde dökülen beton ve güçlü demir donatı sistemi ile inşa edilen bu yapılar,
                                nesiller boyu kullanılabilecek bir sağlamlık sunar.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                Standart kalıplara bağlı kalmaksızın, arazinizin eğimine, büyüklüğüne ve
                                hayalinizdeki forma göre tamamen "terzi işi" (custom-made) olarak tasarlanır.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/galeri1.jpg"
                                alt="Betonarme Havuz Genel Bakış"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2a: Sistem Seçenekleri */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-2">
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                İhtiyaca Uygun Çözümler
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Sistem Seçenekleri: Skimmer ve Taşmalı
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Betonarme havuz projelerinde, bütçenize, arazinizin yapısına ve estetik beklentilerinize göre iki temel sistem sunuyoruz. Her iki sistem de betonarme gövdenin sağlamlığına sahiptir.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="text-lg font-bold text-[#0c436c] mb-2 flex items-center gap-2">
                                        <CheckCircle2 size={20} className="text-[#3b9fc9]" />
                                        Skimmerli Sistem
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Su seviyesi havuz küpeştesinden 10-15 cm aşağıdadır. Denge deposu gerektirmez, bu nedenle makine dairesi daha az yer kaplar. İşletmesi kolay ve maliyeti daha uygundur.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="text-lg font-bold text-[#0c436c] mb-2 flex items-center gap-2">
                                        <CheckCircle2 size={20} className="text-[#3b9fc9]" />
                                        Taşmalı (Overflow) Sistem
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Su seviyesi zeminle aynı kottadır (sıfır). Su, kenarlardaki ızgaralardan taşarak denge deposuna gider. En iyi su sirkülasyonunu ve hijyeni sağlar. Görsel olarak kusursuzdur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group">
                            <Image
                                src="/referanslar/ref14.jpg"
                                alt="Skimmer ve Taşmalı Havuz Sistemleri"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2b: Betonarme Teknolojisi */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
                            <Image
                                src="/teknik/teknik-8.png"
                                alt="Betonarme Havuz Kesiti"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Floating Card */}
                            <div className="absolute top-8 left-8 bg-[#0c436c]/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Shield size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">C30/35 Beton</div>
                                        <div className="text-xs text-white/70">Yüksek Dayanım</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-2 lg:order-1">
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Mühendislik ve Güven
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                                Üstün Betonarme Teknolojisi
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Betonarme havuzlar, statik hesaplamalara dayalı, çift sıra demir donatı ve yekpare (monoblok) beton döküm tekniği ile inşa edilir.
                                Bu yöntem, havuzun zemin hareketlerine ve tonlarca suyun basıncına karşı en yüksek direnci göstermesini sağlar.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-[#3b9fc9]/10 rounded-full mt-1">
                                        <Layers size={20} className="text-[#3b9fc9]" />
                                    </div>
                                    <div>
                                        <strong className="text-[#0c436c]">Monoblok Gövde:</strong>
                                        <span className="text-gray-600 text-sm block">Taban ve perdelerin birleşim yerlerinde soğuk derz oluşumunu engelleyen özel döküm teknikleri.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-[#3b9fc9]/10 rounded-full mt-1">
                                        <Droplets size={20} className="text-[#3b9fc9]" />
                                    </div>
                                    <div>
                                        <strong className="text-[#0c436c]">Tam Su Yalıtımı:</strong>
                                        <span className="text-gray-600 text-sm block">Beton içerisine katılan kristalize katkılar ve sürme yalıtım katmanları ile %100 sızdırmazlık.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 bg-[#3b9fc9]/10 rounded-full mt-1">
                                        <CheckCircle2 size={20} className="text-[#3b9fc9]" />
                                    </div>
                                    <div>
                                        <strong className="text-[#0c436c]">Uzun Ömür:</strong>
                                        <span className="text-gray-600 text-sm block">50+ yıl kullanım ömrü ile gayrimenkulünüze kalıcı değer katan tek havuz sistemi.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section 3: Avantajlar (Features Grid) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Avantajlar
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                            Neden Betonarme Tercih Edilmeli?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Yatırımınızın karşılığını fazlasıyla veren, değerini hiç kaybetmeyen bir yapı.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group text-center"
                            >
                                <div className="w-16 h-16 bg-[#0c436c]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#0c436c] transition-colors duration-300">
                                    <feature.icon size={32} className="text-[#0c436c] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0c436c] mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Section 5: Kaplama Seçenekleri */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            Estetik & Görünüm
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                            Premium Kaplama Seçenekleri
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Havuzunuza değer katacak, suyun rengini en güzel şekilde yansıtacak kaplama alternatifleri.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#0c436c]">
                                <Palette size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-[#0c436c] mb-2">Porselen Seramik</h3>
                            <p className="text-gray-500 text-sm">Yüksek hijyen sağlayan, antibakteriyel ve kaymaz yüzeyli özel havuz porselenleri.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#0c436c]">
                                <Layers size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-[#0c436c] mb-2">Cam Mozaik</h3>
                            <p className="text-gray-500 text-sm">Işıltılı ve renkli bir görünüm için binlerce renk ve desen seçeneği sunan klasik tercih.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#0c436c]">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-[#0c436c] mb-2">Doğal Taş</h3>
                            <p className="text-gray-500 text-sm">Tropikal ve doğal bir atmosfer yaratmak isteyenler için özel taş kaplamalar (Green Sukabumi vb.).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Referanslar */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                            İlham Alın
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                            Tamamlanan Projeler
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Betonarme havuz uzmanlığımızla hayata geçen seçkin projelerden kareler.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[7, 8, 9, 10, 1, 3, 5, 2].map((num, idx) => (
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
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-6">
                        Özel Tasarım Havuz Projesi mi Planlıyorsunuz?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Betonarme havuz konusunda uzman kadromuz ile iletişime geçin. Ücretsiz keşif ve 3D proje çizimi için hemen arayın.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 bg-[#0c436c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3b9fc9] transition-all"
                        >
                            Teklif Alın
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+902121234567"
                            className="inline-flex items-center gap-2 border-2 border-[#0c436c] text-[#0c436c] px-8 py-4 rounded-xl font-semibold hover:bg-[#0c436c] hover:text-white transition-all"
                        >
                            <Phone size={20} />
                            +90 212 123 45 67
                        </a>
                    </div>
                </div>
            </section>

            {/* Related Services - Premium Style */}
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
                                    Hızlı & Modüler
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-white">Fiberglass Havuz</h3>
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

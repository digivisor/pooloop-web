"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, FlaskConical, Filter, Search, CheckCircle2 } from "lucide-react";

// Product interface
interface PoolChemical {
    id: number;
    name: string;
    slug: string;
    image: string;
    category: string;
    description: string;
    features?: string[];
}

// Products data
const poolChemicals: PoolChemical[] = [
    {
        id: 1,
        name: "SPCLPOOL PH MINUS L (Sıvı pH Düşürücü)",
        slug: "spclpool-ph-minus-l",
        image: "/chemicals/chemicals1.jpeg",
        category: "pH Düzenleyici",
        description: "Havuz suyunun pH seviyesini düşürmek için kullanılan sıvı kimyasaldır.",
        features: ["Kolay dozajlama", "Hızlı çözünür", "pH seviyesini dengeler", "Korozyonu önler", "Etkin pH kontrolü sağlar"]
    },
    {
        id: 2,
        name: "SPCLPOOL PH DÜŞÜRÜCÜ KONSANTRE",
        slug: "spclpool-ph-dusurucu-konsantre",
        image: "/chemicals/chemicals2.jpeg",
        category: "pH Düzenleyici",
        description: "Yoğun formülü sayesinde daha az miktarla etkili pH düşürme sağlar.",
        features: ["Konsantre formül", "Düşük kullanım miktarı", "Yüksek etki gücü", "pH dengelemede üstün performans", "Hızlı çözünebilen yapı"]
    },
    {
        id: 3,
        name: "SPCLPOOL TAŞ ASİDİ",
        slug: "spclpool-tas-asidi",
        image: "/chemicals/chemicals3.jpeg",
        category: "Temizlik",
        description: "Havuz kenarlarında oluşan kireç ve tortuları temizlemek için kullanılır.",
        features: ["Yoğun kireç çözücü", "Taş yüzeylerde güvenli", "Etkin temizlik", "Kolay uygulama", "Kötü kokuları giderir"]
    },
    {
        id: 4,
        name: "SPCLPOOL HAVUZ TEMİZLİK ASİDİ",
        slug: "spclpool-havuz-temizlik-asidi",
        image: "/chemicals/chemicals4.jpeg",
        category: "Temizlik",
        description: "Genel havuz temizliğinde kullanılan güçlü asidik temizleyicidir.",
        features: ["Zorlu lekeleri söker", "Antibakteriyel temizlik", "Yüzey dostu formül", "Kireç ve tortuya karşı etkilidir", "Profesyonel kullanım için uygundur"]
    },
    {
        id: 5,
        name: "SPCLPOOL TOZ PH YÜKSELTİCİ",
        slug: "spclpool-toz-ph-yukseltici",
        image: "/chemicals/chemicals5.jpeg",
        category: "pH Düzenleyici",
        description: "Düşük pH seviyelerini yükseltmek için kullanılan toz kimyasaldır.",
        features: ["Yüksek çözünürlük", "pH dengesini sağlar", "Uzun süreli etki", "Kolay saklama", "Ekonomik kullanım"]
    },
    {
        id: 6,
        name: "SPCLPOOL KIŞ BAKIM ÜRÜNÜ",
        slug: "spclpool-kis-bakim-urunu",
        image: "/chemicals/chemicals6.jpeg",
        category: "Kış Bakımı",
        description: "Kış aylarında havuz suyunun korunması için kullanılır.",
        features: ["Alg oluşumunu engeller", "Suyu berrak tutar", "Donmaya karşı koruma sağlar", "Sezon sonrası kolay açılış", "Uzun süreli koruma"]
    },
    {
        id: 7,
        name: "SPCLPOOL CALCEX FİLTER G (Toz Filtre Temizleyici)",
        slug: "spclpool-calcex-filter-g",
        image: "/chemicals/chemicals7.jpg",
        category: "Filtre Temizleyici",
        description: "Filtre sistemlerindeki kireç ve tortuları temizlemek için kullanılan toz ürün.",
        features: ["Güçlü temizlik", "Filtre ömrünü uzatır", "Toz formülüyle kolay kullanım", "Çevre dostu", "Etkin filtre performansı sağlar"]
    },
    {
        id: 8,
        name: "SPCLPOOL CALCEX FİLTER L (Sıvı Filtre Temizleyici)",
        slug: "spclpool-calcex-filter-l",
        image: "/chemicals/chemicals8.jpeg",
        category: "Filtre Temizleyici",
        description: "Sıvı formda filtre temizleyici; düzenli bakım için idealdir.",
        features: ["Kullanıma hazır formül", "Hızlı etki", "Filtre sistemini korur", "Tortu ve yağ giderici", "Kolay durulama"]
    },
    {
        id: 9,
        name: "SPCLPOOL BERRAKLAŞTIRICI (SIVI)",
        slug: "spclpool-berraklastirici",
        image: "/chemicals/chemicals9.jpeg",
        category: "Su Temizleyici",
        description: "Havuz suyunun daha berrak ve temiz görünmesini sağlar.",
        features: ["Hızlı etki", "Küçük partikülleri çöktürür", "Filtrasyon verimliliğini artırır", "Koku yapmaz", "Tüm havuz tipleri için uygundur"]
    },
    {
        id: 10,
        name: "SIVI KLOR",
        slug: "sivi-klor",
        image: "/chemicals/chemicals10.jpeg",
        category: "Dezenfektan",
        description: "Havuz suyu dezenfeksiyonu için kullanılan sıvı klor ürünü.",
        features: ["Yüksek dezenfeksiyon gücü", "Hızlı etki", "Geniş spektrumlu mikrop öldürücü", "Kolay dozaj", "Ekonomik çözüm"]
    },
    {
        id: 11,
        name: "GRANÜL AKTİF %56'LIK KLOR",
        slug: "granul-aktif-56-klor",
        image: "/chemicals/chemicals11.jpg",
        category: "Dezenfektan",
        description: "Orta seviyede aktif klor içeren granül formda dezenfektan.",
        features: ["%56 aktif klor içeriği", "Yavaş çözünür", "Uzun süreli etki", "Koku yapmaz", "Alg oluşumunu önler"]
    },
    {
        id: 12,
        name: "GRANÜL AKTİF %70'LİK KLOR",
        slug: "granul-aktif-70-klor",
        image: "/chemicals/chemicals11.jpg",
        category: "Dezenfektan",
        description: "Yüksek konsantrasyona sahip granül klor ürünü.",
        features: ["%70 aktif klor", "Yüksek hijyen sağlar", "Etkin çözünme", "Kolay uygulama", "Bakteri ve virüsleri yok eder"]
    },
    {
        id: 13,
        name: "GRANÜL AKTİF %90'LIK KLOR",
        slug: "granul-aktif-90-klor",
        image: "/chemicals/chemicals11.jpg",
        category: "Dezenfektan",
        description: "En yüksek konsantrasyonlu granül klor ürünü.",
        features: ["%90 aktif klor", "Maksimum dezenfeksiyon", "Profesyonel kullanım", "Uzun raf ömrü"]
    },
    {
        id: 14,
        name: "%90'LIK TABLET KLOR",
        slug: "tablet-klor-90",
        image: "/chemicals/chemicals11.jpg",
        category: "Dezenfektan",
        description: "Tablet formda yavaş çözünen klor ürünü.",
        features: ["Tablet form", "Yavaş çözünür", "Uzun süreli dezenfeksiyon", "Kolay uygulama"]
    },
    {
        id: 15,
        name: "SPCLPOOL SERPANTİN TEMİZLEYİCİ",
        slug: "spclpool-serpantin-temizleyici",
        image: "/chemicals/chemicals11.jpg",
        category: "Temizlik",
        description: "Isı pompası serpantin temizliği için özel formül.",
        features: ["Serpantin temizliği", "Kireç çözücü", "Verimlilik artırıcı"]
    },
    {
        id: 16,
        name: "YOSUN ÖNLEYİCİ VE ÖLDÜRÜCÜ",
        slug: "yosun-onleyici-oldurucu",
        image: "/chemicals/chemicals12.jpg",
        category: "Alg Önleyici",
        description: "Havuzda yosun oluşumunu önleyen ve mevcut yosunları yok eden ürün.",
        features: ["Alg önleyici", "Yosun öldürücü", "Uzun süreli koruma", "Berrak su"]
    }
];

// Get all unique categories
const allCategories = [...new Set(poolChemicals.map(p => p.category))];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState<PoolChemical | null>(null);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Handle scroll for sticky sidebar
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setIsFixed(rect.top <= 112); // 112px = ~28 * 4 (top-28)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Filter products
    const filteredProducts = poolChemicals.filter(product => {
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesSearch = !searchQuery ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Open/close modal
    const openModal = (product: PoolChemical) => {
        setSelectedProduct(product);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <Image
                    src="/urunlerbanner.png"
                    alt="Ürünlerimiz"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0c436c]/70" />

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <FlaskConical size={16} />
                            <span>Havuz Kimyasalları</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Ürünlerimiz
                        </h1>
                        <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                            Havuzunuzun bakımı için ihtiyacınız olan tüm kimyasal ürünler.
                            Kaliteli ve güvenilir çözümler.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-4">
                        <button
                            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                            className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 font-medium text-[#0c436c] w-full"
                        >
                            <Filter size={20} />
                            <span>Filtrele</span>
                        </button>
                    </div>

                    {/* Mobile Sidebar */}
                    {isMobileFilterOpen && (
                        <aside className="lg:hidden mb-6">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-[#0c436c] mb-4">Kategoriler</h3>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-colors cursor-pointer ${!selectedCategory
                                        ? 'bg-[#0c436c] text-white font-medium'
                                        : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    Tüm Ürünler ({poolChemicals.length})
                                </button>
                                <div className="space-y-1">
                                    {allCategories.map(category => {
                                        const count = poolChemicals.filter(p => p.category === category).length;
                                        return (
                                            <button
                                                key={category}
                                                onClick={() => { setSelectedCategory(category); setIsMobileFilterOpen(false); }}
                                                className={`w-full text-left px-4 py-3 rounded-xl transition-colors cursor-pointer ${selectedCategory === category
                                                    ? 'bg-[#0c436c] text-white font-medium'
                                                    : 'hover:bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {category} ({count})
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="relative">
                                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Ürün ara..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b9fc9] focus:border-transparent outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* Desktop Layout - Flex */}
                    <div className="flex gap-8 items-start">
                        {/* Sidebar - Sticky */}
                        <aside className="hidden lg:block w-72 shrink-0 h-fit sticky top-28">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-[#0c436c] mb-4">Kategoriler</h3>

                                {/* All Products */}
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-colors cursor-pointer ${!selectedCategory
                                        ? 'bg-[#0c436c] text-white font-medium'
                                        : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    Tüm Ürünler ({poolChemicals.length})
                                </button>

                                {/* Category List */}
                                <div className="space-y-1">
                                    {allCategories.map(category => {
                                        const count = poolChemicals.filter(p => p.category === category).length;
                                        return (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`w-full text-left px-4 py-3 rounded-xl transition-colors cursor-pointer ${selectedCategory === category
                                                    ? 'bg-[#0c436c] text-white font-medium'
                                                    : 'hover:bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {category} ({count})
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Search */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <h3 className="text-lg font-bold text-[#0c436c] mb-4">Ara</h3>
                                    <div className="relative">
                                        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Ürün ara..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b9fc9] focus:border-transparent outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div className="flex-1">
                            {/* Results Header */}
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-gray-600">
                                    <span className="font-semibold text-[#0c436c]">{filteredProducts.length}</span> ürün bulundu
                                </p>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id}
                                        onClick={() => openModal(product)}
                                        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
                                    >
                                        {/* Product Image */}
                                        <div className="relative aspect-square bg-white overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Category Badge */}
                                            <div className="absolute top-3 left-3 bg-[#0c436c] text-white text-xs font-medium px-3 py-1 rounded-full">
                                                {product.category}
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-5 bg-gray-50">
                                            <h3 className="font-semibold text-[#0c436c] mb-2 line-clamp-2 group-hover:text-[#3b9fc9] transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* No Results */}
                            {filteredProducts.length === 0 && (
                                <div className="text-center py-16">
                                    <FlaskConical size={48} className="mx-auto text-gray-300 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Ürün Bulunamadı</h3>
                                    <p className="text-gray-500">Arama kriterlerinize uygun ürün bulunamadı.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between z-10">
                            <span className="bg-[#0c436c] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                                {selectedProduct.category}
                            </span>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Product Image */}
                                <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                                    <Image
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        fill
                                        className="object-contain p-6"
                                    />
                                </div>

                                {/* Product Details */}
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0c436c] mb-4">
                                        {selectedProduct.name}
                                    </h2>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {selectedProduct.description}
                                    </p>

                                    {/* Features */}
                                    {selectedProduct.features && selectedProduct.features.length > 0 && (
                                        <div>
                                            <h3 className="font-semibold text-[#0c436c] mb-3">Özellikler</h3>
                                            <ul className="space-y-2">
                                                {selectedProduct.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                                        <CheckCircle2 size={18} className="text-[#3b9fc9] shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

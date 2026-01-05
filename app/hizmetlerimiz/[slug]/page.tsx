import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";
import { services } from "@/app/data/services";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0c436c]/80" />

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                        <service.icon size={18} />
                        <span>Hizmetlerimiz</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                        {service.title}
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up-delay">
                        {service.shortDesc}
                    </p>
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
                        <span className="text-[#0c436c] font-medium">{service.title}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Service Menu */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-32">
                                <h3 className="text-lg font-bold text-[#0c436c] mb-4 pb-4 border-b border-gray-100">
                                    Diğer Hizmetler
                                </h3>
                                <div className="space-y-2">
                                    {services.map((s) => (
                                        <Link
                                            key={s.id}
                                            href={`/hizmetlerimiz/${s.id}`}
                                            className={`flex items-center justify-between p-3 rounded-xl transition-all ${s.id === slug
                                                ? "bg-[#0c436c] text-white shadow-md"
                                                : "hover:bg-gray-50 text-gray-600 hover:text-[#0c436c]"
                                                }`}
                                        >
                                            <span className="font-medium">{s.title}</span>
                                            {s.id === slug && <ChevronRight size={18} />}
                                        </Link>
                                    ))}
                                </div>

                                {/* Quick Contact Widget */}
                                <div className="mt-8 bg-blue-50/50 rounded-2xl p-6 border border-blue-100 text-center">
                                    <div className="w-12 h-12 bg-[#0c436c] rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-blue-900/10">
                                        <Phone size={24} />
                                    </div>

                                    <h4 className="text-[#0c436c] font-bold text-lg mb-1">
                                        Bize Ulaşın
                                    </h4>
                                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-4">
                                        İhtiyacınız mı var?
                                    </p>

                                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                        Projeniz için ücretsiz keşif ve teklif almak ister misiniz?
                                    </p>

                                    <a
                                        href="tel:+905320000000"
                                        className="block w-full bg-[#0c436c] text-white py-3.5 rounded-xl text-sm font-bold hover:bg-[#0a3656] transition-all hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        Hemen Arayın
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 mb-8">
                                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0c436c] mb-6 flex items-center gap-3">
                                        <service.icon className="text-[#3b9fc9] shrink-0" size={32} />
                                        {service.title} Hakkında
                                    </h2>
                                    <div className="whitespace-pre-line leading-relaxed text-base md:text-lg">
                                        {service.content}
                                    </div>
                                </div>

                                {/* Features Grid */}
                                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                                    <h3 className="text-lg font-bold text-[#0c436c] mb-6">
                                        Hizmet Özellikleri
                                    </h3>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200 shrink-0 shadow-sm">
                                                    <CheckCircle2 size={14} className="text-[#3b9fc9]" />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA Banner */}
                            <div className="bg-gradient-to-r from-[#0c436c] to-[#3b9fc9] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Projenizi Başlatmaya Hazır mısınız?</h3>
                                        <p className="text-white/90">Uzman ekibimiz size özel çözümler sunmak için bekliyor.</p>
                                    </div>
                                    <Link
                                        href="/iletisim"
                                        className="shrink-0 bg-white text-[#0c436c] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                    >
                                        Teklif Alın
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                                {/* Decorative */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Kurumsal", path: "/kurumsal" },
    { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { name: "Ürünlerimiz", path: "/urunlerimiz" },
     { name: "Belgeler", path: "/belgelerimiz" },
     { name: "Kataloglar", path: "/kataloglarimiz" },
    // { name: "Referanslar", path: "/referanslar" },
    { name: "İletişim", path: "/iletisim" },
];

const services = [
    { name: "Havuz Sistemleri", path: "/hizmetlerimiz/havuz-sistemleri" },
    { name: "Havuz Kimyasalları", path: "/hizmetlerimiz/havuz-kimyasallari" },
    { name: "Su Arıtma Sistemleri", path: "hizmetlerimiz/su-aritma-sistemleri" },
    { name: "Teknik Servis", path: "/hizmetlerimiz/teknik-servis" },
    { name: "Isıtma Ve Soğutma Sistemleri", path: "/hizmetlerimiz/isitma-sogutma" },
     { name: 'Otomasyon Sistemleri', path: "/hizmetlerimiz/otomasyon-sistemleri" },

];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0c436c] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Image
                            src="/pooloop-logo.png"
                            alt="Pooloop Logo"
                            width={180}
                            height={60}
                            className="h-14 w-auto brightness-0 invert"
                        />
                        <p className="text-white/80 leading-relaxed">
                            Havuz sistemleri ve kimyasalları alanında profesyonel çözümler sunuyoruz.
                            Kalite ve müşteri memnuniyeti bizim önceliğimizdir.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3b9fc9] transition-colors"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3b9fc9] transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3b9fc9] transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3b9fc9] transition-colors"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Hızlı Bağlantılar
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#3b9fc9]" />
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-white/80 hover:text-[#3b9fc9] transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b9fc9]" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Hizmetlerimiz
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#3b9fc9]" />
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.path}>
                                    <Link
                                        href={service.path}
                                        className="text-white/80 hover:text-[#3b9fc9] transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b9fc9]" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            İletişim
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#3b9fc9]" />
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+902121234567"
                                    className="flex items-start gap-3 text-white/80 hover:text-[#3b9fc9] transition-colors"
                                >
                                    <Phone size={20} className="mt-0.5 shrink-0" />
                                    <span>+90 212 123 45 67</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@pooloop.com.tr"
                                    className="flex items-start gap-3 text-white/80 hover:text-[#3b9fc9] transition-colors"
                                >
                                    <Mail size={20} className="mt-0.5 shrink-0" />
                                    <span>info@pooloop.com.tr</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <MapPin size={20} className="mt-0.5 shrink-0" />
                                <span>
                                    Örnek Mahallesi, Havuz Sokak No:1<br />
                                    Kadıköy / İstanbul
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 relative">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center md:text-left">
                    <p className="text-white/60 text-sm">
                        © 2026 Pooloop. Tüm hakları saklıdır.
                    </p>
                </div>
                <a
                    href="https://digivisor.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 items-center gap-1 pb-6 md:pb-0 text-white/60 text-sm hover:text-white transition-colors"
                >
                    <span>created by</span>
                    <Image src="/digivisor.svg" alt="Digivisor" width={50} height={24} className="h-4 w-auto opacity-80 mt-0.2hover:opacity-100 transition-opacity" />
                </a>
            </div>
        </footer>
    );
}

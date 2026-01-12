"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    const quickLinks = [
        { name: t('nav_home'), path: "/" },
        { name: t('nav_corporate'), path: "/kurumsal" },
        { name: t('nav_services'), path: "/hizmetlerimiz" },
        { name: t('nav_products'), path: "/urunlerimiz" },
        { name: t('nav_documents'), path: "/belgelerimiz" },
        { name: t('nav_references'), path: "/referanslar" },
        { name: t('nav_contact'), path: "/iletisim" },
    ];

    const services = [
        { name: t('service_fiber'), path: "/hizmetlerimiz/fiberglass-havuz-sistemleri" },
        { name: t('service_concrete'), path: "/hizmetlerimiz/betonarme-havuz-sistemleri" },
        { name: t('service_liner'), path: "/hizmetlerimiz/liner-havuz-sistemleri" },
        { name: t('service_pool_systems'), path: "/hizmetlerimiz/havuz-sistemleri" },
        { name: t('service_chemicals'), path: "/hizmetlerimiz/havuz-kimyasallari" },
        { name: t('service_treatment'), path: "/hizmetlerimiz/su-aritma-sistemleri" }, // Fixed path
        { name: t('service_tech'), path: "/hizmetlerimiz/teknik-servis" },
    ];

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
                            src="/logo-pooloop.png"
                            alt="Pooloop Logo"
                            width={180}
                            height={60}
                            className="h-14 w-auto brightness-0 invert"
                        />
                        <p className="text-white/80 leading-relaxed">
                            {t('footer_desc')}
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
                            {t('footer_quick_links')}
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
                            {t('footer_services')}
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
                            {t('footer_contact')}
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
                                    {t('footer_address')}<br />
                                    {t('footer_address_city')}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 relative">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center md:text-left">
                    <p className="text-white/60 text-sm">
                        {t('footer_rights')}
                    </p>
                </div>
                <a
                    href="https://digivisor.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 items-center gap-1 pb-6 md:pb-0 text-white/60 text-sm hover:text-white transition-colors"
                >
                    <span>{t('footer_created_by')}</span>
                    <Image src="/digivisor.svg" alt="Digivisor" width={50} height={24} className="h-4 w-auto opacity-80 mt-0.2hover:opacity-100 transition-opacity" />
                </a>
            </div>
        </footer>
    );
}

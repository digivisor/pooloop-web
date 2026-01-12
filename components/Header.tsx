"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, Truck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";



import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const flags = {
    TR: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" className="w-4 h-3">
            <rect width="1200" height="800" fill="#E30A17" />
            <circle cx="444" cy="400" r="240" fill="#ffffff" />
            <circle cx="489" cy="400" r="192" fill="#E30A17" />
            <path fill="#ffffff" d="M584.524 400l72.24-25.932-68.115-23.517 44.619-61.884 16.056 69.717 70.34-21.819-50.362 52.018 57.492 47.053-71.986 2.671-41.182 60.507z" />
        </svg>
    ),
    EN: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-4 h-3">
            <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z" />
            </clipPath>
            <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
            </clipPath>
            <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
            </g>
        </svg>
    )
};

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const navLinks = [
        { name: t('nav_home'), path: "/" },
        { name: t('nav_corporate'), path: "/kurumsal" },
        { name: t('nav_services'), path: "/hizmetlerimiz" },
        { name: t('nav_products'), path: "/urunlerimiz" },
        { name: t('nav_references'), path: "/referanslar" },
        { name: t('nav_documents'), path: "/belgelerimiz" },
        { name: t('nav_catalogs'), path: "/kataloglarimiz" },
        { name: t('nav_contact'), path: "/iletisim" },
    ];

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Top Bar - Hidden on Homepage */}
            {pathname !== '/' && (
                <div className="hidden lg:block bg-[#0c436c] text-white py-2">
                    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 flex justify-between items-center text-sm">
                        <div className="flex items-center gap-6">
                            <a href="tel:+902121234567" className="flex items-center gap-2 hover:text-[#3b9fc9] transition-colors">
                                <Phone size={14} />
                                <span>+90 212 123 45 67</span>
                            </a>
                            <a href="mailto:info@pooloop.com.tr" className="flex items-center gap-2 hover:text-[#3b9fc9] transition-colors">
                                <Mail size={14} />
                                <span>info@pooloop.com.tr</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white shadow-lg"
                    : "bg-white/95 backdrop-blur-sm"
                    }`}
            >
                <div className="max-w-[1920px] mx-auto px-6 lg:px-24">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center z-50">
                            <Image
                                src="/logo-pooloop.png"
                                alt="Pooloop Logo"
                                width={160}
                                height={50}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-4">
                            <nav className="flex items-center gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className="px-3 py-2 text-[#0c436c] font-medium hover:text-[#3b9fc9] transition-colors relative group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#3b9fc9] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                    </Link>
                                ))}
                            </nav>

                            {/* Divider */}
                            <div className="h-6 w-px bg-gray-300" />

                            {/* Language Selector Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    {flags[language]}
                                    <span className="text-[#0c436c] font-medium text-sm">{language}</span>
                                    <ChevronDown size={14} className={`text-gray-500 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isLangMenuOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={() => setIsLangMenuOpen(false)}
                                        />
                                        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20">
                                            <button
                                                onClick={() => {
                                                    setLanguage("TR");
                                                    setIsLangMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors group"
                                            >
                                                {flags.TR}
                                                <span className={`text-sm ${language === 'TR' ? 'text-[#0c436c] font-bold' : 'text-gray-600 group-hover:text-[#0c436c]'}`}>
                                                    Türkçe
                                                </span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setLanguage("EN");
                                                    setIsLangMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors group"
                                            >
                                                {flags.EN}
                                                <span className={`text-sm ${language === 'EN' ? 'text-[#0c436c] font-bold' : 'text-gray-600 group-hover:text-[#0c436c]'}`}>
                                                    English
                                                </span>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Button - Hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 text-[#0c436c]"
                            aria-label="Menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Sidebar (Right Drawer) */}
            <div
                className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header with Close Button */}
                <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-white">
                    <span className="text-lg font-bold text-[#0c436c]">{t('menu_title')}</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 -mr-2 text-gray-500 hover:text-[#0c436c] transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Mobile Nav Links - Changed nav to div */}
                <div className="flex-1 overflow-y-auto py-4 px-6 space-y-2 bg-white">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 px-2 text-[#0c436c] font-medium border-b border-gray-50 hover:bg-[#e8f4f8] hover:pl-4 transition-all rounded-lg"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Language Selector & Contact */}
                <div className="p-6 border-t border-gray-100 space-y-6 bg-white">
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setLanguage("TR")}
                            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all border ${language === "TR"
                                ? "bg-[#e8f4f8] border-[#0c436c] text-[#0c436c] font-bold"
                                : "border-gray-200 text-gray-600 hover:border-gray-300"
                                }`}
                        >
                            {flags.TR}
                            <span className="text-sm">Türkçe</span>
                        </button>
                        <button
                            onClick={() => setLanguage("EN")}
                            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all border ${language === "EN"
                                ? "bg-[#e8f4f8] border-[#0c436c] text-[#0c436c] font-bold"
                                : "border-gray-200 text-gray-600 hover:border-gray-300"
                                }`}
                        >
                            {flags.EN}
                            <span className="text-sm">English</span>
                        </button>
                    </div>

                    <div className="space-y-3 text-sm text-gray-500">
                        <a href="tel:+902121234567" className="flex items-center gap-3 hover:text-[#0c436c]">
                            <Phone size={16} />
                            <span>+90 212 123 45 67</span>
                        </a>
                        <a href="mailto:info@pooloop.com.tr" className="flex items-center gap-3 hover:text-[#0c436c]">
                            <Mail size={16} />
                            <span>info@pooloop.com.tr</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

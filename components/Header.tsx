"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, Truck } from "lucide-react";

const navLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Kurumsal", path: "/kurumsal" },
    { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { name: "Ürünlerimiz", path: "/urunlerimiz" },
    { name: "Referanslar", path: "/referanslar" },
    { name: "İletişim", path: "/iletisim" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar */}
            <div className="hidden lg:block bg-[#0c436c] text-white py-2">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
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
                    <div className="flex items-center gap-2">
                       
                        <span>Türkiye&apos;nin Her Yerine Hizmet</span>
                         <Truck size={16} className="text-[#]" />
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white shadow-lg"
                    : "bg-white/95 backdrop-blur-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/pooloop-logo.png"
                                alt="Pooloop Logo"
                                width={160}
                                height={50}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="px-4 py-2 text-[#0c436c] font-medium hover:text-[#3b9fc9] transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#3b9fc9] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                href="/iletisim"
                                className="bg-[#0c436c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a5a8a] transition-colors"
                            >
                                Teklif Alın
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-[#0c436c]"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
                        }`}
                >
                    <nav className="bg-white border-t px-6 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-3 px-4 text-[#0c436c] font-medium hover:bg-[#e8f4f8] rounded-lg transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t mt-4">
                            <Link
                                href="/iletisim"
                                className="block text-center bg-[#0c436c] text-white px-6 py-3 rounded-lg font-medium"
                            >
                                Teklif Alın
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

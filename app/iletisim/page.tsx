"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ChevronDown } from "lucide-react";

const subjectOptions = [
    "Havuz Yapımı",
    "Havuz Bakımı",
    "Teknik Servis",
    "Havuz Kimyasalları",
    "Fiyat Teklifi",
    "Diğer",
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectSubject = (subject: string) => {
        setFormData({ ...formData, subject });
        setIsDropdownOpen(false);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <Image
                    src="/banner-3.png"
                    alt="İletişim"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0c436c]/70" />

                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MessageSquare size={16} />
                            <span>7/24 Destek</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Bizimle
                            <span className="block text-[#3b9fc9]">İletişime Geçin</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                            Havuz projeniz için uzman ekibimizle görüşün.
                            Size en uygun çözümü sunmak için buradayız.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Contact Bar - Full Width */}
            <section className="bg-white shadow-xl border-b border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <a href="tel:+902121234567" className="flex items-center justify-center gap-4 p-6 md:p-8 group hover:bg-gray-50 transition-colors border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="w-14 h-14 bg-[#0c436c] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#3b9fc9] transition-colors">
                            <Phone size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Telefon</p>
                            <p className="font-semibold text-[#0c436c] group-hover:text-[#3b9fc9] transition-colors">+90 212 123 45 67</p>
                        </div>
                    </a>
                    <a href="mailto:info@pooloop.com.tr" className="flex items-center justify-center gap-4 p-6 md:p-8 group hover:bg-gray-50 transition-colors border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="w-14 h-14 bg-[#0c436c] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#3b9fc9] transition-colors">
                            <Mail size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">E-posta</p>
                            <p className="font-semibold text-[#0c436c] group-hover:text-[#3b9fc9] transition-colors">info@pooloop.com.tr</p>
                        </div>
                    </a>
                    <div className="flex items-center justify-center gap-4 p-6 md:p-8">
                        <div className="w-14 h-14 bg-[#3b9fc9] rounded-xl flex items-center justify-center shrink-0">
                            <Clock size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Çalışma Saatleri</p>
                            <p className="font-semibold text-[#0c436c]">Pzt-Cmt: 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Form */}
                        <div>
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                İletişim Formu
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                                Bize Ulaşın
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Formu doldurun, size en kısa sürede dönüş yapalım.
                            </p>

                            {isSubmitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 size={32} className="text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0c436c] mb-2">Mesajınız Alındı!</h3>
                                    <p className="text-gray-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b9fc9] focus:border-transparent outline-none transition-all"
                                                placeholder="Adınız Soyadınız"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b9fc9] focus:border-transparent outline-none transition-all"
                                                placeholder="ornek@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b9fc9] focus:border-transparent outline-none transition-all"
                                                placeholder="0532 123 45 67"
                                            />
                                        </div>
                                        {/* Custom Dropdown */}
                                        <div className="relative" ref={dropdownRef}>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Konu *</label>
                                            <button
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b9fc9] focus:border-transparent outline-none transition-all bg-white text-left flex items-center justify-between cursor-pointer"
                                            >
                                                <span className={formData.subject ? "text-gray-900" : "text-gray-400"}>
                                                    {formData.subject || "Konu Seçiniz"}
                                                </span>
                                                <ChevronDown size={20} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isDropdownOpen && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                                                    {subjectOptions.map((option) => (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => selectSubject(option)}
                                                            className={`w-full px-4 py-3 text-left hover:bg-[#e8f4f8] transition-colors cursor-pointer ${formData.subject === option ? 'bg-[#e8f4f8] text-[#0c436c] font-medium' : 'text-gray-700'
                                                                }`}
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b9fc9] focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Mesajınızı buraya yazın..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-3 bg-[#0c436c] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#1a5a8a] transition-all hover:shadow-lg cursor-pointer"
                                    >
                                        <Send size={20} />
                                        <span>Mesaj Gönder</span>
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map & Address */}
                        <div>
                            <span className="inline-block text-[#3b9fc9] font-semibold text-sm tracking-wider uppercase mb-3">
                                Konum
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0c436c] mb-4">
                                Bizi Ziyaret Edin
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Showroom ve ofisimizi ziyaret edebilirsiniz.
                            </p>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327647498!2d28.871754442894988!3d41.005495073581736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9f4fb7f9e45%3A0xa5b6f93d4f0c47e0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1704419437285!5m2!1sen!2s"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Address Card */}
                            <div className="bg-[#0c436c] rounded-2xl p-6 text-white">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Adres</h3>
                                        <p className="text-white/80 leading-relaxed">
                                            Örnek Mahallesi, Havuz Caddesi No: 123<br />
                                            Kartal / İstanbul, Türkiye
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

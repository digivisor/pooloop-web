"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'TR' | 'EN';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
    TR: {
        // Header
        nav_home: "Anasayfa",
        nav_corporate: "Kurumsal",
        nav_services: "Hizmetlerimiz",
        nav_products: "Ürünlerimiz",
        nav_references: "Referanslar",
        nav_documents: "Belgelerimiz",
        nav_catalogs: "Kataloglar",
        nav_contact: "İletişim",
        menu_title: "Menü",

        // Hero
        hero_fiber_subtitle: "HIZLI KURULUM",
        hero_fiber_title: "Fiberglass Sistemler",
        hero_concrete_subtitle: "ÖZEL TASARIM",
        hero_concrete_title: "Betonarme Havuzlar",
        hero_liner_subtitle: "EKONOMİK & ESTETİK",
        hero_liner_title: "Liner Havuz Sistemleri",
        hero_btn_detail: "Detaylı Bilgi",
        hero_fiber_desc: "Hızlı ve pratik kurulum, sızdırmaz yekpare gövde ve uzun ömürlü kullanım.",
        hero_concrete_desc: "Hayalinizdeki formu gerçeğe dönüştüren, tamamen size özel ve sınırsız tasarım özgürlüğü.",
        hero_liner_desc: "Ekonomik maliyet, hızlı yenileme ve geniş desen seçenekleriyle estetik çözümler.",

        // Before/After
        before_after_subtitle: "Dönüşümü Görün",
        before_after_title: "Hayalinizdeki Havuza Dönüşüm",
        before_after_desc: "İnşaat alanından, keyif dolu bir yaşam alanına uzanan profesyonel süreç.",
        before_label: "İnşaat Aşaması",
        after_label: "Bitmiş Proje",

        // About
        about_title_prefix: "Havuz Çözümlerinde",
        about_title_suffix: "Güvenilir Partneriniz",
        about_desc: "20 yılı aşkın tecrübemiz, uzman kadromuz ve kaliteli ürünlerimizle havuz sektöründe öncü olmaya devam ediyoruz.",
        about_btn: "Hakkımızda",

        // Projects
        projects_subtitle: "Projelerimiz",
        projects_title: "Son Çalışmalarımız",
        projects_desc: "Tamamladığımız projelerden örnekler",

        // CTA
        cta_title: "Havuz Projeniz İçin Hazır mısınız?",
        cta_desc: "Uzman ekibimizle iletişime geçin, hayalinizdeki havuz için ücretsiz keşif ve teklif alın.",
        cta_btn_quote: "Ücretsiz Teklif Alın",

        // Brands & Instagram
        brands_title: "Güçlü Markalarla İş Birliği",
        brands_subtitle: "Çözüm Ortaklarımız",
        insta_desc: "Instagram'da bizi takip edin ve Pooloop'un seçkin projelerini keşfedin. En yeni havuz tasarımlarımızı, bakım ipuçlarını ve mutlu müşterilerimizin deneyimlerini paylaşıyoruz.",
        insta_btn: "Takip Et",


        // Features
        features_title: "Neden Biz?",
        features_desc: "Yılların deneyimi ve uzman kadromuzla yanınızdayız.",
        feature_1: "Profesyonel ve deneyimli ekip",
        feature_2: "Kaliteli ve sertifikalı ürünler",
        feature_3: "7/24 teknik destek",
        feature_4: "Uygun fiyat garantisi",
        feature_5: "Hızlı teslimat ve kurulum",
        feature_6: "Satış sonrası destek",

        // Sections
        services_subtitle: "HİZMETLERİMİZ",
        services_title: "Profesyonel Havuz Çözümleri",
        services_desc: "20 yılı aşkın tecrübemizle havuz yapımından bakıma kadar tüm ihtiyaçlarınıza çözüm sunuyoruz.",
        testimonials_subtitle: "REFERANSLARIMIZ",
        testimonials_title: "Mutlu Müşterilerimiz",
        testimonials_desc: "Yıllar içinde yüzlerce projeye imza attık. İşte bazı referanslarımız.",

        // Footer
        footer_created_by: "created by",
        footer_desc: "Havuz sistemleri ve kimyasalları alanında profesyonel çözümler sunuyoruz. Kalite ve müşteri memnuniyeti bizim önceliğimizdir.",
        footer_quick_links: "Hızlı Bağlantılar",
        footer_services: "Hizmetlerimiz",
        footer_contact: "İletişim",
        footer_address: "Örnek Mahallesi, Havuz Sokak No:1",
        footer_address_city: "Kadıköy / İstanbul",
        footer_rights: "© 2026 Pooloop. Tüm hakları saklıdır.",

        // Service Names
        service_fiber: "Fiberglass Havuz Sistemleri",
        service_concrete: "Betonarme Havuz Sistemleri",
        service_liner: "Liner Havuz Sistemleri",
        service_pool_systems: "Havuz Sistemleri",
        service_chemicals: "Havuz Kimyasalları",
        service_treatment: "Su Arıtma Sistemleri",
        service_tech: "Teknik Servis",

        // Service Cards
        service_title_fiberglass_havuz_sistemleri: "Fiberglass Havuz Sistemleri",
        service_shortDesc_fiberglass_havuz_sistemleri: "Hızlı kurulum, uzun ömür ve düşük bakım avantajı",
        service_title_betonarme_havuz_sistemleri: "Betonarme Havuz Sistemleri",
        service_shortDesc_betonarme_havuz_sistemleri: "Özel ölçü ve sınırsız tasarım imkanı",
        service_title_liner_havuz_sistemleri: "Liner & Modüler Sistemler",
        service_shortDesc_liner_havuz_sistemleri: "Ekonomik, estetik ve %100 sızdırmazlık",
        service_title_havuz_sistemleri: "Havuz Sistemleri",
        service_shortDesc_havuz_sistemleri: "Özel tasarım havuzlar, olimpik havuzlar ve daha fazlası",
        service_title_su_aritma_sistemleri: "Su Arıtma Sistemleri",
        service_shortDesc_su_aritma_sistemleri: "Endüstriyel ve evsel su arıtma çözümleri",
        service_title_teknik_servis: "Teknik Servis",
        service_shortDesc_teknik_servis: "Bakım, onarım ve periyodik kontrol hizmetleri",
        service_title_havuz_kimyasallari: "Havuz Kimyasalları",
        service_shortDesc_havuz_kimyasallari: "Yüksek kaliteli kimyasallar ve dozaj sistemleri",
        service_title_isitma_sogutma: "Isıtma ve Soğutma Sistemleri",
        service_shortDesc_isitma_sogutma: "Havuzlar ve tesisler için ısıtma/soğutma çözümleri",
        service_title_otomasyon_sistemleri: "Otomasyon Sistemleri",
        service_shortDesc_otomasyon_sistemleri: "Akıllı otomasyon ve uzaktan kontrol çözümleri"
    },
    EN: {
        // Header
        nav_home: "Home",
        nav_corporate: "Corporate",
        nav_services: "Services",
        nav_products: "Products",
        nav_references: "References",
        nav_documents: "Certificates",
        nav_catalogs: "Catalogs",
        nav_contact: "Contact",
        menu_title: "Menu",

        // Hero
        hero_fiber_subtitle: "FAST INSTALLATION",
        hero_fiber_title: "Fiberglass Systems",
        hero_concrete_subtitle: "CUSTOM DESIGN",
        hero_concrete_title: "Concrete Pools",
        hero_liner_subtitle: "ECONOMIC & AESTHETIC",
        hero_liner_title: "Liner Pool Systems",
        hero_btn_detail: "Detailed Info",
        hero_fiber_desc: "Fast and practical installation, leak-proof monolithic body and long-lasting use.",
        hero_concrete_desc: "Turning the form of your dreams into reality, completely custom and unlimited design freedom.",
        hero_liner_desc: "Economic cost, fast renovation and aesthetic solutions with wide pattern options.",

        // Before/After
        before_after_subtitle: "See the Transformation",
        before_after_title: "Transformation into Your Dream Pool",
        before_after_desc: "A professional process stretching from the construction site to a joyful living space.",
        before_label: "Construction Stage",
        after_label: "Finished Project",

        // About
        about_title_prefix: "Your Reliable Partner",
        about_title_suffix: "in Pool Solutions",
        about_desc: "We continue to be a pioneer in the pool sector with over 20 years of experience, expert staff and quality products.",
        about_btn: "About Us",

        // Projects
        projects_subtitle: "Our Projects",
        projects_title: "Our Recent Works",
        projects_desc: "Examples from our completed projects",

        // CTA
        cta_title: "Are You Ready for Your Pool Project?",
        cta_desc: "Contact our expert team, get a free exploration and offer for your dream pool.",
        cta_btn_quote: "Get a Free Quote",

        // Brands & Instagram
        brands_title: "Collaboration with Strong Brands",
        brands_subtitle: "Our Solution Partners",
        insta_desc: "Follow us on Instagram and discover Pooloop's exclusive projects. We share our latest pool designs, maintenance tips, and experiences of our happy customers.",
        insta_btn: "Follow",


        // Features
        features_title: "Why Choose Us?",
        features_desc: "We are with you with years of experience and expert staff.",
        feature_1: "Professional and experienced team",
        feature_2: "Quality and certified products",
        feature_3: "24/7 technical support",
        feature_4: "Affordable price guarantee",
        feature_5: "Fast delivery and installation",
        feature_6: "After-sales support",

        // Sections
        services_subtitle: "OUR SERVICES",
        services_title: "Professional Pool Solutions",
        services_desc: "With over 20 years of experience, we offer solutions for all your needs from pool construction to maintenance.",
        testimonials_subtitle: "OUR REFERENCES",
        testimonials_title: "Happy Customers",
        testimonials_desc: "We have signed hundreds of projects over the years. Here are some of our references.",

        // Footer
        footer_created_by: "created by",
        footer_desc: "We offer professional solutions in the field of pool systems and chemicals. Quality and customer satisfaction are our priority.",
        footer_quick_links: "Quick Links",
        footer_services: "Our Services",
        footer_contact: "Contact",
        footer_address: "Example District, Pool Street No:1",
        footer_address_city: "Kadikoy / Istanbul",
        footer_rights: "© 2026 Pooloop. All rights reserved.",

        // Service Names
        service_fiber: "Fiberglass Pool Systems",
        service_concrete: "Concrete Pool Systems",
        service_liner: "Liner Pool Systems",
        service_pool_systems: "Pool Systems",
        service_chemicals: "Pool Chemicals",
        service_treatment: "Water Treatment Systems",
        service_tech: "Technical Service",

        // Service Cards
        service_title_fiberglass_havuz_sistemleri: "Fiberglass Pool Systems",
        service_shortDesc_fiberglass_havuz_sistemleri: "Quick installation, long life and low maintenance advantage",
        service_title_betonarme_havuz_sistemleri: "Concrete Pool Systems",
        service_shortDesc_betonarme_havuz_sistemleri: "Custom size and unlimited design possibilities",
        service_title_liner_havuz_sistemleri: "Liner & Modular Systems",
        service_shortDesc_liner_havuz_sistemleri: "Economic, aesthetic and 100% leak-proof",
        service_title_havuz_sistemleri: "Pool Systems",
        service_shortDesc_havuz_sistemleri: "Custom design pools, olympic pools and more",
        service_title_su_aritma_sistemleri: "Water Treatment Systems",
        service_shortDesc_su_aritma_sistemleri: "Industrial and domestic water treatment solutions",
        service_title_teknik_servis: "Technical Service",
        service_shortDesc_teknik_servis: "Maintenance, repair and periodic control services",
        service_title_havuz_kimyasallari: "Pool Chemicals",
        service_shortDesc_havuz_kimyasallari: "High quality chemicals and dosage systems",
        service_title_isitma_sogutma: "Heating and Cooling Systems",
        service_shortDesc_isitma_sogutma: "Heating/cooling solutions for pools and facilities",
        service_title_otomasyon_sistemleri: "Automation Systems",
        service_shortDesc_otomasyon_sistemleri: "Smart automation and remote control solutions"
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('TR');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

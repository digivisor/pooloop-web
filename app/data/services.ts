import {
    Droplets,
    FlaskConical,
    Waves,
    Wrench,
    Sparkles,
    ShieldCheck,
} from "lucide-react";

export const services = [
    {
        id: "havuz-sistemleri",
        icon: Droplets,
        title: "Havuz Sistemleri",
        shortDesc: "Özel tasarım havuzlar, olimpik havuzlar ve daha fazlası",
        description: "Özel tasarım havuzlar, olimpik havuzlar, terapi havuzları ve daha fazlası için komple çözümler sunuyoruz.",
        content: `Havuz sistemleri konusunda uzman ekibimizle, hayalinizdeki havuzu gerçeğe dönüştürüyoruz. Projelendirmeden anahtar teslimine kadar tüm süreçlerde yanınızdayız.
      
      Sunduğumuz Başlıca Hizmetler:
      - Özel Tasarım Villa Havuzları
      - Olimpik ve Yarı Olimpik Yüzme Havuzları
      - Termal ve Terapi Havuzları
      - Süs ve Peyzaj Havuzları
      - Çocuk ve Eğlence Havuzları
      
      Kullandığımız son teknoloji filtrasyon ve dezenfeksiyon sistemleri ile havuzunuzun her zaman hijyenik ve berrak kalmasını sağlıyoruz. Ayrıca enerji tasarruflu pompalar ve ısıtma sistemleri ile işletme maliyetlerinizi minimize ediyoruz.`,
        image: "/havuzsistemleri-1.png",
        features: [
            "Özel tasarım havuzlar",
            "Olimpik havuzlar",
            "Terapi havuzları",
            "Süs havuzları",
            "Çocuk havuzları",
            "Jakuzi ve spa sistemleri",
        ],
        link: "/hizmetlerimiz/havuz-sistemleri",
    },
    {
        id: "su-aritma-sistemleri",
        icon: Waves,
        title: "Su Arıtma Sistemleri",
        shortDesc: "Endüstriyel ve evsel su arıtma çözümleri",
        description: "Endüstriyel ve evsel kullanım için su arıtma sistemleri, filtrasyon ve dezenfeksiyon çözümleri.",
        content: `Suyun kalitesi, sağlık ve endüstriyel süreçler için kritik öneme sahiptir. İhtiyacınıza uygun en verimli su arıtma sistemlerini tasarlıyor ve uyguluyoruz.
      
      Çözümlerimiz:
      - Endüstriyel Ters Ozmos (Reverse Osmosis) Sistemleri
      - Evsel Su Arıtma Cihazları
      - Su Yumuşatma Sistemleri
      - Aktif Karbon Filtrasyon
      - UV ve Ozon Dezenfeksiyon Sistemleri
      
      Sularınızın analizini yaparak en uygun arıtma yöntemini belirliyor, kurulum sonrası periyodik bakım hizmetlerimizle sistemin verimliliğini garanti altına alıyoruz.`,
        image: "/suaritma.png",
        features: [
            "Endüstriyel su arıtma sistemleri",
            "Evsel su arıtma sistemleri",
            "Filtrasyon sistemleri",
            "Dezenfeksiyon sistemleri",
            "Ters ozmos sistemleri",
            "Yumuşatma sistemleri",
        ],
        link: "/hizmetlerimiz/su-aritma-sistemleri",
    },
    {
        id: "teknik-servis",
        icon: Wrench,
        title: "Teknik Servis",
        shortDesc: "Bakım, onarım ve periyodik kontrol hizmetleri",
        description: "Havuz ve su arıtma sistemleri için bakım, onarım ve periyodik kontrol hizmetleri.",
        content: `Sistemlerinizin uzun ömürlü ve verimli çalışması için düzenli bakım şarttır. Teknik servis ekibimiz, 7/24 hizmet anlayışıyla arızalara anında müdahale etmektedir.
      
      Hizmet Kapsamımız:
      - Periyodik Havuz Bakımı (Haftalık/Aylık)
      - Pompa ve Motor Tamiri/Yenileme
      - Filtre Kumu Değişimi
      - Kaçak Tespiti ve Onarımı
      - Elektrik Panosu ve Otomasyon Arızaları
      
      Uzman kadromuz, sorunu yerinde tespit ederek en hızlı ve kalıcı çözümü sunar. Orijinal yedek parça garantisi ile sistemlerinizi güvence altına alıyoruz.`,
        image: "/teknik.png",
        features: [
            "Periyodik bakım hizmetleri",
            "Arıza tespit ve onarım",
            "Yedek parça temini",
            "Sistem yenileme",
            "7/24 teknik destek",
            "Yerinde servis hizmeti",
        ],
        link: "/hizmetlerimiz/teknik-servis",
    },
    {
        id: "havuz-kimyasallari",
        icon: FlaskConical,
        title: "Havuz Kimyasalları",
        shortDesc: "Yüksek kaliteli kimyasallar ve dozaj sistemleri",
        description: "Havuz ve proses suyu şartlandırma için yüksek kaliteli kimyasallar ve dozaj sistemleri.",
        content: `Havuz suyunun kimyasal dengesi, kullanıcı sağlığı için en önemli faktördür. Sağlık Bakanlığı onaylı ve yüksek kaliteli havuz kimyasallarımızla hizmetinizdeyiz.
      
      Ürün Portföyümüz:
      - Sıvı ve Granül Klor
      - pH Düşürücü ve Yükseltici
      - Yosun Önleyiciler
      - Parlatıcı ve Topaklayıcılar
      - Kış Bakım Kimyasalları
      
      Ayrıca otomatik dozajlama sistemleri kurulumu yaparak, kimyasal kullanımını optimize ediyor ve insan hatasını ortadan kaldırıyoruz.`,
        image: "/kimyasal.jpg",
        features: [
            "Klor ürünleri",
            "pH düzenleyiciler",
            "Yosun önleyiciler",
            "Flokülantlar",
            "Temizlik kimyasalları",
            "Dozaj sistemleri",
        ],
        link: "/hizmetlerimiz/havuz-kimyasallari",
    },
    {
        id: "isitma-sogutma",
        icon: Sparkles,
        title: "Isıtma ve Soğutma Sistemleri",
        shortDesc: "Havuzlar ve tesisler için ısıtma/soğutma çözümleri",
        description: "Havuzlar ve endüstriyel tesisler için ısıtma ve soğutma çözümleri.",
        content: `Havuz keyfinizi dört mevsime yaymak için enerji verimli ısıtma ve soğutma çözümleri sunuyoruz.
      
      Hizmetlerimiz:
      - Havuz Isı Pompaları
      - Elektrikli Isıtıcılar
      - Plakalı Eşanjör Sistemleri
      - Nem Alma Cihazları (Kapalı Havuzlar İçin)
      - Soğutma Grupları (Chiller)
      
      Çevreci ve düşük enerji tüketimli sistemlerimizle hem doğayı koruyor hem de işletme maliyetlerinizi düşürüyoruz.`,
        image: "/isitma.png",
        features: [
            "Havuz ısıtma sistemleri",
            "Isı pompaları",
            "Güneş enerjisi sistemleri",
            "Kazan sistemleri",
            "Soğutma sistemleri",
            "Enerji tasarruflu çözümler",
        ],
        link: "/hizmetlerimiz/isitma-sogutma",
    },
    {
        id: "otomasyon-sistemleri",
        icon: ShieldCheck,
        title: "Otomasyon Sistemleri",
        shortDesc: "Akıllı otomasyon ve uzaktan kontrol çözümleri",
        description: "Havuz ve su arıtma sistemleri için akıllı otomasyon çözümleri.",
        content: `Teknolojiyi havuz ve su sistemlerinize entegre ediyoruz. Akıllı otomasyon çözümlerimizle sistemlerinizi uzaktan izleyebilir ve kontrol edebilirsiniz.
      
      Teknolojilerimiz:
      - Uzaktan İzleme ve Kontrol (Mobil Uygulama)
      - Otomatik Geri Yıkama Sistemleri
      - Akıllı Dozajlama Üniteleri
      - Aydınlatma ve Su Efekt Kontrolü
      - Arıza Bildirim Sistemleri
      
      Otomasyon sistemleri sayesinde insan müdahalesine gerek kalmadan su kalitesini standartlarda tutabilir, enerji ve kimyasal tasarrufu sağlayabilirsiniz.`,
        image: "/otomasyon.png",
        features: [
            "Havuz otomasyon sistemleri",
            "Uzaktan kontrol sistemleri",
            "Akıllı dozaj sistemleri",
            "Enerji yönetim sistemleri",
            "Mobil uygulama kontrollü sistemler",
            "Entegre otomasyon çözümleri",
        ],
        link: "/hizmetlerimiz/otomasyon-sistemleri",
    },
];

"use client";

import Image from "next/image";

// Markalar klasöründeki tüm logolar
const brands = [
    "alp.jpg", "amara.jpg", "anita.jpg", "antakya.jpg", "aq.jpg",
    "armsr.jpg", "asat.jpg", "asia.jpg", "asmin.jpg", "aspen.jpg",
    "assist.jpg", "atso.jpg", "avangart.jpg", "basaran.jpg", "bel.jpg",
    "bergaoa.jpg", "concorde.jpg", "crstl.jpg", "demak.jpg", "denizli.jpg",
    "dogan.png", "elege.jpg", "falcon.jpg", "finike.jpg", "funsun.jpg",
    "goynuk.jpg", "horus.jpg", "jiva.jpg", "kepez.jpg", "kgm.jpg",
    "koca.jpg", "makyol.jpg", "maviler.jpg", "mega.jpg", "muratpasa.jpg",
    "nazar.jpg", "ogretmen.jpg", "olbia.jpg", "palmet-resort-kiris.jpg",
    "palmetGroup.jpg", "pasha.jpg", "pelos.jpg", "pine.jpg", "port.jpg",
    "porto.jpg", "prizma.jpg", "puding.jpg", "qee.jpg", "rock.jpg",
    "sali.jpg", "saturn.jpg", "sea.jpg", "set.jpg", "sumel.jpg",
    "suncity.jpg", "tefenni.jpg", "tt.jpg", "tufekci.jpg", "tuvana.jpg",
    "urartu.jpg", "viking.jpg", "yp-insaat.jpg"
];

export default function BrandsSlider() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0c436c] mb-2">
                        Güçlü Markalarla İş Birliği
                    </h2>
                    <p className="text-[#3b9fc9] font-medium">
                        Çözüm Ortaklarımız
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative overflow-hidden">
                    <div className="brands-marquee">
                        <div className="brands-track">
                            {/* First set of logos */}
                            {brands.map((brand, i) => (
                                <div
                                    key={`first-${i}`}
                                    className="w-32 h-20 bg-white border border-gray-100 rounded-lg flex items-center justify-center mx-3 shrink-0 hover:border-[#3b9fc9] hover:shadow-md transition-all p-2"
                                >
                                    <Image
                                        src={`/markalar/${brand}`}
                                        alt={brand.replace(/\.(jpg|png)$/, '')}
                                        width={100}
                                        height={60}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {brands.map((brand, i) => (
                                <div
                                    key={`second-${i}`}
                                    className="w-32 h-20 bg-white border border-gray-100 rounded-lg flex items-center justify-center mx-3 shrink-0 hover:border-[#3b9fc9] hover:shadow-md transition-all p-2"
                                >
                                    <Image
                                        src={`/markalar/${brand}`}
                                        alt={brand.replace(/\.(jpg|png)$/, '')}
                                        width={100}
                                        height={60}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Much slower animation - 120 seconds */}
            <style jsx>{`
        .brands-marquee {
          overflow: hidden;
          width: 100%;
        }
        .brands-track {
          display: flex;
          animation: brands-scroll 120s linear infinite;
          width: max-content;
        }
        .brands-track:hover {
          animation-play-state: paused;
        }
        @keyframes brands-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    );
}

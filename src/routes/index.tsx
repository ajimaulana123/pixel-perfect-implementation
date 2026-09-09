import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  GraduationCap,
  Home,
  Leaf,
  Menu,
  Settings,
  UsersRound,
  Wifi,
} from "lucide-react";

import mosqueHero from "@/assets/annuur-mosque-hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yayasan Annuur Sragen" },
      {
        name: "description",
        content: "Yayasan Annuur Sragen berbagi ilmu, dakwah, dan manfaat untuk umat.",
      },
      { property: "og:title", content: "Yayasan Annuur Sragen" },
      {
        property: "og:description",
        content: "Berbagi ilmu, menebar manfaat bersama Yayasan Annuur Sragen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const values = [
  { icon: BookOpen, line1: "Pendidikan", line2: "Berkualitas" },
  { icon: UsersRound, line1: "Dakwah", line2: "Berkelanjutan" },
  { icon: Leaf, line1: "Manfaat", line2: "Untuk Umat" },
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span className="brand-star">✦</span>
      <span className="brand-dome">☾</span>
      <span className="brand-book">⌄</span>
    </div>
  );
}

function ServiceCard({
  tone,
  icon: Icon,
  title,
  description,
}: {
  tone: "green" | "blue";
  icon: typeof BookOpenText;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <article className={`service-card service-card-${tone}`}>
      <div className="service-corner" aria-hidden="true" />
      <div className="service-icon"><Icon strokeWidth={1.9} /></div>
      <div className="service-divider" />
      <div className="min-w-0 flex-1">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Button variant={tone === "green" ? "serviceGreen" : "serviceBlue"} size="round" aria-label={`Buka ${typeof title === "string" ? title : "layanan"}`}>
        <ArrowRight />
      </Button>
    </article>
  );
}

function Index() {
  return (
    <main className="annuur-page">
      <header className="site-header">
        <a href="#beranda" className="brand" aria-label="Yayasan Annuur Sragen">
          <BrandMark />
          <span className="brand-copy">
            <strong>YAYASAN ANNUUR</strong>
            <small>SRAGEN</small>
          </span>
        </a>

        <nav aria-label="Navigasi utama">
          <a href="#beranda" className="active"><Home /> Beranda</a>
          <span />
          <a href="#layanan">Ilmu</a><b>•</b>
          <a href="#nilai">Dakwah</a><b>•</b>
          <a href="#nilai">Manfaat</a>
          <span />
          <Button variant="ghost" size="icon" aria-label="Pengaturan"><Settings /></Button>
        </nav>
        <Button variant="ghost" size="icon" className="mobile-menu" aria-label="Buka menu"><Menu /></Button>
      </header>

      <section id="beranda" className="welcome-section">
        <img src={mosqueHero} width={1536} height={1024} alt="Masjid dengan Al-Qur'an di atas rehal" className="hero-image" />
        <div className="hero-fade" aria-hidden="true" />
        <div className="welcome-copy">
          <p className="arabic" lang="ar" dir="rtl">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ</p>
          <p className="greeting">Assalamualaikum</p>
          <h1>Selamat Datang</h1>
          <p className="foundation">di <strong>Yayasan Annuur Sragen</strong></p>
          <p className="intro">Semoga setiap langkah Anda di sini membawa<br className="desktop-break" /> manfaat dan keberkahan.</p>
          <div className="ornament" aria-hidden="true"><i /><span>✿</span><i /></div>
        </div>

        <section id="layanan" className="services" aria-label="Layanan utama">
          <ServiceCard tone="green" icon={BookOpenText} title={<>Elfan Bookless<br />Library</>} description="Akses koleksi buku digital secara mudah dan gratis." />
          <ServiceCard tone="blue" icon={Wifi} title={<>Akses Free<br />Internet</>} description="Nikmati akses internet gratis untuk kebutuhan Anda." />
        </section>

        <section id="nilai" className="values" aria-label="Nilai Yayasan Annuur">
          {values.map(({ icon: Icon, line1, line2 }, index) => (
            <div className="value-wrap" key={line1}>
              {index > 0 && <i aria-hidden="true" />}
              <div className="value"><Icon /><span>{line1}<br />{line2}</span></div>
            </div>
          ))}
        </section>
      </section>

      <footer className="wave-footer">
        <svg viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
          <path className="wave-back" d="M0 42C230 18 305 81 560 58C806 36 895 79 1120 49C1270 29 1372 29 1440 40V170H0Z" />
          <path className="wave-front" d="M0 105C198 70 329 160 557 132C782 105 956 178 1174 118C1283 88 1371 77 1440 86V170H0Z" />
        </svg>
        <div className="motto"><i /> <span>“Berbagi Ilmu, Menebar Manfaat”<small>YAYASAN ANNUUR SRAGEN</small></span> <i /></div>
      </footer>
    </main>
  );
}
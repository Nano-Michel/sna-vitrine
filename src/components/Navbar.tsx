import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "accueil",
      "a-propos",
      "services",
      "partenariats",
      "infos",
      "recrutement",
      "contact",
    ];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { root: null, rootMargin: "-50% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar navbar-light navbar-expand-lg fixed-top ${scrolled ? "navbar-glass navbar-scrolled shadow-sm" : "navbar-transparent"}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#accueil">
          <span className="text-success">{t.org.short}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Basculer la navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item"><a className={`nav-link${active==="accueil"?" active":""}`} href="#accueil">{t.nav.home}</a></li>
            <li className="nav-item"><a className={`nav-link${active==="a-propos"?" active":""}`} href="#a-propos">{t.nav.about}</a></li>
            <li className="nav-item"><a className={`nav-link${active==="services"?" active":""}`} href="#services">{t.nav.services}</a></li>
            <li className="nav-item"><a className={`nav-link${active==="partenariats"?" active":""}`} href="#partenariats">{t.nav.partnerships}</a></li>
            <li className="nav-item"><a className={`nav-link${active==="infos"?" active":""}`} href="#infos">{t.nav.info}</a></li>
            <li className="nav-item"><a className={`nav-link${active==="recrutement"?" active":""}`} href="#recrutement">{t.nav.recruitment}</a></li>
            <li className="nav-item"><a className={`nav-link${active==="contact"?" active":""}`} href="#contact">{t.nav.contact}</a></li>
          </ul>
          <div className="d-flex align-items-center gap-2 ms-lg-3">
            <button className={`btn btn-sm ${lang==='fr' ? 'btn-success' : 'btn-outline-success'}`} onClick={()=>setLang('fr')}>FR</button>
            <button className={`btn btn-sm ${lang==='en' ? 'btn-success' : 'btn-outline-success'}`} onClick={()=>setLang('en')}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

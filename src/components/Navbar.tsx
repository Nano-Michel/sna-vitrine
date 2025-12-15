import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");
  
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observer pour détecter la section active (uniquement sur la page d'accueil)
  useEffect(() => {
    if (!isHomePage) return;
    
    const ids = ["accueil", "a-propos", "services", "partenariats", "recrutement", "contact"];
    const sections = ids.map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    
    if (!sections.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { root: null, rootMargin: "-50% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="/logo.png" alt={t.org.short} className="navbar-logo" />
          <span className="brand-text fw-bold">{t.org.short}</span>
        </Link>
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
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1">
            {isHomePage ? (
              <>
                <li className="nav-item">
                  <a className={`nav-link${active === "accueil" ? " active" : ""}`} href="#accueil">{t.nav.home}</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link${active === "a-propos" ? " active" : ""}`} href="#a-propos">{t.nav.about}</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link${active === "services" ? " active" : ""}`} href="#services">{t.nav.services}</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link${active === "partenariats" ? " active" : ""}`} href="#partenariats">{t.nav.partnerships}</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link${active === "recrutement" ? " active" : ""}`} href="#recrutement">{t.nav.recruitment}</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link${active === "contact" ? " active" : ""}`} href="#contact">{t.nav.contact}</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/seed-bank">{t.nav.seedBank}</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">{t.nav.home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#a-propos">{t.nav.about}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#services">{t.nav.services}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#partenariats">{t.nav.partnerships}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#recrutement">{t.nav.recruitment}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#contact">{t.nav.contact}</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link${location.pathname === "/seed-bank" ? " active" : ""}`} to="/seed-bank">{t.nav.seedBank}</Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex align-items-center gap-2 ms-lg-3">
            <button 
              className={`btn btn-sm lang-btn ${lang === 'fr' ? 'active' : ''}`} 
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button 
              className={`btn btn-sm lang-btn ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

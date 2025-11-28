import { useI18n } from "../i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light py-4 mt-5 footer-accent">
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-md">
            <div className="fw-semibold">{t.org.name}</div>
            <div className="small">© {year} • Tous droits réservés</div>
          </div>
          <div className="col-md text-md-end small">
            <a className="text-decoration-none text-light me-3" href={`mailto:${t.org.email}`}><i className="bi bi-envelope me-1"></i>{t.org.email}</a>
            <span className="me-3"><i className="bi bi-telephone me-1"></i>{t.org.phone}</span>
            <a className="text-decoration-none text-light" href="#accueil">Haut de page</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

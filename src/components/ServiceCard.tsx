type Props = { title: string; description: string; icon?: string; delay?: number; index?: number };

export default function ServiceCard({ title, description, icon, delay = 0, index }: Props) {
  const num = typeof index === 'number' ? String(index + 1).padStart(2, '0') : undefined;
  return (
    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card h-100 shadow-sm card-hover">
        <div className="card-body p-4">
          <div className="service-item">
            <div className="flex-shrink-0">
              {num ? (
                <span className="icon-circle-soft"><span className="number">{num}</span></span>
              ) : (
                icon ? <div className="icon-badge"><i className={`bi ${icon}`}></i></div> : null
              )}
            </div>
            <div>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

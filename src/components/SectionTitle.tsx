type Props = { title: string; subtitle?: string };

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="fw-bold">{title}</h2>
      {subtitle && <p className="text-secondary mx-auto" style={{ maxWidth: 760 }}>{subtitle}</p>}
    </div>
  );
}

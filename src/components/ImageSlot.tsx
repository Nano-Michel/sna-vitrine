type Props = {
  ratio?: '1x1' | '4x3' | '16x9' | '21x9';
  className?: string;
  caption?: string;
  aos?: string;
  aosDelay?: number;
};

export default function ImageSlot({ ratio = '4x3', className = '', caption, aos = 'fade-left', aosDelay = 0 }: Props) {
  return (
    <div
      className={`ratio ratio-${ratio} image-slot ${className}`}
      data-aos={aos}
      data-aos-delay={aosDelay}
      aria-label={caption || 'Zone image'}
      role="img"
    >
      <div className="image-slot-inner">
        <i className="bi bi-image"></i>
        {caption && <div className="caption small text-secondary">{caption}</div>}
      </div>
    </div>
  );
}

type CallToActionLink = {
  href: string;
  label: string;
};

type CallToActionSectionProps = {
  heading: string;
  body: string;
  primaryCta: CallToActionLink;
  secondaryCta?: CallToActionLink;
};

export function CallToActionSection({
  heading,
  body,
  primaryCta,
  secondaryCta,
}: CallToActionSectionProps) {
  return (
    <section className="cta-section-epic animate-fade-in">
      <h2>{heading}</h2>
      <p>{body}</p>
      <div className="cta-group">
        <a href={primaryCta.href} className="btn btn-accent btn-large">
          {primaryCta.label}
        </a>
        {secondaryCta ? (
          <a href={secondaryCta.href} className="btn btn-secondary btn-large">
            {secondaryCta.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}

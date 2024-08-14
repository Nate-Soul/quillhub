interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    fancySubtitle?: string;
    headerStyles?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = (
  { title, 
    subtitle,
    fancySubtitle,
    headerStyles,
  }) => {
  return (
    <header className={`flex flex-col gap-y-2 ${headerStyles ?? ''}`}>
      {fancySubtitle && (<p className="text-sm font-semibold uppercase text-primary-900">{fancySubtitle}</p>)}
      <h2 className={`text-3xl uppercase font-semibold text-secondary-500`}>{title}</h2>
      {subtitle && (<p className="text-sm text-light-500 font-alvenir">{subtitle}</p>)}
    </header>
  )
}

export default SectionHeading;

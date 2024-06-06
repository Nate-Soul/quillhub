interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    fancySubtitle?: string;
    headerStyles?: string;
    dark: boolean;
};

const SectionHeading: React.FC<SectionHeadingProps> = (
  { title, 
    subtitle,
    fancySubtitle,
    headerStyles, 
    dark 
  }) => {
  return (
    <header className={`${dark ? 'text-white' : 'text-primary-900'} flex flex-col gap-y-2 ${headerStyles ?? ''}`}>
      {fancySubtitle && (<p className="font-garamond text-secondary-50">{fancySubtitle}</p>)}
      <h2 className={`text-3xl capitalize font-semibold after:block after:h-px after:w-1/4 after:translate-x-[200%] after:mt-[2px] ${dark ? 'after:bg-white' : 'after:bg-primary-900'}`}>{title}</h2>
      {subtitle && (<p className="text-lg font-garamond">{subtitle}</p>)}
    </header>
  )
}

export default SectionHeading;

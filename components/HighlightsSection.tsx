import Image from "next/image";

type Highlight = {
  title: string;
  description: string;
};

type HighlightsSectionProps = {
  items: Highlight[];
};

export function HighlightsSection({ items }: HighlightsSectionProps) {
  if (!items.length) return null;

  return (
    <section
      aria-labelledby='highlights-heading'
      className='space-y-3 text-sm sm:text-base'>
      <h2
        id='highlights-heading'
        className='text-xs uppercase tracking-[0.2em] text-subtle'>
        Highlights
      </h2>

      <div className='grid gap-3 sm:gap-4'>
        {items.map((item, index) => (
          <div key={item.title} className='relative group'>
            {index === 0 && (
              <div className='absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 -z-10 pointer-events-none transform rotate-12 opacity-0 sm:opacity-100 transition-opacity duration-500'>
                <Image
                  src='./custom-ava-2.png'
                  alt=''
                  width={96}
                  height={96}
                  className='object-contain drop-shadow-md'
                />
              </div>
            )}
            <article className='relative z-10 rounded-2xl border border-gray-200/70 bg-surface px-4 py-3 sm:px-5 sm:py-4 shadow-[0_10px_40px_rgba(15,23,42,0.03)]'>
              <h3 className='text-sm font-medium text-gray-900 tracking-tight'>
                {item.title}
              </h3>
              <p className='mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed'>
                {item.description}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

type IntroSectionProps = {
  handle: string;
  displayName: string;
  status: string;
  avatarSrc?: string;
};

export function IntroSection({
  handle,
  displayName,
  status,
  avatarSrc,
}: IntroSectionProps) {
  return (
    <section
      aria-labelledby='intro-heading'
      className='flex flex-col items-center text-center gap-4'>
      <p className='text-xs uppercase tracking-[0.2em] text-subtle'>Welcome</p>

      <div className='flex items-center justify-center gap-3 sm:gap-4'>
        {avatarSrc && (
          <div className='h-12 w-12 sm:h-14 sm:w-14 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center'>
            <Image
              src={avatarSrc}
              alt={displayName}
              width={56}
              height={56}
              className='h-full w-full object-cover'
            />
          </div>
        )}

        <div className='space-y-1 text-left'>
          <h1
            id='intro-heading'
            className='text-2xl sm:text-3xl font-semibold tracking-tight'>
            {displayName}
          </h1>
          <p className='text-xs sm:text-sm text-subtle'>@{handle}</p>
        </div>
      </div>

      <p className='max-w-sm text-sm sm:text-base text-gray-700 leading-relaxed'>
        {status}
      </p>
    </section>
  );
}

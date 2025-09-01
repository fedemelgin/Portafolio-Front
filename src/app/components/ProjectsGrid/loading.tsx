export default function Loading({ count = 4, featured }: { count?: number; featured?: boolean }) {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-gray-900 relative rounded-xl overflow-hidden shadow-lg border border-gray-700 animate-pulse flex flex-col"
        >
          {/* Tag de categoría */}
          <div className='absolute top-0 left-0 p-4 pb-2'>
            <span className='bg-neutral-400/50 text-black px-3 py-1 rounded-full text-xs font-semibold'></span>
          </div>
          {/* Imagen */}
          <div className='w-full h-48 bg-neutral-400/50'></div>
          <div className='p-4 flex flex-col gap-2'>
            <div className='bg-neutral-400/50 w-2/3 h-6 rounded-md mb-2'></div>
            <div className='bg-neutral-400/50 w-full h-4 rounded-md mb-2'></div>
            <div className='flex flex-wrap gap-2 mb-2'>
              <div className='bg-neutral-400/50 w-16 h-6 rounded-full'></div>
              <div className='bg-neutral-400/50 w-20 h-6 rounded-full'></div>
            </div>
            <div className='bg-neutral-400/50 w-24 h-8 rounded-md'></div>
          </div>
        </div>
      ))}
    </>
  )
}
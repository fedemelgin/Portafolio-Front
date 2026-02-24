export default function BtnLenguage({color, iconId, gradient, glowColor, label}: {color: string, iconId: string, gradient: string, glowColor: string, label: string}) {
    return (
    <div className="relative group flex flex-col items-center">
      
      {/* BOTÓN */}
      <div
        className={`flex items-center justify-center size-10 px-1 py-1 rounded-full ${gradient} bg-gray-800 hover:scale-110 transition-all duration-300 ease-in-out ${glowColor}`}
      >
        <svg className={`w-6 h-6 ${color}`} aria-hidden="true">
          <use href={`#${iconId}`} />
        </svg>
      </div>

      {/* TOOLTIP */}
      <div className="
        absolute -bottom-10 
        px-2 py-1 
        text-[11px] 
        rounded-md 
        bg-white/10 
        backdrop-blur-md 
        border border-white/10
        text-gray-200
        opacity-0 
        translate-y-1
        transition-all 
        duration-200 
        group-hover:opacity-100 
        group-hover:translate-y-0
        pointer-events-none
        whitespace-nowrap">
        {label}
      </div>

    </div>
  );
} 
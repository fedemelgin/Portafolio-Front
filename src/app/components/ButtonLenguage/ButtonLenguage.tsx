export default function BtnLenguage({color, iconId, gradient, glowColor}: {color: string, iconId: string, gradient: string, glowColor: string}) {
    return (
        <div className={`flex items-center ${gradient} justify-center size-10 px-1 py-1 rounded-full bg-gray-800 hover:scale-110 ease-in-out ${glowColor} hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]`}>
            <svg className={`w-6 h-6 ${color}`} aria-hidden="true">
                <use href={`#${iconId}`} />
            </svg>
        </div>
    )
} 
export default function SocialLink({ iconSVG,BG900,TEXT400,BORDER400,TEXT,BG400,SHADOW400,colorTEXT}: {iconSVG:string,BG900:string,TEXT400:string,BORDER400:string,TEXT:string,BG400:string,SHADOW400:string,colorTEXT?:string}) {
  return (

    <button className={`w-27 cursor-pointer ${BG900} ${TEXT400} border ${BORDER400} font-medium flex gap-2 px-3 py-1.5 rounded-md border-b-4 overflow-hidden relative hover:brightness-130 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group text-sm' type="button`}>

      <span className={`${BG400} ${SHADOW400} absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]`}></span>
        <svg className='w-5 h-5'>
          <use href={`#${iconSVG}`} ></use>
        </svg>
        <span className={`text-sm ${colorTEXT}`}>{TEXT}</span>
    </button>
  );
}

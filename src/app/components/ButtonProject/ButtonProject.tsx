import { useTranslations } from 'next-intl'

export default function ButtonProject() {
    const t = useTranslations("button");
    return (
        <button className='w-30 cursor-pointer bg-sky-900 text-sky-400 border border-sky-400 font-medium px-3 py-1.5 rounded-md border-b-4 overflow-hidden relative hover:brightness-150 hover:border-t-4 duration-300 group text-sm' type="button">
            <span className='bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
            {t("view_project")}
        </button>
    )
}
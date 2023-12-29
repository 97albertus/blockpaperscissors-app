import { GiScissors } from "react-icons/gi";

export default function MobileHeader() {
    return (
        <div className='sticky top-0 z-50 h-16 md:hidden mt-8 bg-lila-500 flex flex-cols items-center w-screen overflow-hidden'>
            <div className='flex justify-end flex-col'>
                <p className='font-semibold text-xl tracking-tighter leading-none text-right align-text-bottom'>BLOCK.</p>
                <p className='font-semibold text-xl tracking-tighter leading-none text-right align-text-top'>PAPER.</p>
            </div>
            <p className='font-semibold text-5xl tracking-tight leading-tight'>SCISSORS.</p>
            <div className='flex justify-end flex-cols w-full -mr-2'>
                <GiScissors className='text-7xl rotate-180' />
            </div>
        </div>
    )
}
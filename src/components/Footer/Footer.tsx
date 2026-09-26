import Image from 'next/image';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-[#24262b] bg-[#08090c]">
            <div className="mx-auto py-6 flex min-h-[54px] w-full max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src={logo}
                    width={20}
                    height={20}
                    alt='logo for footer'
                    >

                    </Image>

                    <span className="text-[11px] font-bold tracking-[-0.02em] text-white">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-right text-[8px] leading-4 text-[#65708a] sm:text-[12px]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    )
};

export default Footer;
import Image from 'next/image';
import Link from 'next/link';
import HeroImg from '../../assets/banner.png';

const BannerSection = () => {
    return (
        <section className="mx-auto w-full max-w-[1320px] px-5 py-6 md:px-8 md:py-8">
            <div className="relative min-h-[300px] p-10 overflow-hidden rounded-xl border border-[#272a30] bg-[#15171c] md:min-h-[360px]">

                {/* Content */}
                <div className="relative z-10 flex h-full min-h-[300px] w-full items-center md:min-h-[360px]">
                    <div className="w-full px-7 py-10 sm:px-10 md:w-[58%] md:px-12 lg:px-14">

                        {/* Eyebrow */}
                        <p className="mb-4 font-oswald text-[11px] font-semibold tracking-wide text-[#ccff00] sm:text-xs">
                            WORKOUT LIBRARY
                        </p>

                        {/* Heading */}
                        <h1 className=" font-oswald text-[38px] font-black uppercase leading-[0.92] tracking-[-1px] text-white sm:text-[48px] md:text-[54px] lg:text-[60px]">
                            TRAIN WITH INTENT. LOG<br/> EVERY SET.
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-[530px] text-[12px] leading-5 text-[#a6a8ad] sm:text-[13px] sm:leading-6">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        {/* CTA */}
                        <Link
                            href="#library"
                            className="mt-7 inline-flex items-center rounded-md bg-[#ccff00] px-5 py-3 font-oswald text-[11px] font-bold uppercase text-black transition hover:bg-white"
                        >
                            BROWSE WORKOUTS
                        </Link>
                    </div>

                    {/* Image Area */}
                    <div className="absolute inset-y-0 right-0 hidden w-[43%] md:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#15171c] via-transparent to-transparent z-10" />

                        <Image
                            src={HeroImg}
                            alt="Workout"
                            width={400}
                            height={400}
                            className="h-full w-full object-contain object-right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
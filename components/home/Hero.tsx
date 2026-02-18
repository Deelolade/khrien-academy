import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className=" flex items-center justify-center bg-white px-6 md:px-12 lg:px-24 py-32">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src="/study-group.jpg" alt="Hero Image" fill className="object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            </div>
            <div className="max-w-2xl mx-auto text-center mt-16 relative">
                {/* Headline */}
                <h1 className="text-lg lg:text-2xl font-normal tracking-tight mb-6 text-white/80 leading-tight">
                    Learn the Skills Shaping the Future.
                </h1>

                {/* Subheadline */}
                <h2 className="text-2xl md:text-3xl lg:text-6xl font-black text-white mb-10 tracking-tight">
                    Practical learning for a changing world.
                </h2>

                {/* Supporting Copy */}
                <div className="max-w-4xl mx-auto mb-12 space-y-5">
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        Khrien Academy is a modern learning institution focused on helping individuals build relevant, practical skills through structured programs, live instruction, and hands-on application.
                        We believe education should be intentional, clear, and empowering — designed to help learners grow with confidence.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                    <Link
                        href="/apply"
                        className="text-center rounded-full text-white font-semibold bg-brandPurple px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out"
                    >
                        Join the Academy
                    </Link>
                    <p className="text-sm md:text-base text-white/40 font-medium">
                        Applications now open • Limited cohort size
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

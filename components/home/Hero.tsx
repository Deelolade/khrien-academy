import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className=" flex items-center justify-center bg-white px-6 md:px-12 lg:px-24 py-32">
            <div className="max-w-6xl mx-auto text-center">
                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-black leading-tight">
                    Learn the Skills Shaping the Future.
                </h1>

                {/* Subheadline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mb-10 tracking-tight">
                    Practical learning for a changing world.
                </h2>

                {/* Supporting Copy */}
                <div className="max-w-4xl mx-auto mb-12 space-y-5">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Khrien Academy is a modern learning institution focused on helping individuals build relevant, practical skills through structured programs, live instruction, and hands-on application.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        We believe education should be intentional, clear, and empowering — designed to help learners grow with confidence.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                    <Link
                        href="/apply"
                        className="inline-block bg-brandPurple text-white font-bold px-12 py-5 rounded-full hover:opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                    >
                        Join the Academy
                    </Link>
                    <p className="text-sm md:text-base text-gray-500 font-medium">
                        Applications now open • Limited cohort size
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

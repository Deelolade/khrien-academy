import React from "react";
import Link from "next/link";

const TuitionSection = () => {
    return (
        <section className="bg-brandGray py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black tracking-tight">
                        Tuition & Program Dates
                    </h2>
                </div>

                {/* Cohort Card */}
                <div className="bg-linear-to-br from-brandPurple to-purple-700 rounded-3xl p-10 md:p-14 text-white shadow-2xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-10">
                            The Genesis Cohort
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                                <div className="text-5xl mb-4">📅</div>
                                <div className="text-lg font-semibold mb-2 opacity-90">Program Dates</div>
                                <div className="text-2xl md:text-3xl font-bold">April 5 – June 27</div>
                            </div>

                            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                                <div className="text-5xl mb-4">💰</div>
                                <div className="text-lg font-semibold mb-2 opacity-90">Tuition Fee</div>
                                <div className="text-2xl md:text-3xl font-bold">₦200,000</div>
                            </div>
                        </div>

                        <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-10 inline-block">
                            <div className="text-lg font-semibold mb-1 opacity-90">Application Fee</div>
                            <div className="text-2xl font-bold flex items-center justify-center gap-2">
                                <span>✅</span>
                                <span>Free</span>
                            </div>
                        </div>

                        <div className="mb-10 space-y-4">
                            <p className="text-lg md:text-xl leading-relaxed opacity-95">
                                The Genesis Cohort marks the beginning of Khrien Academy.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed opacity-95">
                                Cohort size is intentionally limited to ensure quality learning, meaningful interaction, and focused tutor support.
                            </p>
                        </div>

                        <Link
                            href="/apply"
                            className="inline-block bg-white text-brandPurple font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TuitionSection;

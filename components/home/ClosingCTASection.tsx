import React from "react";
import Link from "next/link";

const ClosingCTASection = () => {
    return (
        <section className="bg-black text-white py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
                    Start With Intention
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                    Whether you're beginning something new or building on what you already know, Khrien Academy offers a clear and supportive path forward.
                </p>
                <Link
                    href="/apply"
                    className="inline-block bg-brandPurple text-white font-bold px-12 py-6 rounded-full hover:opacity-90 transition-all duration-300 text-lg shadow-2xl hover:shadow-brandPurple/50"
                >
                    Secure Your Spot
                </Link>
            </div>
        </section>
    );
};

export default ClosingCTASection;
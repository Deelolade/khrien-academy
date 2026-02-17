import React from "react";
import Link from "next/link";

const CallToAction = () => {
    return (
        <section className="bg-gray-900 text-white py-24 px-6 md:px-12 lg:px-24 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin With the Right Cohort</h2>
                <p className="text-xl text-gray-300 mb-10">
                    Applications reviewed on a rolling basis • Limited spots available
                </p>

                <Link
                    href="/apply"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105"
                >
                    Apply Now
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;

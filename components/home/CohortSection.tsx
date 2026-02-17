import React from "react";
import Link from "next/link";

const CohortSection = () => {
    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Open Cohorts</h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Cohorts define when your learning journey begins. Each cohort follows a structured schedule and offers guided learning alongside a community of peers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Cohort Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-2 text-black">The Genesis Cohort</h3>
                        <p className="text-purple-600 font-medium mb-6">📅 April 5 – June 27</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-gray-400">📍</span>
                                <span className="text-gray-700">Online • Cohort-based • Live weekly classes</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-gray-400">💰</span>
                                <span className="text-gray-700">₦200,000 • Application free</span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            The Genesis Cohort marks the beginning of Khrien Academy — a focused, intentional learning experience designed to build strong foundations and real confidence.
                        </p>

                        <Link
                            href="/apply/genesis"
                            className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-semibold py-3 rounded-lg transition-colors"
                        >
                            Apply to This Cohort
                        </Link>
                    </div>

                    {/* Placeholder for future cohorts can be added here */}
                </div>
            </div>
        </section>
    );
};

export default CohortSection;

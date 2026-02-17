import React from "react";
import Link from "next/link";

const CourseSection = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Courses You’ll Take</h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Each cohort includes one or more structured courses designed to build understanding first, then practical application.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Course Card */}
                    <div className="border border-gray-200 rounded-2xl p-8 hover:border-purple-200 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-black">AI Foundations & Applied Intelligence</h3>
                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                Beginner → Intermediate
                            </span>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            A comprehensive program designed to help learners understand Artificial Intelligence from the ground up — covering core concepts, modern tools, and real-world use cases.
                        </p>

                        <div className="mb-8">
                            <h4 className="font-semibold mb-4 text-gray-900">What’s Covered</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "Core AI concepts and terminology",
                                    "Generative AI and modern workflows",
                                    "Large Language Models (LLMs)",
                                    "Practical AI tools for work and creativity",
                                    "AI for builders, creators, and modern problem-solving",
                                    "No-code and low-code AI platforms"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                                        <span className="text-purple-600 mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/courses/ai-foundations"
                            className="inline-block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                        >
                            Explore Course →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;

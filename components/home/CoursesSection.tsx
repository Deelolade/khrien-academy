import React from "react";
import Link from "next/link";

const CoursesSection = () => {
    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                        What You'll Learn
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Our courses are built to meet learners where they are and guide them forward through a balanced mix of theory, practice, and guided instruction.
                    </p>
                </div>

                {/* Course Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-10 md:p-12 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            AI Foundations & Applied Intelligence
                        </h3>

                        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
                            A comprehensive beginner-to-intermediate program designed to help learners understand Artificial Intelligence from the ground up — covering concepts, tools, real-world applications, and modern workflows.
                        </p>

                        <div className="mb-10">
                            <h4 className="text-xl font-semibold mb-6 text-black">This course is suitable for:</h4>
                            <ul className="space-y-4">
                                {[
                                    "Beginners with no prior AI experience",
                                    "Professionals looking to understand and use AI confidently",
                                    "Creators and builders using modern AI tools",
                                    "Developers and non-developers alike"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-brandPurple text-2xl mt-0.5 shrink-0">✓</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/courses/ai-foundations"
                            className="inline-block bg-brandPurple text-white font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
                        >
                            Explore Course
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
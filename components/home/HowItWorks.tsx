import React from "react";

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-360 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How It Works</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        At Khrien Academy, you don’t enroll in courses alone — you join a cohort.
                        Together, they create a guided and supportive learning experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Cohorts Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-purple-100 p-2 rounded-lg text-2xl">🤝</span>
                            <h3 className="text-2xl font-bold text-black">Cohorts provide:</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "A clear start and end date",
                                "A shared learning schedule",
                                "Live tutor-led sessions",
                                "Accountability and peer support"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <span className="text-purple-600 flex-shrink-0">✓</span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-blue-100 p-2 rounded-lg text-2xl">📚</span>
                            <h3 className="text-2xl font-bold text-black">Courses provide:</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Structured curriculum",
                                "Clear learning outcomes",
                                "Practical assignments and assessments"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <span className="text-blue-600 flex-shrink-0">✓</span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

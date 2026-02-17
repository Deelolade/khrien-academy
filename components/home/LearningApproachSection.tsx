import React from "react";

const LearningApproachSection = () => {
    const features = [
        {
            icon: "📚",
            title: "Self-Paced Lessons",
            description: "Structured, pre-recorded lessons you can learn from at your own pace"
        },
        {
            icon: "🎓",
            title: "Weekly Live Classes",
            description: "Weekly live classes led by experienced tutors"
        },
        {
            icon: "✍️",
            title: "Practical Assignments",
            description: "Practical assignments to apply what you've learned"
        },
        {
            icon: "📝",
            title: "Knowledge Reinforcement",
            description: "Quizzes to reinforce understanding"
        },
        {
            icon: "👥",
            title: "Supportive Community",
            description: "A supportive learning environment with peers on the same journey"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
                        How Learning Works at Khrien Academy
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                        Our programs are cohort-based and designed to combine flexibility with accountability.
                    </p>
                    <p className="text-xl font-semibold text-black">You'll experience:</p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-brandGray rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:border-brandPurple transition-all duration-300"
                        >
                            <div className="text-6xl mb-5">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="text-center">
                    <p className="text-xl md:text-2xl font-semibold text-black">
                        We focus on understanding first — then confident application.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LearningApproachSection;
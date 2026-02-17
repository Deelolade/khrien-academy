import React from "react";

const WhoIsThisFor = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Is This Right for You?</h2>
                <p className="text-lg text-gray-600">
                    Khrien Academy programs are designed for:
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    "Beginners exploring new skills",
                    "Professionals building confidence with modern tools",
                    "Creators and builders looking to apply technology practically",
                    "Curious learners ready to commit to structured growth"
                ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600 flex items-center">
                        <span className="text-lg font-medium text-gray-800">{item}</span>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="inline-block bg-purple-50 text-purple-700 px-6 py-3 rounded-full font-medium">
                    ✨ No prior technical background is required.
                </p>
            </div>
        </section>
    );
};

export default WhoIsThisFor;

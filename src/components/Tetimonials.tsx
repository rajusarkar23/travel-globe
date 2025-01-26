"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        id: 1,
        name: "John Doe",
        comment: "Amazing experience! The packages were well-organized, and the staff was very helpful. Highly recommended!",
        rating: 5,
    },
    {
        id: 2,
        name: "Jane Smith",
        comment: "The best travel experience I've ever had. Everything was perfect, from the accommodations to the activities.",
        rating: 5,
    },
    {
        id: 3,
        name: "Alice Johnson",
        comment: "Fantastic service! The team went above and beyond to make our trip memorable. Will definitely book again!",
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentReview, setCurrentReview] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mt-8 mb-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-blue-500 text-center decoration-blue-500 decoration-2 underline underline-offset-8 mb-8">
                Testimonials
            </h2>

            {/* Review Carousel */}
            <div className="w-full max-w-2xl relative">
                {/* Review Card with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentReview}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-green-300 rounded-lg shadow-lg p-6 text-center"
                    >
                        <p className="text-gray-700 italic">`&quot;`{reviews[currentReview].comment}`&quot;`</p>
                        <p className="mt-4 font-semibold text-green-600">- {reviews[currentReview].name}</p>
                        <div className="mt-2 flex justify-center">
                            {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={prevReview}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                >
                    &lt;
                </button>
                <button
                    onClick={nextReview}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
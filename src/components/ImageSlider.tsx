"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
    "https://pub-367a5b1b28f9415dae5b51f69d042dff.r2.dev/pexels-rafid-18974570.jpg",
    "https://pub-367a5b1b28f9415dae5b51f69d042dff.r2.dev/pexels-flickr-145991.jpg",
    "https://pub-367a5b1b28f9415dae5b51f69d042dff.r2.dev/pexels-md-naimur-rahman-sazan-640505959-17554772.jpg",
    "https://pub-367a5b1b28f9415dae5b51f69d042dff.r2.dev/pexels-shsawmyint-12403962.jpg",
]

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative h-[600px] overflow-hidden">
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src || "/placeholder.svg"}
                    alt={`Travel destination ${index + 1}`}
                    fill
                    style={{
                        objectFit: "cover",
                        opacity: index === currentIndex ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                    }}
                    priority={index === 0}
                />
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}


import React, { useState } from 'react';

const ProjectCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        // Add your slide components here
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Previous</button>
            {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                    {slide}
                </div>
            ))}
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default ProjectCarousel;
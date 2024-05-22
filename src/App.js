import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useState } from 'react';
import './styles.css';

function FloorMap() {
    return (
        <div className="floor-map-container">
            <TransformWrapper>
                {({ zoomToElement, resetTransform }) => (
                    <TransformComponent>
                        <div className="floor-map-wrapper">
                            <img src="/floor_map.jpg" className="floor-map-image" alt="Floor Map" />
                            <Student number={1} top={30} left={10} zoomToElement={zoomToElement} resetTransform={resetTransform} />
                            <Student number={2} top={35} left={91} zoomToElement={zoomToElement} resetTransform={resetTransform} />
                            <Student number={3} top={63} left={44} zoomToElement={zoomToElement} resetTransform={resetTransform} />
                        </div>
                    </TransformComponent>
                )}
            </TransformWrapper>
        </div>
    );
}

function Student({ number, top, left, zoomToElement, resetTransform }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        const studentElement = document.querySelector(`.student-${number}`);
        if (studentElement && typeof zoomToElement === 'function') {
            zoomToElement(studentElement, 2.5, 500, 'easeOut');
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (typeof resetTransform === 'function') {
            resetTransform(300, 'easeOut');
        }
        setIsHovered(false);
    };

    return (
        <div
            className={`student-container`}
            style={{ top: `${top}%`, left: `${left}%` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? (
                <div className="info-box">
                    <img src="/path_to_image.jpg" alt="Student" className="info-box-image" />
                    <div className="info-box-text">
                        <p>Student name</p>
                        <p>Additional information about the student goes here.</p>
                    </div>
                </div>
            ) : (
                <div className={`student student-${number}`}>
                    {number}
                </div>
            )}
        </div>
    );
}

export default FloorMap;

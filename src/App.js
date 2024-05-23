import React from 'react';
import { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { SocialIcon } from 'react-social-icons';
import './styles.css';

function FloorMap() {
    return (
        <div className="floor-map-container">
            <TransformWrapper>
                {({ zoomToElement, resetTransform }) => (
                    <TransformComponent>
                        <div className="floor-map-wrapper">
                            <img src="/floor_map.jpg" className="floor-map-image" alt="Floor Map" />
                            <Student 
                                number={1} 
                                top={30} 
                                left={10} 
                                name='Marcus Absi'
                                portrait='/mabsi.portrait.jpg'
                                artwork='/mabsi.artwork.jpg'
                                social='https://www.instagram.com/corabsi911/?hl=en'
                                zoomToElement={zoomToElement} 
                                resetTransform={resetTransform} 
                            />
                            <Student 
                                number={2} 
                                top={35} 
                                left={91} 
                                name='A. Twatty'
                                portrait='/twat.portrait.jpg'
                                artwork='/twat.artwork.jpg'
                                social='https://www.instagram.com/explore/tags/corbasi/?hl=en'
                                zoomToElement={zoomToElement} 
                                resetTransform={resetTransform}
                            />
                            <Student 
                                number={3} 
                                top={63} 
                                left={44}
                                name='Anonymous'
                                portrait='/portrait.jpg'
                                artwork='/artwork.jpg'
                                zoomToElement={zoomToElement} 
                                resetTransform={resetTransform} 
                            />
                        </div>
                    </TransformComponent>
                )}
            </TransformWrapper>
        </div>
    );
}

function Student({ number, top, left, name, portrait, artwork, social, zoomToElement, resetTransform }) {
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
                    <div className='left-column'> 
                        <img src={portrait} alt="Portrait" className="portrait-image" />
                        <div className="info-box-text">
                            {name}
                        </div>
                        <SocialIcon className="social-icon" url={social} style={{ height: '1vw', width: '1vw'}}/>
                    </div>
                    <div className='right-column'>
                        <img src={artwork} alt="Artwork" className="artwork-image" />
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

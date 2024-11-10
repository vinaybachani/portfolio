"use client";
import { CirclePause, CirclePlay } from 'lucide-react';
import React, { useState, forwardRef, useEffect } from 'react';

const RippleButton = forwardRef(({ path, classes }, ref) => {
    const [ripples, setRipples] = useState([]);
    const [musicPlay, setMusicPlay] = useState(false);

    const handleClick = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const rippleId = Date.now();
        setRipples((prev) => [
            ...prev,
            { x, y, size, id: rippleId },
        ]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== rippleId));
        }, 600);

        if (musicPlay) {
            ref.current.pause();
        } else {
            ref.current.play();
        }
        setMusicPlay(!musicPlay);
    };

    useEffect(() => {
        const audioElement = ref.current;

        const handleEnded = () => {
            setMusicPlay(false); // Update state when audio ends
        };

        if (audioElement) {
            audioElement.addEventListener('ended', handleEnded);
        }

        // Cleanup event listener on unmount
        return () => {
            if (audioElement) {
                audioElement.removeEventListener('ended', handleEnded);
            }
        };
    }, [ref]);

    return (
        <div>
            <audio ref={ref} src={path}></audio>
            <button
                onClick={handleClick}
                className={classes}
            >
                {musicPlay ? (
                    <CirclePause className='w-12 h-12 text-primary dark:text-primaryDark' />
                ) : (
                    <CirclePlay className='w-12 h-12 text-primary dark:text-primaryDark' />
                )}
                {ripples.map((ripple) => (
                    <span
                        key={ripple.id}
                        className="ripple bg-primary dark:bg-primaryDark"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            width: ripple.size,
                            height: ripple.size,
                        }}
                    />
                ))}
            </button>
        </div>
    );
});

RippleButton.displayName = 'RippleButton';

export default RippleButton;
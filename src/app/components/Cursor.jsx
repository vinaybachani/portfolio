"use client"
import React, { useContext } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import ThemeContext from '../context/themeContext'

const Cursor = () => {
    const { isDarkTheme } = useContext(ThemeContext);
    const cursorColor = isDarkTheme ? '88, 230, 217' : '182, 62, 150';
    return (
        <div className='hidden lg:block'>
            <AnimatedCursor
                innerSize={20}
                outerSize={4}
                color={cursorColor}
                outerAlpha={0.2}
                innerScale={0.5}
                outerScale={5}
            />
        </div>
    )
}

export default Cursor

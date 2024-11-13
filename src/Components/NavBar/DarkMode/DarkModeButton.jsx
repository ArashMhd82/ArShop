import React, { useEffect, useState } from 'react'
import lightLogo from '../../../assets/website/light-mode-button.png'
import darkLogo from '../../../assets/website/dark-mode-button.png'

const DarkModeButton = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )
    const element = document.documentElement;
    
    useEffect(() => {
        if (theme === 'dark'){
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

    return (
        <div className='relative rounded-full'>
            <img 
                src={lightLogo} 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all absolute duration-300 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
            />

            <img 
                src={darkLogo} 
                className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 z-10'
            />
        </div>
    )
}

export default DarkModeButton

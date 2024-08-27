import { useState, useEffect } from "react"
import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpeg'
import { motion } from 'framer-motion'

const HeroSection = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <section className="relative flex h-screen items-center justify-center">
            <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <video src={video} className='h-full w-full object-cover' muted autoPlay loop playsInline poster={hero}>
                </video>
            </div>
            <div className='absolute 
                inset-0 -z-10 bg-gradient-to-b from-transparent
                from-70% to-black dark:to-gray-900
            '></div>
            <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
                <motion.img
                  initial={{ opacity:0, y:50 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration: 0.5 }}
                  src={logo} 
                  alt="logo" 
                  className='w-full p-4'/>
                <p className={`p-4 text-lg tracking-tight ${theme === 'light' ? 'text-white' : 'text-gray-300'}`}>
                    Tunisia
                </p>
            </div>
        </section>
    )
}

export default HeroSection

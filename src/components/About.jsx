import { useTheme } from './ThemeContext';
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import { motion } from 'framer-motion';

const About = () => {
    const { theme } = useTheme();

    return (
        <section className={`container mx-auto mb-8 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-[#000000] text-gray-100'}`} id="about">
            <h2 className={`mb-8 text-center text-3xl tracking-tighter lg:text-4xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                About Us
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full p-4 lg:w-1/2">
                    <img 
                        src={about} 
                        className={`rounded-3xl lg:-rotate-3 ${theme === 'light' ? 'shadow-md' : 'shadow-lg'}`} 
                        alt="" 
                    />
                </div>
                <div className="w-full px-2 lg:w-1/2">
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`text-4xl tracking-tighter lg:text-6xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                        {ABOUT.header}
                    </motion.h2>
                    <div className={`mb-8 mt-1 h-2 w-36 leading-relaxed ${theme === 'light' ? 'bg-rose-300' : 'bg-rose-600'} lg:-rotate-3`}></div>
                    <p className={`m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                        {ABOUT.content}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

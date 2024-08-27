import { useTheme } from './ThemeContext';
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
    const { theme } = useTheme();

    return (
        <div className={`mb-8 mt-20 ${theme === 'light' ? 'bg-[#fff] text-gray-900' : 'bg-[#000000] text-gray-100'}`}>
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-2xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className={`mt-8 text-center tracking-tighter ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                &copy; Nasri. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;

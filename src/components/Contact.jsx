import { useTheme } from './ThemeContext';
import { CONTACT } from "../constants";

const Contact = () => {
    const { theme } = useTheme();

    return (
        <section className={`container mx-auto py-16 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-[#000000] text-gray-100'}`} id="contact">
            <h2 className={`mb-8 text-center text-3xl lg:text-4xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                Contact Us
            </h2>
            <div className={`${theme === 'light' ? 'text-neutral-400' : 'text-neutral-300'}`}>
                {CONTACT.map((details) => (
                    <p
                        className={`my-20 border-b-2 border-dotted ${theme === 'light' ? 'border-neutral-700' : 'border-neutral-600'} pb-12 text-center text-2xl tracking-tighter lg:text-3xl`} 
                        key={details.key}>
                        {details.value}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Contact;

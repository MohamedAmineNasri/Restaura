import { useTheme } from './ThemeContext';
import { CUSINES } from "../constants";

const Expertise = () => {
    const { theme } = useTheme();

    return (
        <section 
            id="expertise" 
            className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-[#000000]'}`}
        >
            <h2 
                className={`my-8 text-center text-3xl tracking-tighter lg:text-4xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
            >
                Our Expertise
            </h2>
            <div className="container mx-auto px-4">
                {CUSINES.map((cusines, index) => (
                    <div 
                        key={index} 
                        className={`flex items-center border-b-4 border-dotted ${theme === 'light' ? 'border-neutral-700/40' : 'border-neutral-500/40'} py-2`}
                    >
                        <div className={`flex-shrink-0 pr-8 text-2xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                            {cusines.number}
                        </div>
                        <div className="w-1/3 flex-shrink-0">
                            <img  
                                className={`h-auto rounded-3xl ${theme === 'light' ? '' : 'border border-gray-700'}`}
                                src={cusines.image} 
                                alt={cusines.title} 
                            />
                        </div>
                        <div className={`pl-8 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                            <h3 className={`text-2xl uppercase tracking-tighter ${theme === 'light' ? 'text-rose-300' : 'text-rose-400'}`}>
                                {cusines.title}
                            </h3>
                            <p className={`mt-4 text-lg tracking-tighter ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                                {cusines.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Expertise;

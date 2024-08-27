// Dishes.js
import { useTheme } from './ThemeContext';
import DishCard from './DishCard';
import { DISHES } from '../constants';

const Dishes = () => {
    const { theme } = useTheme();

    return (
        <section className="container mx-auto py-16" id="dishes">
            <h2 className={`mb-8 text-center text-3xl tracking-tighter lg:text-4xl ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                Our Dishes
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
                {DISHES.map((project, index) => (
                    <DishCard key={index} project={project} theme={theme} />
                ))}
            </div>
        </section>
    );
};

export default Dishes;

import { useTheme } from './ThemeContext';

const DishCard = ({ project, theme }) => {
  return (
    <div 
      className={`rounded-3xl p-4 ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-[#000000] text-gray-100'}`}
    >
        <img 
            src={project.image} 
            alt={project.title}
            className="rounded-3xl p-2"
        />
        <div className="p-2">
            <h3 className="mb-2 text-2xl font-bold tracking-tighter">
                {project.title}
            </h3>
            <p className="text-sm">
                {project.description}
            </p>
        </div>
    </div>
  );
};

export default DishCard;

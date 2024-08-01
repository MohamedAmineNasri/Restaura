
const DishCard = ({ project }) => {
  return (
    <div>
        <img src={project.image} 
            alt={project.title}
            className="rouneded-3xl p-2"/>
        <div className="p-2">
            <h3 className="mb-2 text-2xl font-bold tracking-tighter">
                {project.title}
            </h3>
            <p className="text-sm">
                {project.description}
            </p>
        </div>
    </div>
  )
}

export default DishCard
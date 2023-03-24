import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex-1">
                <h2 className="text-xl font-medium mb-4">
                    <Link to={`/project/${project.id}`}>{project.name}</Link>
                </h2>
                <span className={`text-sm rounded-full px-2 py-1 ${project.status === 'Not Started' ? 'bg-yellow-400 text-white' : 'bg-green-400 text-white'}`}>{project.status}</span>
            </div>
        </>
    )
}

export default ProjectCard
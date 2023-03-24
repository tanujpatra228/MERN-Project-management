import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error</p>);
    return (
        <>
            <div className='mt-5'>
                {data?.projects.length > 0 ? (
                    <div className='flex flex-row gap-2'>
                        {data?.projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (<p>No Projects</p>)}
            </div>
        </>
    )
}

export default Projects
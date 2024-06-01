import './Projects.css'

export default function Projects({data}) {

    const projectsList = JSON.stringify(data['projectsList']);
    const jsonProjectsList = JSON.parse(projectsList);
  

    return (
        <div className="rootProjects">
            <h1 id='projectsId'>{data['project']}</h1>
            {Object.keys(jsonProjectsList).map((key) => (
                <a key={key} href={jsonProjectsList[key]}>
                    {key}
                </a>
            ))}
        </div>
    );
}
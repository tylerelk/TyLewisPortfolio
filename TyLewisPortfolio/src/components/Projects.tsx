import projectData from "../assets/data/project-data.json";

export default function Projects() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-4'>
      {projectData.projects.map((p) => {
        return (
          <div className='w-11/12 border-4 bg-white p-4 rounded-lg shadow-xl'>
            <h1 className='text-left text-3xl w-full border-b-2 border-teal-300 my-4'>
              {p.name}
            </h1>
            <div className='w-11/12 flex flex-wrap items-center gap-2 text-sm'>
              <p className='text-left p-1 bg-yellow-500 m-1 rounded-md'>
                Tech used:
              </p>
              {p.tags.map((t) => {
                return <div>{t}</div>;
              })}
            </div>
            <div className='w-11/12 flex flex-wrap items-center gap-2 text-sm'>
              <p className='text-left p-1 bg-purple-500 m-1 rounded-md text-gray-50'>
                Links:
              </p>
              <div className='flex gap-2 justify-around items-center'>
                <a
                  href={p.links.preview}
                  className='rounded-md p-1 bg-black text-white m-1 hover:text-teal-300'
                  target='_blank'
                >
                  Preview
                </a>
                <a
                  href={p.links.repo}
                  className='rounded-md p-1 bg-black text-white m-1 hover:text-teal-300'
                  target='_blank'
                >
                  Repo
                </a>
              </div>
            </div>
            <div className='flex items-center justify-around'>
              <p className='first-letter:text-2xl'>{p.description}</p>
              <img
                src={`/assets/images/${p.imageName}`}
                alt={`Preview image for ${p.name}`}
                className='float-right w-1/2 object-cover rounded-lg m-4 shadow-lg'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

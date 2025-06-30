import React from "react";
import { GithubContext } from "@hooks/GithubContext";

const GithubProjects = () => {
  const { repos, getPagesURL, getThumbnail } = React.useContext(GithubContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map(repo => (
        <div key={repo.id} className="glass p-4 border rounded-xl shadow-md">
          <div className='repThumb mb-4'>
            <img src={getThumbnail(repo.name)} alt={repo.name} />  
          </div>
            <h3 className="text-xl font-semibold capitalize mb-2">{repo.name.replace("_"," ")}</h3>
          <p className="text-sm dark:text-white">{repo.description}</p>
          <div className='flex m-0 p-0 gap-2 justify-between'>
            <a href={repo.html_url} className="text-white py-2 px-4 rounded-md font-bold bg-indigo-700 no-underline" target="_blank" rel="noreferrer">
                Ver en GitHub
            </a>
              {repo.has_pages && (<>
                  <a
                    href={getPagesURL(repo.name)}
                    className="text-white bg-light-link no-underline font-medium py-2 px-4 rounded-md font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Demo
                  </a></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { GithubProjects };

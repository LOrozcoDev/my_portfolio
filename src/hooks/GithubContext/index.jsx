import React from "react";
const GithubContext = React.createContext();

function GithubProvider({ children }) {
    const [repos, setRepos] = React.useState([]);
    const githubUser = "LOrozcoDev";
    const featuredRepos = [
        "wordpress_templates",
    ];
    React.useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/repos`)
        .then((res) => res.json())
        .then((data) => {
            const filtered = data.filter(repo =>
                repo.name.startsWith('public-') || featuredRepos.includes(repo.name)
            );
            setRepos(filtered);
        })
        .catch((err) => {
        console.error('Error al obtener repositorios:', err);
        });
    }, []);
    const getPagesURL = (repoName) => `https://${githubUser}.github.io/${repoName}/`;
    const getThumbnail = (repoName) =>`https://raw.githubusercontent.com/${githubUser}/${repoName}/main/public/thumbnail.jpg`;

    return (<GithubContext.Provider value={{ getPagesURL, getThumbnail, repos }}>
        {children}
    </GithubContext.Provider>);
}


export { GithubProvider, GithubContext };
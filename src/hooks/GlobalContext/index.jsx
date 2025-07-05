import React from "react";
import { useLocalStorage } from "@hooks/useLocalStorage";
const GlobalContext = React.createContext();

function GlobalProvider({children}) {
    const { activeDarkTheme, toggleTheme } = useLocalStorage();
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
    const socialNetworks = [
        {id: 1, name: "github", url: "https://github.com/LOrozcoDev" },
        {id:2, name: "linkedin", url: "https://www.linkedin.com/in/leonardoj-orozcob/" },
        {id:3, name: "instagram" , url: "https://www.instagram.com/kuma_learns/" },
        
    ];
    const navigation = [
        { name: "Inicio", url: "/my_portfolio/", icon: "home" },
        { name: "Acerca De", url: "#about", icon: "about" },
        { name: "Experiencia", url: "#experience", icon: "experience" },
        { name: "Proyectos", url: "#proyects", icon: "proyects" },
        { name: "Conocimientos", url: "#skills", icon: "skills" },
        { name: "Aprendiendo Sobre", url:"#learning", icon:"learns"}
    ];
    const skills = ["html", "css", "javascript", "git", "sass", "bootstrap", "tailwind", "react", "php", "laravel", "wordpress", "mysql"];
    const skillsToLearn = ["node", "python", "mongo", "next"];
    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    }
    const handleDownload = () => {
        window.open('https://docs.google.com/document/d/11axgn2CQRDjnOHiusKN0BtzIKrjDZDW3cQQfLcqkzYo/edit?usp=drive_link', '_blank');
    }
    return (
        <GlobalContext.Provider value={{activeDarkTheme,toggleTheme,cursorPosition,handleMouseMove,socialNetworks,navigation,skills,skillsToLearn,handleDownload}}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider};

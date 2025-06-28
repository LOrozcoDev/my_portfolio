import React from "react";
import { ThemeToggleButton } from "@structure/ThemeToggleButton";
import { ProfileAside } from "@structure/ProfileAside";
import { MainContent } from "@structure/MainContent";
import { AvatarLogo } from "@components/AvatarLogo";
import { TitleComposed } from "@components/TitleComposed";
import { SocialNetworks } from "@components/SocialNetworks";
import { PillButton } from "@components/PillButton";
import { NavBar } from "@components/Layout/NavBar";
import { SectionBlock } from "@structure/SectionBlock";
import { SectionDescription } from "@structure/SectionBlock/SectionDescription";
import { TimelineBlock, TimelineItem } from "@components/Layout/TimelineBlock";
import { SkillsCarousel } from "@structure/SkillsCarousel";
import { GithubProjects } from '@components/GithubProjects';
// Contexto Global
import { GithubProvider } from "@hooks/GithubContext";
import { GlobalContext } from "@hooks/GlobalContext";

function AppUI() {
    const {handleMouseMove, cursorPosition, skills, skillsToLearn, handleDownload } = React.useContext(GlobalContext);
    return (
        <section id="main-content" onMouseMove={(event) => {
            handleMouseMove(event);
        }} className={`relative max-w-[1200px] flex flex-col lg:flex-row  gap-12 py-[100px] px-4 mx-auto my-0`}>
            <div id="glowCursor" className="fixed hidden lg:flex w-[200px] h-[200px] rouded-full dark:bg-[#1b3477 ] bg-dark-detail rounded-full opacity-40 blur-xl z-0" style={{ top: cursorPosition.y, left: cursorPosition.x, transform: 'translate(-50%,-50%)'}} ></div>
            <ThemeToggleButton estilos={"absolute top-2 right-2 p-2 rounded-full shadow-xl bg-light-bg dark:bg-dark-bg"} iconLight={"text-light-detail"} iconDark={"text-dark-bg"} />
            <ProfileAside>
                <AvatarLogo />
                <TitleComposed type={"h1"} primaryWord={"Leonardo"} secondaryWord={"Orozco"} />
                <h2 className="font-thin dark:text-dark-title text-light-title">Frontend Developer</h2>
                <SocialNetworks />
                <PillButton featured={true} flag={true} aria_label={"Open to Work"} text={"Disponible para trabajar"} />
                <PillButton aria_label={"Dowload CV"} text={"Descargar CV"} handleClickAction={handleDownload} />
            </ProfileAside>
            <MainContent>
                <NavBar/>
                <SectionBlock sectionName={"about"}>
                    <TitleComposed type={"h2"} primaryWord={"Acerca"} secondaryWord={"De"} decorated uppercase />
                    <SectionDescription>
                        <p>
                            Soy un entusiasta de la tecnología con una pasión insaciable por el aprendizaje y la innovación. Durante años, me dediqué al desarrollo de plantillas para CMS como Joomla y WordPress, así como a la creación de sistemas personalizados basados en PHP. Pero, al igual que cualquier verdadero explorador del código, sentí que había llegado el momento de ir más allá y enfrentar desafíos más complejos.
                        </p>
                        <p>
                            Creo firmemente en la mejora continua y en la importancia de seguir aprendiendo para superar las expectativas. Mi objetivo es contribuir al crecimiento y éxito de las empresas con las que colaboro, desarrollando soluciones de software robustas, innovadoras y de alta calidad. No se trata solo de escribir código; se trata de crear algo que marque la diferencia.
                        </p>
                    </SectionDescription>
                </SectionBlock>
                <SectionBlock sectionName={"experience"}>
                    <TitleComposed type={"h2"} primaryWord={"Experiencia"} secondaryWord={"Laboral"} decorated uppercase />
                    <SectionDescription>
                        <TimelineBlock>
                            <TimelineItem>
                                <TimelineItem.Heading>
                                    <h3>Producciones 5 Sentidos</h3>
                                    <h4>Frontend Developer</h4>
                                    <span>2009-2017</span>
                                </TimelineItem.Heading>
                                <TimelineItem.Description>
                                    <p>Durante mi tiempo en esta empresa, evolucioné de la edición de plantillas para CMS a la creación completa de plantillas personalizadas. Esto permitió a la empresa ofrecer soluciones de sitios web a medida, adaptándose de manera precisa a las necesidades y expectativas de los clientes.</p>
                                </TimelineItem.Description>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineItem.Heading>
                                    <h3>Praxis Creativa</h3>
                                    <h4>Frontend / Backend Developer </h4>
                                    <span>2017 - 2023</span>
                                </TimelineItem.Heading>
                                <TimelineItem.Description>
                                    <p>Continué desarrollando plantillas, enfocándome específicamente en WordPress. Además, incursioné en el desarrollo de sistemas personalizados, lo que me permitió mejorar mis conocimientos en bases de datos y programación orientada a objetos.</p>
                                </TimelineItem.Description>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineItem.Heading>
                                    <h3>Web Studio Digital</h3>
                                    <h4>Frontend / Backend Developer </h4>
                                    <span>2023 - 2024</span>
                                </TimelineItem.Heading>
                                <TimelineItem.Description>
                                    <p>Tras el cambio de nombre de Paxis Creativa a Web Studio Digital, continué desempeñando con excelencia mi labor en el desarrollo y mantenimiento de sistemas personalizados.</p>
                                </TimelineItem.Description>
                            </TimelineItem>
                        </TimelineBlock>
                    </SectionDescription>
                </SectionBlock>
                <SectionBlock sectionName={"proyects"}>
                    <TitleComposed type={"h2"} primaryWord={"Proyectos"} secondaryWord={"Realizados"} decorated uppercase />
                    <SectionDescription>
                        <p>
                            He desarrollado una variedad de proyectos que abarcan desde sitios web personalizados hasta sistemas integrados, aplicando soluciones innovadoras a problemas complejos. Cada proyecto ha sido una oportunidad para combinar creatividad y tecnología, adaptándome a las necesidades específicas del cliente y explorando nuevas herramientas y metodologías.
                        </p>
                    </SectionDescription>
                    <SectionDescription>
                        <GithubProvider>
                            <GithubProjects/>
                        </GithubProvider>
                    </SectionDescription>
                </SectionBlock>
                <SectionBlock sectionName={"contact"}>
                    <SectionDescription>
                        <div className="w-full flex flex-col lg:flex-row">
                            <div className="w-5/6 flex items-center flex-col justify-around gap-2">
                                <h2 className="w-full text-4xl uppercase font-thin">¿Quieres Hacer <span className="font-bold text-light-detail">Realidad</span> tu proyecto?</h2>
                                <h3 className="w-full uppercase my-2 lg:my-0 text-light-link font-bold text-2xl">¡Trabajemos Juntos para lograrlo!</h3>
                            </div>
                            <div className="flex flex-row lg:flex-col items-center my-2 lg:my-0 lg:justify-center gap-2">
                                <a href="https://www.linkedin.com/in/leonardoj-orozcob/" target="_blank" className="p-2 text-light-link text-lg border-light-link border-2 rounded-md w-24 text-center hover:bg-light-link trantision-all hover:text-white  dark:text-dark-link dark:border-dark-link dark:hover:bg-dark-link dark:hover:text-white" aria-label="ContactMe Linkedin" >Linkedin</a>
                                <a href="mailto:devorozcol@gmail.com?subject=Hagamos%20un%20proyecto!" className="p-2 bg-transparent text-light-link text-lg border-light-link border-2 rounded-md w-24 text-center hover:bg-light-link trantision-all hover:text-white dark:text-dark-link dark:border-dark-link dark:hover:bg-dark-link dark:hover:text-white" aria-label="ContactMe Mail">GMail</a>
                            </div>
                        </div>
                    </SectionDescription>
                </SectionBlock>
                <SectionBlock sectionName={"skills"}>
                    <TitleComposed type={"h2"} primaryWord={"Conocimientos"} secondaryWord={"Adquiridos"} decorated uppercase />
                    <SectionDescription>
                        <p>
                           Durante mi experiencia laboral, siempre enfrenté retos que me impulsaron a adquirir nuevos conocimientos para satisfacer las necesidades de cada proyecto. Estos desafíos no solo me motivaron a mejorar mis habilidades, sino que también alimentaron mi pasión por el aprendizaje continuo, permitiéndome mantenerme actualizado y aportar soluciones innovadorase.
                        </p>
                        <SkillsCarousel skillList={skills}/>
                    </SectionDescription>
                </SectionBlock>
                <SectionBlock sectionName={"learning"}>
                    <TitleComposed type={"h2"} primaryWord={"Actualmente"} secondaryWord={"Aprendiendo"} decorated uppercase />
                    <SectionDescription>
                        <p>
                           Comencé como desarrollador autodidacta, aprendiendo a medida que enfrentaba nuevos retos. Actualmente, estoy formalizando mis conocimientos a través de la plataforma Platzi, mientras profundizo mis habilidades investigando y estudiando el trabajo de profesionales para incorporar mejores prácticas en mi desempeño.
                        </p>
                        <p>Eh aqui algunas tecnologias que estoy aprendiendo y deseo aprender:</p>
                        <SkillsCarousel skillList={skillsToLearn}/>
                    </SectionDescription>
                </SectionBlock>
            </MainContent>
        </section>
    );
}
export { AppUI };

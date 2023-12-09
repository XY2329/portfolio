import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Java</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Dart</li>
                <li>Python</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>Imagine Hackathon</li>
            <li>Samsung UI/UX</li>
            <li>Taylor's Hackathon</li>
            <li>ETH KL</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Taylor's University</li>
                <li>Chong Hwa Independent High School</li>
          </ul>
        ),
    }
];

const AboutMe = () => {
    
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently pursuing a Computer Science degree specialised in Cyber Security and Artificial Intelligence at Taylor's Univeristy. 
                        Additionally, I've just started to step into the world of blockchain development.
                        My passion for technology and problem-solving has led me to participate in 4 hackathons this year, where I primarily serve as a Backend Developer. However, I am not limited to backend tasks and sometimes take on frontend responsibilities. </p>
                    <div className="flex flex-row mt-8">

                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;
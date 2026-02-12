
import "./Skills.css";
import react from "../../assets/skills/react-svgrepo-com.svg";
import nextjs from "../../assets/skills/nextjs-fill-svgrepo-com.svg";
import javascript from "../../assets/skills/js-svgrepo-com.svg";
import typescript from "../../assets/skills/typescript-official-svgrepo-com.svg";
import tailwind from "../../assets/skills/tailwind-svgrepo-com.svg";
import mui from "../../assets/skills/material-ui-svgrepo-com.svg";
import node from "../../assets/skills/node-js-svgrepo-com.svg";
import express from "../../assets/skills/express-svgrepo-com.svg";
import mongodb from "../../assets/skills/mongodb-svgrepo-com.svg";
import git from "../../assets/skills/git-svgrepo-com.svg";
import postman from "../../assets/skills/postman-icon-svgrepo-com.svg";
import vercel from "../../assets/skills/vercel-logo-svgrepo-com.svg";
import shadcn from "../../assets/skills/shadcn-ui-seeklogo.svg";
import chakra from "../../assets/skills/icons8-chakra-ui (1).svg";
import axios from "../../assets/skills/Axios--Streamline-Simple-Icons.svg";
import query from "../../assets/skills/React-Query-Icon--Streamline-Svg-Logos.svg";
import rest from "../../assets/skills/rest-api-svgrepo-com.svg";
import jira from "../../assets/skills/atlassian-svgrepo-com.svg";



import LightSpeed from "react-reveal/LightSpeed";

function Skill() {
  const skillsData = [
    { name: "React.js", image: react },
    { name: "Next.js", image: nextjs },
    { name: "JavaScript", image: javascript },
    { name: "TypeScript", image: typescript },

    { name: "Tailwind CSS", image: tailwind },
    { name: "Material UI", image: mui },
    { name: "Shadcn UI", image:shadcn  },
    // { name: "Chakra UI", image: chakra },

    { name: "Node.js", image: node },
    { name: "Express.js", image: express },
    { name: "MongoDB", image: mongodb },
    { name: "Axios", image: axios },
    // { name: "React Query", image: query },
    // { name: "Rest API", image: rest },
   

    { name: "Git", image: git },
    { name: "Postman", image: postman },
    { name: "Vercel", image: vercel },
    { name: "Jira", image: jira },
  ];

  return (
    <section id="skills" className="skills">
      <div className="">
        <h2 className="section-title">Technical Skills</h2>
        <LightSpeed bottom>
          <div className="skill-box">
            <div className="skill-row">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-image"
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </LightSpeed>
      </div>
    </section>
  );
}

export default Skill;

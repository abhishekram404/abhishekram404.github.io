import { Icon } from "@iconify/react";
import React from "react";
import styles from "./Skills.module.scss";
import Tilt from "react-parallax-tilt";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className={styles.skillsPage}>
      <h2 className={styles.pageTitle}>My Skills</h2>
      <div className={styles.skillsGrid}>
        <SkillItem skillIcon="logos:react" skillTitle="React" />
        <SkillItem skillIcon="logos:sass" skillTitle="SASS/SCSS" />
        <SkillItem skillIcon="cib:next-js" skillTitle="Next JS" />
        <SkillItem skillIcon="logos:redux" skillTitle="Redux" />
        <SkillItem
          skillIcon="logos:react-query-icon"
          skillTitle="React Query"
        />
        <SkillItem
          skillIcon="vscode-icons:file-type-js-official"
          skillTitle="JavaScript"
        />
        <SkillItem skillIcon="vscode-icons:file-type-html" skillTitle="HTML5" />
        <SkillItem skillIcon="vscode-icons:file-type-css" skillTitle="CSS3" />
        <SkillItem skillIcon="logos:typescript-icon" skillTitle="TypeScript" />
        <SkillItem skillIcon="logos:git-icon" skillTitle="Git/Github" />
        <SkillItem skillIcon="logos:figma" skillTitle="Figma" />
        <SkillItem
          skillIcon="vscode-icons:file-type-tailwind"
          skillTitle="Tailwind CSS"
        />
        <SkillItem skillIcon="logos:socket-io" skillTitle="Socket IO" />
        <SkillItem skillIcon="logos:nodejs-icon" skillTitle="Node JS" />
        <SkillItem skillIcon="simple-icons:express" skillTitle="Express JS" />
        <SkillItem
          skillIcon="vscode-icons:file-type-mongo"
          skillTitle="Mongo DB"
        />
      </div>
    </div>
  );
};

export default Skills;

function SkillItem({
  skillTitle,
  skillIcon,
}: {
  skillTitle: string;
  skillIcon: string;
}) {
  return (
    <Tilt scale={0.9}>
      <div className={styles.skill}>
        <Icon icon={skillIcon} className={styles.skillIcon} />
        <h3 className={styles.skillTitle}>{skillTitle}</h3>
      </div>
    </Tilt>
  );
}

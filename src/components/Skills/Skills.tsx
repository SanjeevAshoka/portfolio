import { skillsIcon } from './SkillsData';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skillsHeader'><span>My Skills</span></div>
      <div className='skillList'>
        {
            skillsIcon.map((skill)=><div className='skillCard' key={skill.iconName}>
                <div dangerouslySetInnerHTML={{ __html: skill.iconSvg }}/>
            <p>{skill.iconName}</p>
        </div>)
        }
      </div>
    </div>
  )
}

export default Skills;

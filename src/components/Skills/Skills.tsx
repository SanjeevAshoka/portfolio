import { skillsIcon } from './SkillsData';
import './Skills.css';
import { useAppContext } from '../../Context/Context';

const Skills = () => {
  const {skillSectionData} = useAppContext()?.data || {};
  return (
    <div className='skills'>
      <div className='skillsHeader'><span>{skillSectionData?.skillSectionHeader}</span></div>
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

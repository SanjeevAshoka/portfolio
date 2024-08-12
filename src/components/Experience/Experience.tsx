import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import './Experience.css';
import { companyLinkHandler } from '../../utils';
import { useAppContext } from '../../Context/Context';

const Experience = () => {
  const {experienceSectionData} = useAppContext()?.data || {};
  return (
    <div className='experience'>
      <div className="expHeaderTitle"><span>{experienceSectionData?.experienceHeader}</span></div>
      {
        experienceSectionData?.experienceData.map((expItem: any) => (<React.Fragment key={expItem.companyName}>
          <div className='expSection'>
            <h3 className='expRole'>{expItem.role} <span className='yearWork'>{expItem.workYear}</span></h3>
            <div className='companyAndRole'>
              <p className='expLocation'><span className='expCompany' onClick={() => companyLinkHandler(expItem.company)}>{expItem.companyName}</span><span><FaLocationDot className='locIcon' /></span>{expItem.jobLocation}</p>
              <p className='roleDesc'>{expItem.jobRoleDesc}</p>
              <div className="skillsUsed">
                {expItem?.skillsUsed && expItem?.skillsUsed?.length > 0 && expItem?.skillsUsed.map((skill:string) => <span key={skill} className='expSkill'>{skill}</span>)}
              </div>
            </div>
          </div>
        </React.Fragment>
        ))
      }
    </div>
  )
}

export default Experience;
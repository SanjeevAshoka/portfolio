import { useEffect, useRef, useState } from 'react';
import { FaDownload } from "react-icons/fa";
import resume from '../../assets/resume.png';
import resumePdf from '../../assets/sanjeev_resume.pdf';

import './Resume.css';
import { useAppContext } from '../../Context/Context';

const Resume = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const {resumeSectionData} = useAppContext()?.data || {};
    const observerRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setShouldAnimate(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 1
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Sanjeev_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='resumeSection'>
            <div className='resumeText'>
                <h3 className='resumeTextOne'>{resumeSectionData?.resumeHaveLookText}</h3>
                <p className={`resumeTextTwo ${shouldAnimate ? 'animate' : ''}`} ref={observerRef}>{resumeSectionData?.resumetext}</p>
            </div>
            <div className="resumeImageHolder">
                <img src={resume} alt="Resume_Image" className="resumeImage" />
                <div className="downloadBtn">
                    <button className='browseButton'>
                        <span className='btnText'>{resumeSectionData?.downloadBtnText}</span>
                        <span className="icon" onClick={handleDownload}>
                            <FaDownload /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Resume;

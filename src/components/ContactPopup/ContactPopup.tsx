import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoMdClose } from "react-icons/io";
import './ContactPopup.css';
import { formFieldChecker } from '../../utils';
import { SiTicktick } from "react-icons/si";
import { ImCross } from "react-icons/im";
import { useAppContext } from '../../Context/Context';

interface ContactPopupProps {
    popupHandle: () => void;
}
const ContactPopup: React.FC<ContactPopupProps> = ({ popupHandle }) => {
    const [popupData, setPopupData] = useState({ userEmail: '', subject: '', message: '' });
    const [fieldsError, setFieldsError] = useState({ userEmail: '', subject: '', message: '' });
    const [sendStatus, setShowLoader] = useState('pending');
    const {contactPopup} = useAppContext()?.data || {};
    const closePopup = () => {
        popupHandle();
        setPopupData({ userEmail: '', subject: '', message: '' });
    }
    const updatePopupData = (event: any) => {
        setPopupData((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
    }
    const handleSendEmail = (event: any) => {
        event.preventDefault();
        const checker = formFieldChecker(popupData);
        if (!checker?.flag) {
            setFieldsError(checker.checksResponse);
        }
        else {
            setShowLoader('ongoing');
            emailjs
                .send('service_8czau38', 'template_mddks1g', popupData, {
                    publicKey: '3ebdr9LjdCozSegTE',
                })
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setShowLoader('sent');
                        setTimeout(closePopup, 3000);

                    },
                    (err) => {
                        console.log('FAILED...', err);
                        setShowLoader('failed');
                        setTimeout(closePopup, 3000);
                    },
                );
        }

    }
    return (<>
        <div className="formContainer">
            <div className='closeIcon'><IoMdClose className='icon' onClick={closePopup} /></div>
            {sendStatus === 'pending' ? (<form className='formContent'>
                <h2 className='formHeader'>{contactPopup?.contactPopupHeader}</h2>
                <div className="form-group">
                    <label htmlFor="email" className='formLabel'>{contactPopup?.labelEmail}</label>
                    <input className='formInput' type="text" id="email" name="userEmail" required placeholder='jone@gmail.com' value={popupData.userEmail} onChange={updatePopupData} />
                    {fieldsError.userEmail?.length > 0 && <span className='errorSpan'>{fieldsError.userEmail}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="subject" className='formLabel'>{contactPopup?.labelSubject}</label>
                    <textarea className='formInput inpAreaSub' id="subject" name="subject" required value={popupData.subject} onChange={updatePopupData} />
                    {fieldsError.subject?.length > 0 && <span className='errorSpan'>{fieldsError.subject}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message" className='formLabel'>{contactPopup?.labelMsg}</label>
                    <textarea className='formInput inpArea' id="message" name="message" required onChange={updatePopupData} value={popupData.message} />
                    {fieldsError.message?.length > 0 && <span className='errorSpan'>{fieldsError.message}</span>}
                </div>
                <div className="button-group">
                    <button className="formBtn" onClick={handleSendEmail}>{contactPopup.sendBtnText}</button>
                    <button type="button" className="formBtn" onClick={closePopup}>{contactPopup.cancelBtnText}</button>
                </div>
            </form>) : sendStatus === 'ongoing' ?
                (<div className="loaderwrap">
                    <div className='loader'></div>
                </div>) : sendStatus === 'sent' ? (
                    <div className="loaderwrap">
                        <span className='msgApi msgSuccess'><SiTicktick />{contactPopup?.successMsg}</span>
                    </div>) : (<div className="loaderwrap">
                        <div><span className='msgApi msgFailure'><ImCross />{contactPopup?.failesMsg}</span></div>
                    </div>)
            }

        </div>
    </>
    )
}

export default ContactPopup;

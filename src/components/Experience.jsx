import { useState } from 'react';
import { Input, Button, Achievements } from "./utils.jsx";

export default function Experience({ id, onDelete }) {
    const [positionTitle, setPositionTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handlePositionTitle(e) {
        setPositionTitle(e.target.value);
    }
    function handleCompanyName(e) {
        setCompanyName(e.target.value);
    }
    
    function handleStartDate(e) {
        setStartDate(e.target.value);
    }
    
    function handleEndDate(e) {
        setEndDate(e.target.value);
    }

    function handleSubmitted() {
        if (submitted) {
            setSubmitted(false);
        } else {
            setSubmitted(true)
        }
    }

    return (
        <div>
            <div className="company-info">
                <div className="company">
                    <Input type={'text'} value={positionTitle} onChange={handlePositionTitle} placeholder={'Position Title'} isSubmitted={submitted} />
                    <span>, </span>
                    <Input type={'text'} value={companyName} onChange={handleCompanyName} placeholder={'Company Name'} isSubmitted={submitted} />
                </div>
                <div className="dates">
                    <Input type={'date'} value={startDate} onChange={handleStartDate} isSubmitted={submitted} />
                    <span> - </span>
                    <Input type={'date'} value={endDate} onChange={handleEndDate} isSubmitted={submitted} />
                </div>
            </div>
            <div className="list-container">
                <Achievements
                    placeholder={'Accomplishments on the job'}
                    isSubmitted={submitted}
                />
            </div>
            <button onClick={() => onDelete(id)}>Remove section</button>
            <Button onClick={handleSubmitted} isSubmitted={submitted}/>
        </div>
        
    )
}
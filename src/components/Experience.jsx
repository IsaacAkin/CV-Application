import { useState } from 'react';
import { Input, Achievements } from "./utils.jsx";

export default function Experience({ isDisabled, id, onDelete }) {
    const [positionTitle, setPositionTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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

    return (
        <div>
            <div className="company-info">
                <div className="company">
                    <Input type={'text'} value={positionTitle} onChange={handlePositionTitle} placeholder={'Position Title'} isDisabled={isDisabled} />
                    <span>, </span>
                    <Input type={'text'} value={companyName} onChange={handleCompanyName} placeholder={'Company Name'} isDisabled={isDisabled} />
                </div>
                <div className="dates">
                    <Input type={'date'} value={startDate} onChange={handleStartDate} isDisabled={isDisabled} />
                    <span> - </span>
                    <Input type={'date'} value={endDate} onChange={handleEndDate} isDisabled={isDisabled} />
                </div>
            </div>
            <div className="list-container">
                <Achievements
                    placeholder={'Accomplishments on the job'}
                    isDisabled={false}
                />
            </div>
            <button onClick={() => onDelete(id)}>Remove section</button>
        </div>
    )
}
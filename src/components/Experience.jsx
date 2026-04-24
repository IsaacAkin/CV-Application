import { useState } from 'react';
import { Input, Button, Achievements } from "./utils.jsx";

export default function Experience({ id, onDelete }) {
    const [positionTitle, setPositionTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [disabled, setDisabled] = useState(false);

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

    function handleDisabled() {
        if (disabled) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <div className="company-info">
                <div className="company">
                    <Input type={'text'} value={positionTitle} onChange={handlePositionTitle} placeholder={'Position Title'} isDisabled={disabled} />
                    <span>, </span>
                    <Input type={'text'} value={companyName} onChange={handleCompanyName} placeholder={'Company Name'} isDisabled={disabled} />
                </div>
                <div className="dates">
                    <Input type={'date'} value={startDate} onChange={handleStartDate} isDisabled={disabled} />
                    <span> - </span>
                    <Input type={'date'} value={endDate} onChange={handleEndDate} isDisabled={disabled} />
                </div>
            </div>
            <div className="list-container">
                <Achievements
                    placeholder={'Accomplishments on the job'}
                    isDisabled={disabled}
                />
            </div>
            <button onClick={() => onDelete(id)}>Remove section</button>
            <Button onClick={handleDisabled} disabled={disabled}/>
        </div>
        
    )
}
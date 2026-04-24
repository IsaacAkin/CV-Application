import { useState } from "react";
import { Input, Achievements } from "./utils.jsx";

export default function Education({ isDisabled, id, onDelete }) {
    const [institutionName, setInstitutionName] = useState('');
    const [degreeTitle, setDegreeTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleInstitutionName(e) {
        setInstitutionName(e.target.value);
    }
    function handleDegreeTitle(e) {
        setDegreeTitle(e.target.value);
    }
    
    function handleStartDate(e) {
        setStartDate(e.target.value);
    }
    
    function handleEndDate(e) {
        setEndDate(e.target.value);
    }

    return (
        <div>
            <div className="school-info">
                <div className="institution">
                    <Input type={'text'} value={institutionName} onChange={handleInstitutionName} placeholder={'Institution Name'} isDisabled={isDisabled} />
                    {degreeTitle && <span>, </span> }
                    <Input type={'text'} value={degreeTitle} onChange={handleDegreeTitle} placeholder={'Degree Title (Optional)'} isDisabled={isDisabled} />
                </div>
                <div className="dates">
                    <Input type={'date'} value={startDate} onChange={handleStartDate} isDisabled={isDisabled} />
                    <span> - </span>
                    <Input type={'date'} value={endDate} onChange={handleEndDate} isDisabled={isDisabled} />
                </div>
            </div>
            <div className="list-container">
                <Achievements
                    placeholder={'Notable things you did there'}
                    isDisabled={false}
                />
            </div>
            <button onClick={() => onDelete(id)}>Remove section</button>
        </div>
    )
}
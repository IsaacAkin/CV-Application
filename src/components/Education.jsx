import { useState } from "react";
import { Input, Button, Achievements } from "./utils.jsx";

export default function Education({ id, onDelete }) {
    const [institutionName, setInstitutionName] = useState('');
    const [degreeTitle, setDegreeTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [disabled, setDisabled] = useState(false);

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
    
    function handleDisabled() {
        if (disabled) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <div className="school-info">
                <div className="institution">
                    <Input type={'text'} value={institutionName} onChange={handleInstitutionName} placeholder={'Institution Name'} isDisabled={disabled} />
                    {degreeTitle && <span>, </span> }
                    <Input type={'text'} value={degreeTitle} onChange={handleDegreeTitle} placeholder={'Degree Title (Optional)'} isDisabled={disabled} />
                </div>
                <div className="dates">
                    <Input type={'date'} value={startDate} onChange={handleStartDate} isDisabled={disabled} />
                    <span> - </span>
                    <Input type={'date'} value={endDate} onChange={handleEndDate} isDisabled={disabled} />
                </div>
            </div>
            <div className="list-container">
                <Achievements
                    placeholder={'Notable things you did there'}
                    isDisabled={disabled}
                />
            </div>
            <button onClick={() => onDelete(id)}>Remove section</button>
            <Button onClick={handleDisabled} disabled={disabled}/>
        </div>
    )
}
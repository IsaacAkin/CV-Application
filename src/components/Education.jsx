import { useState } from "react";
import { Input, Button, Achievements } from "./utils.jsx";

export default function Education({ id, onDelete }) {
    const [institutionName, setInstitutionName] = useState('');
    const [degreeTitle, setDegreeTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [submitted, setSubmitted] = useState(false);

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
    
    function handleSubmitted() {
        if (submitted) {
            setSubmitted(false);
        } else {
            setSubmitted(true)
        }
    }

    return (
        <div>
            <div className="school-info">
                <div className="institution">
                    <Input type={'text'} value={institutionName} onChange={handleInstitutionName} placeholder={'Institution Name'} isSubmitted={submitted} />
                    {degreeTitle && <span>, </span>}
                    <Input type={'text'} value={degreeTitle} onChange={handleDegreeTitle} placeholder={'Degree Title (Optional)'} isSubmitted={submitted} />
                </div>
                <div className="dates">
                    <Input type={'date'} value={startDate} onChange={handleStartDate} isSubmitted={submitted} />
                    {startDate && endDate && <span> - </span>}
                    <Input type={'date'} value={endDate} onChange={handleEndDate} isSubmitted={submitted} />
                </div>
            </div>
            <div className="list-container">
                <Achievements
                    placeholder={'Notable things you did there'}
                    isSubmitted={submitted}
                />
            </div>
            <button onClick={() => onDelete(id)}>Remove section</button>
            <Button onClick={handleSubmitted} isSubmitted={submitted}/>
        </div>
    )
}
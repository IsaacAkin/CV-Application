import { useState } from "react";
import { Input, ListItem, Achievements } from "./utils.jsx";

export default function Education({ isDisabled }) {
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
            {/* <ul className="achievements">
                <li>Got a degree</li>
                <li>Comleted a group project</li>
            </ul> */}
            {/* <ul className='achievements'>
                {
                    achievements.map((achievement) => {
                        <li key={achievement}>{achievement}</li>
                    })
                }
            </ul> */}
            {/* <Achievements>
                <ListItem/>
            </Achievements> */}
        </div>
    )
}